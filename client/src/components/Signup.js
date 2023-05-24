import React from 'react';

const Signup = () => {

  return (
    <>
      <form method='POST' action='/signup'>
        <input name="username" type="text" placeholder="username" required='true'></input>
        <input name="password" type="password" placeholder="password" required='true'></input>
        <input className='submit-btn pointer' type='submit' value="Create User" />
      </form>
    </>
  );

};


export default Signup;