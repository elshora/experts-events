import Link from "next/link";
import React from "react";
interface FilterButtonProps {
  text: string;
}
const FilterBtn: React.FC<FilterButtonProps> = ({ text }) => {
  return (
    <Link
      className="btn text-capitalize d-block"
      href={`/events${text === "all" ? "" : "?period=" + text}`}
    >
      {text}
    </Link>
  );
};

export default FilterBtn;
