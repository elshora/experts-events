import { Metadata } from "next";
import getAllEvents from "../lib/getAllEvents";
import EventsList from "./components/EventsList";
import { Suspense } from "react";
export const metadata: Metadata = {
  title: "Events",
};
export default async function eventPage() {
  const data: Promise<EVENT[]> = getAllEvents();
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
