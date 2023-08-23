import React from 'react';
import { useLocation } from 'react-router-dom';

const Logout = () => {

  const location = useLocation();
  const data = location.state;
  console.log(location, data);

  return (
    <div id="logout-container">
      <h1>You Have Logged Out!</h1>
    </div>
  );

};


export default Logout;