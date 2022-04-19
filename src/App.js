import React, { Component, useState, useEffect } from "react";
import HomePage from "./components/HomePage";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import Q5_1 from "./components/Q5_1";
import ResultPage from "./components/ResultPage";

function App() {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    fetch("/members") // get data from /members
      .then((res) => res.json()) // store data in res and jasonify
      .then((data) => {
        setData(data); // change the value of 'data'
        console.log(data);
      });
  }, []);

  return (
    <div className='App'>
      {/* logo */}
      <div className='logo' id='logo'>
        <img src='/images/logo.png' alt='This is the logo of the website' />
      </div>

      {/* extra background*/}
      <div className='extra-background' id='extra-background' />

      {/* video */}
      <video id='backVideo' loop='' autoPlay='' src='/videos/cloudsea.mp4' />

      {/* page indicator */}
      <div className='containerI hide' id='indicatorContainer'>
        <div className='indicatorGroup' id='indicatorGroup'>
          <div className='pageIndicator' style={{ left: 0 }} id='indicator' />
          <div className='pageIndicator' style={{ left: 34 }} id={1} />
          <div className='pageIndicator' style={{ left: 68 }} id={2} />
          <div className='pageIndicator' style={{ left: 102 }} id={3} />
          <div className='pageIndicator' style={{ left: 136 }} id={4} />
        </div>
      </div>

      <HomePage></HomePage>
      <Page1 value={data.dreamTitle} />
      <Page2 />
      <Page3 />
      <Page4 />
      <Q5_1 />
      <ResultPage title={data.dreamTitle} />
    </div>
  );
}

export default App;
