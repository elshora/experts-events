import React, { MouseEvent } from "react";
import FilterBtn from "./FilterBtn";

interface FilterComponentProps {
  onFilter: (filter: string) => void;
}

const FilterComponent: React.FC<FilterComponentProps> = ({ onFilter }) => {
  const filterText: string[] = ["all", "upcoming", "old"];

  const handleFilterChange = (event: MouseEvent<HTMLButtonElement>) => {
    const selectedFilter: string = event.currentTarget.value;
    onFilter(selectedFilter);
  };

  return (
    <section className="row my-3">
      <div className="d-flex gap-3 flex-row justify-content-center border-bottom">
        {filterText.map((text, i) => (
          <FilterBtn
            text={text}
            key={i}
            handleFilterChange={handleFilterChange}
          />
        ))}
      </div>
    </section>
  );
};

export default FilterComponent;
