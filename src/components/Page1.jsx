import React, { Component } from "react";
import Q1_1 from "./subComponents/Q1_1";
import Q1_2 from "./subComponents/Q1_2";

class Page1 extends Component {
  render() {
    return (
      <React.Fragment>
        <Q1_1 value={this.props.value} />
        <Q1_2 />
      </React.Fragment>
    );
  }
}

export default Page1;
