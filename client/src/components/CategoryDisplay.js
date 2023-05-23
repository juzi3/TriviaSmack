import React, { useEffect, useState } from 'react';
import CatContainer from '../containers/CatContainer';

const sportsData = require('../../data/sports.json');

const CategoryDisplay = () => {

  const [catName, setCat] = useState(sportsData[0].category_id);
  const category = catName.replaceAll('_', ' ');

  return (
    <div id='category-display'>
      <h3>Categories: </h3>
      <CatContainer value={category} />
    </div>
  );
};

export default CategoryDisplay;