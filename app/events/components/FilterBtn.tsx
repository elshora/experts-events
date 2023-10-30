import React, { MouseEvent } from "react";
interface FilterButtonProps {
  text: string;
  handleFilterChange: (filter: MouseEvent<HTMLButtonElement>) => void;
}
const FilterBtn: React.FC<FilterButtonProps> = ({
  handleFilterChange,
  text,
}) => {
  return (
    <button
      className="btn text-capitalize d-block"
      onClick={(e) => {
        handleFilterChange(e);
      }}
      value={text}
    >
      {text}
    </button>
  );
};

export default FilterBtn;
