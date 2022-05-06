import React, { Component } from "react";

class Q3_6 extends Component {
  state = {};
  render() {
    return (
      <div className='containerQ hide' id='page3-6'>
        <div className='optQuestion grid-2x2' id='question3-6'>
          <h2>梦中是否有超自然/超现实事物？</h2>
          <div id='opt3-6-1' className='singleOpt group3-6'>
            <label id='label3-6-1' htmlFor='3-6-1'>
              是
            </label>
            <input
              id='3-6-1'
              name='group3-6'
              value='fantasy'
              type='radio'
              onClick={this.props.optClick}
            />
          </div>
          <div id='opt3-6-2' className='singleOpt group3-6'>
            <label id='label3-6-2' htmlFor='3-6-2'>
              否
            </label>
            <input
              id='3-6-2'
              name='group3-6'
              type='radio'
              onClick={this.props.optClick}
            />
          </div>
          <p className='promptTag hide' id='prompt3-6'>
            *请选择<span className='lastLetterNoSpacing'>*</span>
          </p>
        </div>
        <div className='containerB' id='bottomBtn3-6'>
          <div className='bottomBtnContainer'>
            <button
              className='btn--large continue'
              id='continueBtnInPage3'
              onClick={(b, c) => (this.props.test(b), this.props.sendData(c))}>
              继续
            </button>
            <button className='btn--small prev' id='prev3-6' />
          </div>
        </div>
      </div>
    );
  }
}

export default Q3_6;
