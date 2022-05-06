import React, { Component } from "react";
import axios from "axios";

class HomePage extends Component {
  render() {
    return (
      <div className='homeContent' id='page0'>
        <div>
          <h1>
            让你的梦境来到现实
            <br />
            <br />
            <span className='subTitle'>MAKE YOUR DREAM COME TRUE</span>
          </h1>
        </div>
        <button className='homeBtn' id='homeBtn'>
          开始体验
        </button>
      </div>
    );
  }
}

export default HomePage;
