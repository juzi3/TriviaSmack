import React, { useEffect, useState } from 'react';

const sportsData = require('../../data/sports.json');

const ScoreDisplay = ({value}) => {

  return (
    <div id='Score-display'>
      <div id='timer'>
        <h3>Time: </h3>
      </div>
      
      <div id='score'>
        <h3>Score: {value}</h3>
      </div>
    </div>
  );
};

export default ScoreDisplay;