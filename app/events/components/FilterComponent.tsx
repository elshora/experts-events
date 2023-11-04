import React, { MouseEvent } from "react";
import FilterBtn from "./FilterBtn";
const FilterComponent = () => {
  const filterText: string[] = ["all", "upcoming", "old"];
  return (
    <section className="row my-3">
      <div className="d-flex gap-3 flex-row justify-content-center border-bottom">
        {filterText.map((text, i) => (
          <FilterBtn text={text} key={i} />
        ))}
      </div>
    </section>
  );
};

export default FilterComponent;
