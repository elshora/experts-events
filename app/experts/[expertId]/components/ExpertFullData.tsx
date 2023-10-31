import { faPhabricator } from "@fortawesome/free-brands-svg-icons";
import { faPlaceOfWorship } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
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
        <h2 className="text-center display-6">{`${expert?.firstName} ${expert?.lastName}`}</h2>
        <p className="text-muted">{expert.bio}</p>
        <div className="text-start">
          {expert.title && (
            <div className="info-line">
              <FontAwesomeIcon
                icon={faPhabricator}
                width={12}
                className="me-1"
              />
              {expert.title}
            </div>
          )}
          {expert.organization && (
            <div className="info-line">
              <FontAwesomeIcon
                icon={faPlaceOfWorship}
                width={12}
                className="me-1"
              />
              {expert.organization}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ExpertFullData;
