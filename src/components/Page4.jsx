import React, { Component } from "react";
import Q4_1 from "./subComponents/Q4_1";
import Q4_2 from "./subComponents/Q4_2";
import Q4_3 from "./subComponents/Q4_3";
import Q4_4 from "./subComponents/Q4_4";

class Page4 extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Q4_1></Q4_1>
        <Q4_2></Q4_2>
        <Q4_3></Q4_3>
        <Q4_4></Q4_4>
      </React.Fragment>
    );
  }
}

export default Page4;
