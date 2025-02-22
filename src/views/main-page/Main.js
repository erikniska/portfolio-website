import React from "react";
import "./Main.css";

const Main = () => {
  return (
    <div>
      <div className="margin-header"></div>
      <div className="block-header-wrapper">
        <svg
          className="svg-background"
          viewBox="0 0 960 540"
          width="960"
          height="540"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="0" y="0" width="960" height="540" fill="#727D73"></rect>
          <path
            className="wave-1-path-1"
            d="M0 349L32 348C64 347 128 345 192 348.3C256 351.7 320 360.3 384 366.8C448 373.3 512 377.7 576 374C640 370.3 704 358.7 768 352C832 345.3 896 343.7 928 342.8L960 342L960 541L928 541C896 541 832 541 768 541C704 541 640 541 576 541C512 541 448 541 384 541C320 541 256 541 192 541C128 541 64 541 32 541L0 541Z"
            fill="#aab99a"
          ></path>
          <path
            className="wave-1-path-2"
            d="M0 393L32 395.3C64 397.7 128 402.3 192 408.8C256 415.3 320 423.7 384 425.5C448 427.3 512 422.7 576 419.8C640 417 704 416 768 414.2C832 412.3 896 409.7 928 408.3L960 407L960 541L928 541C896 541 832 541 768 541C704 541 640 541 576 541C512 541 448 541 384 541C320 541 256 541 192 541C128 541 64 541 32 541L0 541Z"
            fill="#bbcbb5"
          ></path>
          <path
            className="wave-1-path-3"
            d="M0 473L32 469.7C64 466.3 128 459.7 192 460.5C256 461.3 320 469.7 384 475.7C448 481.7 512 485.3 576 486.5C640 487.7 704 486.3 768 482.3C832 478.3 896 471.7 928 468.3L960 465L960 541L928 541C896 541 832 541 768 541C704 541 640 541 576 541C512 541 448 541 384 541C320 541 256 541 192 541C128 541 64 541 32 541L0 541Z"
            fill="#d0ddd0"
          ></path>
        </svg>
        <div className="block-header">
          <div className="grid-box">
            <p1>Hej! Mitt namn är</p1>
            <h1>ERIK NISKA</h1>
            <h2>Välkommen till min hemsida!</h2>
            <p2>Scrolla för att lära känna mig bättre!</p2>
          </div>
        </div>
      </div>
      <div className="block-content-wrapper">
        <div className="block-content">
          <p>TEXT</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
