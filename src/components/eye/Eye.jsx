import React from 'react';
import './eye.css';

const Eye = () => {
  return (
    <>
      <main className="card-container">
        <div className="ball-bouncing">
          <div className="ball">
            <span className="letterK">K</span>
          </div>
          <div className="coloredBall" img />
          <div className="blackBall" />
        </div>
      </main>
    </>
  );
};

export default Eye;
