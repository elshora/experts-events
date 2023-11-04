"use client";
import {
  faLocationDot,
  faPersonCirclePlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import FilterComponent from "./FilterComponent";
import moment from "moment";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";

interface FilterComponentProps {
  events: EVENT[];
}
const EventsList: React.FC<FilterComponentProps> = ({ events }) => {
  const [hydrated, setHydrated] = useState(false);
  React.useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) {
    // Returns null on first render, so the client and server match
    return null;
  }
  return (
    <>
      <FilterComponent />
      <div className="row">
        {events?.map((ele) => (
          <article className="col-12 col-md-6 col-lg-4 " key={ele._id}>
            <Link
              href={`/events/${ele._id}`}
              className="text-decoration-none text-dark"
              prefetch
            >
              <div className="p-4 mb-4 bg-white event-card">
                <header className="d-flex justify-content-between">
                  <p className="py-1 px-3">category</p>
                  <p
                    className="py-1 px-3"
                    style={{ backgroundColor: "#f9f3cc" }}
                  >
                    {moment(ele.date).format("MMMM D")}
                  </p>
                </header>
                <h5 className="text-center mb-3">{ele.title}</h5>
                {/* <p className="fs-5 fw-light">{ele.desc}</p> */}
                {ele.organizer && (
                  <div className="info-line">
                    <FontAwesomeIcon
                      icon={faPersonCirclePlus}
                      width={12}
                      className="me-1"
                    />
                    {ele.organizer}
                  </div>
                )}
                {ele.location && (
                  <div className="info-line">
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      width={12}
                      className="me-1"
                    />
                    {ele.location}
                  </div>
                )}
                <div className="info-line">
                  <FontAwesomeIcon
                    icon={faCalendar}
                    width={12}
                    className="me-1"
                  />
                  {moment(ele.date).format("MMMM D, YYYY [at] h:mm a")}
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </>
  );
};

export default EventsList;
