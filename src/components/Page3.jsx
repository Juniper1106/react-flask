import React, { Component } from "react";
import Q3_1 from "./subComponents/Q3_1";
import Q3_2 from "./subComponents/Q3_2";
import Q3_3 from "./subComponents/Q3_3";
import Q3_4 from "./subComponents/Q3_4";
import Q3_5 from "./subComponents/Q3_5";
import Q3_6 from "./subComponents/Q3_6";

class Page3 extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Q3_1 />
        <Q3_2 />
        <Q3_3 />
        <Q3_4 />
        <Q3_5 />
        <Q3_6
          optClick={this.props.optClick}
          // test={this.props.test}
        />
      </React.Fragment>
    );
  }
}

export default Page3;
