import React from 'react';

const Leader = ({ rank, username, score}) => {

  return (
    <div className='leader-row'>
      <h3>{rank}</h3>
      <h3>{score}</h3>
      <h3>{username}</h3>
    </div>
  );

};

export default Leader;