import React from 'react';

const Signup = () => {

  return (
    <div id='signup-container'>
      <form method='POST' action='/signup'>
        <input name="username" type="text" placeholder="username" required='true'></input>
        <input name="password" type="password" placeholder="password" required='true'></input>
        <input className='submit-btn pointer' type='submit' value="Sign up" />
      </form>
    </div>
  );

};


export default Signup;