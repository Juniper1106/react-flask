import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import HomePage from "./components/HomePage";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import Q5_1 from "./components/Q5_1";
import ResultPage from "./components/ResultPage";

// function App() {
//   const [data, setData] = useState([{}]);

//   useEffect(() => {
//     fetch("/members") // get data from /members
//       .then((res) => res.json()) // store data in res and jasonify
//       .then((data) => {
//         setData(data); // change the value of 'data'
//         console.log(data);
//       });
//   }, []);

//   return (
//     <div className='App'>
//       {/* logo */}
//       <div className='logo' id='logo'>
//         <img src='/images/logo.png' alt='This is the logo of the website' />
//       </div>

//       {/* extra background*/}
//       <div className='extra-background' id='extra-background' />

//       {/* video */}
//       <video id='backVideo' loop='' autoPlay='' src='/videos/cloudsea.mp4' />

//       {/* page indicator */}
//       <div className='containerI hide' id='indicatorContainer'>
//         <div className='indicatorGroup' id='indicatorGroup'>
//           <div className='pageIndicator' style={{ left: 0 }} id='indicator' />
//           <div className='pageIndicator' style={{ left: 34 }} id={1} />
//           <div className='pageIndicator' style={{ left: 68 }} id={2} />
//           <div className='pageIndicator' style={{ left: 102 }} id={3} />
//           <div className='pageIndicator' style={{ left: 136 }} id={4} />
//         </div>
//       </div>

//       <HomePage></HomePage>
//       <Page1 value={data.dreamTitle} />
//       <Page2 />
//       <Page3 />
//       <Page4 />
//       <Q5_1 />
//       <ResultPage title={data.dreamTitle} />
//     </div>
//   );
// }

// export default App;

const apiEndpoint = "https://jsonplaceholder.typicode.com/posts";

class App extends React.Component {
  state = {
    dream: {
      title: "",
      description: "",
      // type: "",
      loop: false,
      // character: [""],
      // relation: [""],
      // action: [""],
      // scene: [""],
      // weather: "",
      // time: "",
      fantasy: false,
      // emotions: [""],
    },
  };

  updateTitle = (e) => {
    var dream = { ...this.state.dream };
    dream.title = e.target.value;
    this.setState({ dream });
  };

  updateDes = (e) => {
    var dream = { ...this.state.dream };
    dream.description = e.target.value;
    this.setState({ dream });
  };

  isChinesePunc = () => {
    var text = [...this.state.dream.description];
    var output = "";
    var regCut =
      /[\u0020|\u0021|\u002c|\u002e|\u003b|\u003f|\u00a0|\u202f|\u2420|\u3002|\uff01|\uff0c|\uff1b|\uff1f]/;
    for (let i = 0; i < text.length; i++) {
      if (regCut.test(text[i])) {
        if (i !== text.length - 1) {
          text[i] = "\n";
        } else {
          text[i] = "";
        }
      }
      output += text[i];
    }
    var dream = { ...this.state.dream };
    dream.description = output;
    this.setState({ dream });
  };

  handleBoolOptClick2 = (e) => {
    const id = e.target.id;
    var dream = { ...this.state.dream };
    if (id === "2-4-1" && e.target.checked === true) {
      dream.loop = true;
    } else if (id === "2-4-2" && e.target.checked === true) {
      dream.loop = false;
    }
    this.setState({ dream });
  };

  isLoop = () => {
    console.log(this.state);
  };

  handleBoolOptClick3 = (e) => {
    const id = e.target.id;
    var dream = { ...this.state.dream };
    if (id === "3-6-1" && e.target.checked === true) {
      dream.fantasy = true;
    } else if (id === "3-6-2" && e.target.checked === true) {
      dream.fantasy = false;
    }
    this.setState({ dream });
  };

  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
  }

  render() {
    return (
      <React.Fragment>
        {/* logo */}
        <div className='logo' id='logo'>
          <img src='/images/logo.png' alt='This is the logo of the website' />
        </div>

        {/* extra background*/}
        <div className='extra-background' id='extra-background' />

        {/* video */}
        <video
          id='backVideo'
          loop={true}
          autoPlay={true}
          src='/videos/cloudsea.mp4'
        />

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
        <Page1
          onInputTitle={this.updateTitle}
          onInputDes={this.updateDes}
          isWrap={this.isChinesePunc}
        />
        <Page2
          optClick={this.handleBoolOptClick2}
          // isLoop={this.isLoop}
        />
        <Page3
          optClick={this.handleBoolOptClick3}
          // test={this.isLoop}
        />
        <Page4 />
        <Q5_1 />
        <ResultPage
          title={this.state.dream.title}
          content={this.state.dream.description}
        />
      </React.Fragment>
    );
  }
}

export default App;
