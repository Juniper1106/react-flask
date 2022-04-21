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
        <Q3_1 handleInput={this.props.handleInput} />
        <Q3_2 handleInput={this.props.handleInput} />
        <Q3_3 handleInput={this.props.handleInput} />
        <Q3_4
          optClick={this.props.multiOptClick3_4}
          forgetClick={this.props.forgetClick}
        />
        <Q3_5
          optClick={this.props.multiOptClick3_5}
          forgetClick={this.props.forgetClick}
        />
        <Q3_6 optClick={this.props.optClick} />
      </React.Fragment>
    );
  }
}

export default Page3;
