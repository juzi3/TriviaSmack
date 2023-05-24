import React from 'react';
import { redirect } from 'react-router-dom';

const Play = ({ clickHandler }) => {

  // const handleRedirect = () => {
  //   console.log('button  clicked');
  //   // let history = useHistory();
  //   // history.push('/play');
  //   return redirect('/play');
  // };

  return (

    <div id='play-section'>

      <button id='play' className='pointer' onClick={() => clickHandler(true)}>Play</button>
      
    </div>

  );

};

export default Play;