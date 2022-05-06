import React, { Component } from "react";
import Q4_1 from "./subComponents/Q4_1";
import Q4_2 from "./subComponents/Q4_2";
import Q4_3 from "./subComponents/Q4_3";
import Q4_4 from "./subComponents/Q4_4";
import Q4_5 from "./subComponents/Q4_5";

class Page4 extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        {/* <Q4_1 optClick={this.props.chooseEmo} />
        <Q4_2 optClick={this.props.chooseEmo} />
        <Q4_3 optClick={this.props.chooseEmo} sendEmo={this.props.sendEmo} />
        <Q4_4 /> */}
        <Q4_5 />
      </React.Fragment>
    );
  }
}

export default Page4;
