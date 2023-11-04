import React from "react";
interface SessionsProps {
  sessions: SESSION[];
}
const ExpertSessions: React.FC<SessionsProps> = ({ sessions }) => {
  return (
    <div className="row mt-5">
      <h4 className="text-center display-6">Expert Sessions</h4>
      {sessions.map((session, i) => (
        <div
          key={i}
          className="col-12 text-dark p-3 mb-3 text-center bg-light rounded"
          style={{ backgroundColor: "#ffffe6" }}
        >
          <h5>Title: {session.title || "N/A"}</h5>
          <p>Description: {session.description || "N/A"}</p>
        </div>
      ))}
    </div>
  );
};
export default ExpertSessions;
