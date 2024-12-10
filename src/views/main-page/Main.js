import React from 'react';
import './Main.css'; 

const Main = () => {
  const image = require('../../assets/images/background-image.jpg');  


  return (
    <div>
      <div className="block-header">
        <img src={image} alt="background-image" />
        <div className="text-overlay">
          <p>BLOCKTEXT</p>
        </div>
      </div>
      <div className="block-content">
        <p>TEXT</p>
      </div>
    </div>
  );
};

export default Main;



