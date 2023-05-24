import React from 'react';

const Login = () => {

  return (
    <>
      <form method="POST" action='/login'>
        <input name="username" type="text" placeholder="username"></input>
        <input name="password" type="password" placeholder="password"></input>
        <input className='submit-btn pointer' type='submit' value="Login" />
      </form>
      <span>Don&apos;t have an account? <a href='./signup'>Sign up</a></span>
    </>
  );

};


export default Login;