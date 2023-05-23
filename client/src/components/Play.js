import React from 'react';
import { redirect } from 'react-router-dom';

const Play = () => {

  const handleRedirect = () => {
    console.log('button  clicked');
    // let history = useHistory();
    // history.push('/play');
    return redirect('/play');
  };

  return (

    <div>

      <button id='play' onClick={handleRedirect}>Play</button>
      
    </div>

  );

};

export default Play;