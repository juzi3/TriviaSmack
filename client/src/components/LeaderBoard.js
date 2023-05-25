import React, { useEffect, useState } from 'react';
import Leader from './Leader';

const LeaderBoard = () => {

  const [leaders, setLeaders] = useState([]);

  // get list of scores from secret/scores
  useEffect(() => {
    fetch('../secret/scores', {
      method: 'GET'
    })
      .then(res => res.json())
      .then(data => {
        data.sort((a, b) => b.score - a.score);
        setLeaders(data);

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
      <div id='leader-row-container'>
        {leaders.slice(0, 5).map((leader, i) => {
          const { username, score } = leader;
          return <Leader key={i}  username={username} score={score} rank={i + 1} />;
        })}
      </div>
    </section>

  );

};

export default LeaderBoard;