import React, {
  Component,
  useState,
  useEffect,
  request,
  webkitURL,
} from "react";
import axios from "axios";
import HomePage from "./components/HomePage";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import Q5_1 from "./components/Q5_1";
import ResultPage from "./components/ResultPage";

class App extends React.Component {
  state = {
    dream: {
      dreamTitle: "",
      description: "",
      description_ch: "",
      type: "",
      loop: false,
      character: "",
      relation: "",
      action: "",
      scene: "",
      weather: [],
      time: [],
      fantasy: false,
      emotions: [],
      gender: "unset",
      supplement: "",
      resultTxt: "",
    },
    isForget: {
      "3-4": false,
      "3-5": false,
    },
    audio: "",
  };

  handleInput = (e) => {
    let id = e.target.id;
    this.setState((state) => ({
      dream: {
        ...state.dream,
        [id]: e.target.value,
      },
    }));
  };

  isChinesePunc = (x) => {
    let text = [...this.state.dream.resultTxt];
    console.log("get: ", text);
    let output = "";
    let regCut =
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
    let dream = { ...this.state.dream };
    dream.description_ch = output;
    console.log("output: ", output);
    this.setState({ dream });
  };

  handleSingleOptClick = (e) => {
    let dream = { ...this.state.dream };
    dream.type = e.target.value;
    this.setState({ dream });
  };

  handleBoolOptClick2 = (e) => {
    const id = e.target.id;
    let dream = { ...this.state.dream };
    if (id === "2-4-1" && e.target.checked === true) {
      dream.loop = true;
    } else if (id === "2-4-2" && e.target.checked === true) {
      dream.loop = false;
    }
    this.setState({ dream });
  };

  handleBoolOptClick3 = (e) => {
    const id = e.target.id;
    let dream = { ...this.state.dream };
    if (id === "3-6-1" && e.target.checked === true) {
      dream.fantasy = true;
    } else if (id === "3-6-2" && e.target.checked === true) {
      dream.fantasy = false;
    }
    this.setState({ dream });
  };

  handleMultiOptClick3_4 = (e) => {
    let dream = { ...this.state.dream };

    if (e.target.checked && !dream.weather.includes(e.target.value)) {
      dream.weather.push(e.target.value);
    } else if (!e.target.checked && dream.weather.includes(e.target.value)) {
      let i = dream.weather.indexOf(e.target.value);
      dream.weather.splice(i, 1);
    }

    this.setState({ dream });
  };

  handleMultiOptClick3_5 = (e) => {
    let dream = { ...this.state.dream };

    if (e.target.checked && !dream.time.includes(e.target.value)) {
      dream.time.push(e.target.value);
    } else if (!e.target.checked && dream.time.includes(e.target.value)) {
      let i = dream.time.indexOf(e.target.value);
      dream.time.splice(i, 1);
    }

    this.setState({ dream });
  };

  handleForgetClick = (e) => {
    let id = e.target.id;
    this.setState((state) => ({ isForget: { ...state.isForget, [id]: true } }));
  };

  handleMultiTagClick = (e) => {
    let dream = { ...this.state.dream };

    if (e.target.checked && !dream.emotions.includes(e.target.value)) {
      dream.emotions.push(e.target.value);
    } else if (!e.target.checked && dream.emotions.includes(e.target.value)) {
      let i = dream.emotions.indexOf(e.target.value);
      dream.emotions.splice(i, 1);
    }

    this.setState({ dream });
  };

  handleGender = (e) => {
    let dream = { ...this.state.dream };
    dream.gender = e.target.value;
    this.setState({ dream });
  };

  handleForget = (e) => {
    let dream = { ...this.state.dream };
    let isForget = { ...this.state.isForget };

    if (dream.weather.length === 0) {
      isForget["3-4"] = true;
    } else {
      isForget["3-4"] = false;
    }
    if (dream.time.length === 0) {
      isForget["3-5"] = true;
    } else {
      isForget["3-5"] = false;
    }
    this.setState({ isForget });

    if (this.state.isForget["3-4"]) {
      switch (this.state.dream.type) {
        case "nightmare":
          dream.weather = ["thunder"];
          break;
        case "badDream":
          dream.weather = ["rainy"];
          break;
        case "neutralDream":
          dream.weather = ["cloudy"];
          break;
        case "goodDream":
          dream.weather = ["sunny"];
          break;
        case "sweetDream":
          dream.weather = ["sunny"];
          break;
        default:
          break;
      }
    }
    if (this.state.isForget["3-5"] || dream.time.length == 0) {
      dream.time = ["daytime"];
    }

    this.setState({ dream });
  };

  sendData = async (x) => {
    const info = { ...this.state.dream };
    console.log("sent: ", info);
    const { data: post } = await axios.post(
      "http://127.0.0.1:5000/members",
      info
    );
    console.log("My dream: ", post);
  };

  joinDes = (x) => {
    let dream = { ...this.state.dream };
    let resultDes = dream.description + "；" + dream.supplement;
    console.log("joined: ", resultDes);
    dream.resultTxt = resultDes;
    console.log("result: ", dream.resultTxt);
    this.setState({ dream });
  };

  sendEmo = async (x) => {
    let dream = { ...this.state.dream };
    // let audio = this.state.audio;
    console.log("emotions collected: ", dream);
    const { data: post } = await axios.post(
      "http://127.0.0.1:5000/music",
      dream
    );
    this.setState({ audio: post });
    console.log("track: ", post);
  };

  getMusic = async (x) => {
    let audio = this.state.audio;
    audio = await (await axios.get("http://127.0.0.1:5000/music")).data;
    this.setState({ audio });
    console.log("src: ", this.state.audio);
  };

  test = (x) => {
    console.log(this.state);
  };

  render() {
    return (
      <React.Fragment>
        {/* logo */}
        <div className='logo' id='logo'>
          <img src='/images/logo.png' alt='This is the logo of the website' />
        </div>

        {/* extra background*/}
        <div className='extra-background page3' id='extra-background' />
        <div className='lightning flashit1 hide' id='lightning'></div>
        <div class='fogwrapper'>
          <div id='foglayer_01' class='fog'>
            <div className='image01'></div>
            {/* <div className='image02'></div> */}
          </div>
          <div id='foglayer_02' className='fog'>
            <div className='image01'></div>
            {/* <div className='image02'></div> */}
          </div>
          <div id='foglayer_03' className='fog'>
            <div className='image01'></div>
            {/* <div className='image02'></div> */}
          </div>
        </div>

        {/* video */}
        {/* <video
          id='backVideo'
          loop={true}
          autoPlay={true}
          src='/videos/cloudsea.mp4'
        /> */}

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

        <div id='snow' className='snowContainer'></div>
        {/* <HomePage></HomePage>
        <Page1 handleInput={this.handleInput} />
        <Page2
          singleOptClick={this.handleSingleOptClick}
          optClick={this.handleBoolOptClick2}
        /> */}
        <Page3
          handleInput={this.handleInput}
          multiOptClick3_4={this.handleMultiOptClick3_4}
          multiOptClick3_5={this.handleMultiOptClick3_5}
          forgetClick={this.handleForgetClick}
          optClick={this.handleBoolOptClick3}
          handleForget={this.handleForget}
          test={this.test}
          sendData={this.sendData}
        />
        <Page4
          chooseEmo={this.handleMultiTagClick}
          getMusic={this.getMusic}
          sendEmo={this.sendEmo}
          handleGender={this.handleGender}
          test={this.test}
        />
        <Q5_1
          handleInput={this.handleInput}
          isWrap={this.isChinesePunc}
          join={this.joinDes}
          getMusic={this.getMusic}
        />
        <ResultPage
          title={this.state.dream.dreamTitle}
          content={this.state.dream.description_ch}
          music={this.state.audio}
          // getMusic={this.getMusic}
          sendEmo={this.sendEmo}
        />
      </React.Fragment>
    );
  }
}

export default App;
