import { faPhabricator } from "@fortawesome/free-brands-svg-icons";
import {
  faBiohazard,
  faBookAtlas,
  faListSquares,
  faPlaceOfWorship,
  faServer,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import ExpertSessions from "./ExpertSessions";
import Link from "next/link";
interface ExpertDataProps {
  expert: EXPERT;
}
const ExpertFullData: React.FC<ExpertDataProps> = ({ expert }) => {
  return (
    <>
      <div className="row">
        <div
          className="avatar mx-auto mb-3"
          style={{ position: "relative", width: "250px", height: "250px" }}
        >
          <Image
            className="rounded"
            src={expert.imgLink}
            layout="fill"
            objectFit="cover"
            alt={expert.firstName || ""}
          />
        </div>
        <h2 className="text-center display-3">{`${expert?.firstName} ${expert?.lastName}`}</h2>
        <hr />
        <div className="text-start">
          <div className="info-line">
            <FontAwesomeIcon
              icon={faPhabricator}
              width={12}
              className="me-1 py-1"
            />
            <span className="fs-5">Job Title: </span>
            {expert.title || "N/A"}
          </div>
          <div className="info-line">
            <FontAwesomeIcon
              icon={faListSquares}
              width={12}
              className="me-1 py-1"
            />
            <span className="fs-5">Bio: </span>
            {expert.bio || "N/A"}
          </div>
          <div className="info-line">
            <FontAwesomeIcon
              icon={faPlaceOfWorship}
              width={12}
              className="me-1 py-1"
            />
            <span className="fs-5">Organization: </span>
            {expert.organization || "N/A"}
          </div>

          <div className="info-line">
            <FontAwesomeIcon icon={faServer} width={12} className="me-1 py-1" />
            <span className="fs-5">Event: </span>
            <Link href={`/events/${expert.events[0]._id}`}>
              {expert.events[0].title || "N/A"}
            </Link>
          </div>
        </div>
      </div>
      {expert.sessions.length > 0 ? (
        <ExpertSessions sessions={expert.sessions} />
      ) : (
        <p className="text-center alert alert-warning mt-3">
          No sessions Found
        </p>
      )}
    </>
  );
};

export default ExpertFullData;
