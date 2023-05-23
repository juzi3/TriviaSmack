import React from 'react';

const Category = (props) => {
  console.log(props);

  return (
    <div className="category" id={props.value.replaceAll(' ', '-')}>
      <button className="category-btn">{props.value}</button>
    </div>
  );

};

export default Category;