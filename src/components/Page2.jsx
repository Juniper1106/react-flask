import React, { Component } from "react";
import Q2_1 from "./subComponents/Q2_1";
import Q2_2 from "./subComponents/Q2_2";
import Q2_3 from "./subComponents/Q2_3";
import Q2_4 from "./subComponents/Q2_4";

class Page2 extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Q2_1 />
        <Q2_2 />
        <Q2_3 />
        <Q2_4
          optClick={this.props.optClick}
          // isLoop={this.props.isLoop}
        />
      </React.Fragment>
    );
  }
}

export default Page2;
