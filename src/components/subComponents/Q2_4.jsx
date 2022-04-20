import React, { Component } from "react";

class Q2_4 extends Component {
  render() {
    return (
      <div className='containerQ hide' id='page2-4'>
        <div className='optQuestion grid-2x2' id='question2-4'>
          <h2>您是否多次或反复梦见类似梦境？</h2>
          <div id='opt2-4-1' className='singleOpt group2-4'>
            <label id='label2-4-1' htmlFor='2-4-1'>
              是
            </label>
            <input
              id='2-4-1'
              name='group2-4'
              value='loop'
              type='radio'
              // defaultChecked={false}
              onClick={this.props.optClick}
            />
          </div>
          <div id='opt2-4-2' className='singleOpt group2-4'>
            <label id='label2-4-2' htmlFor='2-4-2'>
              否
            </label>
            <input
              id='2-4-2'
              name='group2-4'
              defaultValue=''
              type='radio'
              // defaultChecked={false}
              onClick={this.props.optClick}
            />
          </div>
          <p className='promptTag hide' id='prompt2-4'>
            *请选择<span className='lastLetterNoSpacing'>*</span>
          </p>
        </div>
        <div className='containerB' id='bottomBtn2-4'>
          <div className='bottomBtnContainer'>
            <button
              className='btn--large continue'
              id='continueBtnInPage2'
              // onClick={this.props.isLoop}
            >
              继续
            </button>
            <button className='btn--small prev' id='prev2-4' />
          </div>
        </div>
      </div>
    );
  }
}

export default Q2_4;
