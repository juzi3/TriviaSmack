import React, { useEffect } from 'react';
import Leader from './Leader';

const LeaderBoard = () => {

  const leaders = [];
  // get list of scores from secret/scores
  useEffect(() => {
    fetch('../secret/scores', {
      method: 'GET'
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        
      })
      .catch(err => console.log('Error in leaderboard fetch', err));
  }, []);

  return (

    <section id='leaderboard'>
      <header>Top 5 Players</header>
      <div id='leaderboard-col-title'>
        <span>Rank</span>
        <span>Score</span>
        <span>Name</span>
      </div>
      {/* {for (let i = 1; i < 6; i++) {

      }} */}
      <Leader />
      <Leader />
      <Leader />
      <Leader />
      <Leader />
    </section>

  );

};

export default LeaderBoard;