import Image from "next/image";
import React from "react";
interface SessionsProps {
  sessions: SESSION[];
}
const EventSessions: React.FC<SessionsProps> = ({ sessions }) => {
  return (
    <div className="row">
      {sessions.map((session, i) => (
        <div
          key={i}
          className="col-12 text-dark p-3 mb-3"
          style={{ backgroundColor: "#ffffe6" }}
        >
          <h5>Title: {session.title ?? "N/A"}</h5>
          <p>Description: {session.description || "N/A"}</p>
          <div>
            <h5 className="text-center border-bottom w-fit-content">
              {session?.experts.length > 0 && "Session Experts"}
            </h5>{" "}
            <div className="row">
              {session?.experts.length > 0 &&
                session.experts.map((expert, index) => (
                  <div key={index} className="col-6 ">
                    <div className="bg-white rounded p-3 mb-3 text-center">
                      {expert.imgLink && (
                        <Image
                          className="rounded d-block mx-auto"
                          src={expert.imgLink}
                          width={100}
                          height={100}
                          alt={expert.firstName ?? ""}
                        />
                      )}
                      <h6 className="mt-3 fw-bold text-muted">
                        {expert.firstName} {expert.firstName}
                      </h6>
                      <p className="text-muted  session-bio">{expert.bio}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default EventSessions;
