import getEvent from "@/app/lib/getEvent";
import moment from "moment";
import type { Metadata } from "next";
import TagsBtn from "./component/TagsBtn";

type Params = {
  params: {
    eventId: string;
  };
};

export async function generateMetadata({
  params: { eventId },
}: Params): Promise<Metadata> {
  const eventData: Promise<EVENT> = getEvent(eventId);
  const singleEvent: EVENT = await eventData;

  return {
    title: singleEvent.title,
    description: `This is the page of ${singleEvent.description}`,
  };
}

export default async function eventPage({ params: { eventId } }: Params) {
  const eventData: Promise<EVENT> = getEvent(eventId);
  const singleEvent = await eventData;
  return (
    <>
      <section className="container my-5">
        <div className="row">
          <h2 className="display-5">{singleEvent.title}</h2>
          <p className="text-muted">
            {moment(singleEvent.date).format("MMMM D, YYYY [at] h:mm a")}
          </p>
          <div className="tags pt-1">
            {singleEvent.tags &&
              singleEvent.tags.map((tag, i) => <TagsBtn key={i} text={tag} />)}
          </div>
          <div className="pt-1">
            <h3 className="d-inline-block">Organizer:</h3>{" "}
            <span className="text-muted">{singleEvent.organizer || "N/A"}</span>
          </div>
          <div className=" pt-3">
            <h3 className="d-inline-block">Description: </h3>{" "}
            <span className="fs-5 text-muted">{singleEvent.description}</span>
          </div>
        </div>
        <div className="row gap-3">
          <h4 className="mt-3 fw-bold">Sessions:</h4>
          {singleEvent.sessions.length > 0 &&
            singleEvent.sessions.map((session) => (
              <>
                <div className="col-12 col-md-3 col-lg-3 mb-2 bg-secondary text-light p-3">
                  <h5>{session.title}</h5>
                  <p>{session.description}</p>
                </div>
              </>
            ))}
        </div>
      </section>
    </>
  );
}
