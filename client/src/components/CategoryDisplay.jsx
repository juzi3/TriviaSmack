import React, { useEffect, useState } from "react";
import CatContainer from "../containers/CatContainer";

const CategoryDisplay = ({ clickHandler }) => {
  // const [catName, setCat] = useState(sportsData[0].category_id);
  // const category = catName.replaceAll('_', ' ');

  return (
    <div id="category-display">
      <h3>Choose A Category: </h3>
      <CatContainer clickHandler={clickHandler} />
    </div>
  );
};

export default CategoryDisplay;
