import React from 'react';

import io from '../socket';

function JoinBlock() {

  const connectSocket = () => {
    console.log(io());
  };

  return (
    <div className="container">
      <input className='input' type='text' placeholder='room id' />
      <input className='input' type='text' placeholder='your name' />
      <button className='btn btn-success'>Sign in</button>
    </div>
  )
}

export default JoinBlock;