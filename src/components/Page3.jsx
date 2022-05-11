import React, { Component } from "react";
import Q3_1 from "./subComponents/Q3_1";
import Q3_2 from "./subComponents/Q3_2";
import Q3_3 from "./subComponents/Q3_3";
import Q3_4 from "./subComponents/Q3_4";
import Q3_4_v2 from "./subComponents/Q3_4_v2";
import Q3_5 from "./subComponents/Q3_5";
import Q3_6 from "./subComponents/Q3_6";

class Page3 extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Q3_1 handleInput={this.props.handleInput} />
        <Q3_2 handleInput={this.props.handleInput} />
        <Q3_3 handleInput={this.props.handleInput} />
        <Q3_4_v2
          test={this.props.test}
          forgetClick={this.props.forgetClick}
          handleWeather={this.props.handleWeather}
          handleSunny={this.props.handleSunny}
        />
        <Q3_5
          optClick={this.props.multiOptClick3_5}
          forgetClick={this.props.forgetClick}
          handleForget={this.props.handleForget}
        />
        <Q3_6
          optClick={this.props.optClick}
          handleForget={this.props.handleForget}
          test={this.props.test}
          sendData={this.props.sendData}
        />
      </React.Fragment>
    );
  }
}

export default Page3;
