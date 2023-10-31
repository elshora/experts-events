import getEvent from "@/app/lib/getEvent";
import moment from "moment";
import type { Metadata } from "next";
import TagsBtn from "./component/TagsBtn";
import EventSessions from "./component/EventSessions";
import { Suspense } from "react";
import Link from "next/link";
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
    title: singleEvent?.title,
    description: `This is the page of ${singleEvent?.description}`,
  };
}

export default async function eventPage({ params: { eventId } }: Params) {
  const eventData: Promise<EVENT> = await getEvent(eventId);
  const singleEvent = await eventData;
  return (
    <section className="container my-5">
      <div className="row">
        <h2 className="display-5">{singleEvent.title}</h2>
        <p className="text-muted">
          {moment(singleEvent.date).format("MMMM D, YYYY [at] h:mm a")}
        </p>
        <div className="tags pt-1">
          {singleEvent?.tags &&
            singleEvent?.tags.map((tag, i) => <TagsBtn key={i} text={tag} />)}
        </div>
        <Link
          className="btn btn-info my-1 text-dark"
          href={singleEvent.link}
          rel="noopener noreferrer"
          target="_blank"
        >
          Go to Event Original Page
        </Link>
        <hr />
        <div className="pt-1">
          <h3 className="d-inline-block">Organizer:</h3>{" "}
          <span className="text-muted">{singleEvent?.organizer || "N/A"}</span>
        </div>
        <div className="pt-1">
          <h3 className="d-inline-block">Location:</h3>{" "}
          <span className="text-muted">{singleEvent?.location || "N/A"}</span>
        </div>
        <div className=" pt-1">
          <h3 className="d-inline-block">Description: </h3>{" "}
          <span className="fs-5 text-muted">
            {singleEvent.description || "N/A"}
          </span>
        </div>
      </div>
      {singleEvent.sessions?.length > 0 && (
        <h4
          className="mt-5 text-center display-6 text-white bg-warning rounded mx-auto py-1 px-2"
          style={{
            width: "fit-content",
          }}
        >
          Sessions
        </h4>
      )}
      <Suspense>
        {singleEvent?.sessions?.length > 0 && (
          <EventSessions sessions={singleEvent.sessions} />
        )}
      </Suspense>
    </section>
  );
}
