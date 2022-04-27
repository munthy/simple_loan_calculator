import React from 'react';
import Calculator from './Calculator.js'

async function getMessage(message){
  const apiURL = `http://localhost:4500/test/${message}`;
  
  const response = await fetch(apiURL, {
      method: "GET",
  })
  return response;
}


function App() {



  return (
    <>
      <Calculator />
    </>
  );
}

export default App;
