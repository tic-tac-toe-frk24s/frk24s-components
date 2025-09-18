import React, { useState } from 'react';
import Header from './components/Header/Header';
import ResetButton from './components/ResetButton/ResetButton';
import StartButton from './components/StartButton/StartButton';
import Regler from './components/Regler/Regler';

function App() {
  

  const appContainer = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh', 
    backgroundColor: '#dfe6e9', 
  };

  const appStyle = {
    width: '80%',
    maxWidth: '700px',
    padding: '2.5rem',
    fontFamily: 'Arial, sans-serif',
    background: 'linear-gradient(145deg, #74b9ff, #0984e3)', 
    borderRadius: '20px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
    textAlign: 'center',
    color: '#070707ff',
  };

  const buttonContainer = {
    display: 'flex',
    justifyContent: 'center',
    gap: '1.5rem',
    marginTop: '2rem',
  };

  return (
    <div style={appContainer}>
      <div style={appStyle}>
        <Header  />

        <div style={buttonContainer}>
          {/* <ResetButton label="Reset" /> */}
          <StartButton label="Start" />
          <Regler buttonLabel="Regler" />
        </div>
      </div>
    </div>
  );
}

export default App;
