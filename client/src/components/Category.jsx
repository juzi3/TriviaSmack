import React from "react";

const Category = ({ value, clickHandler }) => {
  // console.log(props);

  return (
    <div
      className="category pointer"
      id={value.replaceAll(" ", "-")}
      onClick={() => clickHandler(value.replaceAll(" ", "_").toLowerCase())}
    >
      <h3 className="category-heading">{value}</h3>
    </div>
  );
};

export default Category;
