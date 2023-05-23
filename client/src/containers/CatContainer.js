import React from 'react';

import Category from '../components/Category';

const CatContainer = (props) => {

  const categoriesArray = ['Science', 'Film and TV', 'Music', 'History', 'Sports and Leisure', 'Arts and Literature', 'Food and Drink', 'General Knowledge', 'Geography', 'Society and Culture'];

  return (
    <div id="category-container">
      {categoriesArray.map((elem, i) => <Category key={i} value={elem}/>)}
    </div>
  );

};

export default CatContainer;