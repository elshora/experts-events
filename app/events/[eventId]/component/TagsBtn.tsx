import React from "react";
interface TagsBtnProps {
  text: string;
}
const TagsBtn: React.FC<TagsBtnProps> = ({ text }) => {
  return (
    <button className="btn bg-light text-secondary me-2 fw-bold fs-5" disabled>
      {text}
    </button>
  );
};

export default TagsBtn;
