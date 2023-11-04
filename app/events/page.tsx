import { Metadata } from "next";
import getAllEvents from "../lib/getAllEvents";
import EventsList from "./components/EventsList";
import { Suspense } from "react";
export const metadata: Metadata = {
  title: "Events",
};
export default async function eventPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  // loading all events data in server before rendering
  const data: Promise<EVENT[]> = getAllEvents(searchParams.period);
  const events = await data;
  const content = (
    <section className="container">
      <Suspense>
        <EventsList events={events} />
      </Suspense>
    </section>
  );
  return content;
}
