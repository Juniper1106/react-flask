import React, { Component } from "react";

class Q2_1 extends Component {
  render() {
    return (
      <div className='containerQ hide' id='page2-1'>
        <div className='optQuestion grid-2x5' id='question2-1'>
          <h2>该梦境对于您来说属于...</h2>
          <div id='opt2-1-1' className='singleOpt group2-1'>
            <label id='label2-1-1' htmlFor='2-1-1'>
              噩<span className='lastLetterNoSpacing'>梦</span>
            </label>
            <input
              id='2-1-1'
              name='group2-1'
              value='nightmare'
              type='radio'
              onClick={this.props.optClick}
            />
          </div>
          <div id='opt2-1-2' className='singleOpt group2-1'>
            <label id='label2-1-2' htmlFor='2-1-2'>
              不好的<span className='lastLetterNoSpacing'>梦</span>
            </label>
            <input
              id='2-1-2'
              name='group2-1'
              value='badDream'
              type='radio'
              onClick={this.props.optClick}
            />
          </div>
          <div id='opt2-1-3' className='singleOpt group2-1'>
            <label id='label2-1-3' htmlFor='2-1-3'>
              中性<span className='lastLetterNoSpacing'>梦</span>
            </label>
            <input
              id='2-1-3'
              name='group2-1'
              value='neutralDream'
              type='radio'
              onClick={this.props.optClick}
            />
          </div>
          <div id='opt2-1-4' className='singleOpt group2-1'>
            <label id='label2-1-4' htmlFor='2-1-4'>
              好<span className='lastLetterNoSpacing'>梦</span>
            </label>
            <input
              id='2-1-4'
              name='group2-1'
              value='goodDream'
              type='radio'
              onClick={this.props.optClick}
            />
          </div>
          <div id='opt2-1-5' className='singleOpt group2-1'>
            <label id='label2-1-5' htmlFor='2-1-5'>
              美<span className='lastLetterNoSpacing'>梦</span>
            </label>
            <input
              id='2-1-5'
              name='group2-1'
              value='sweetDream'
              type='radio'
              onClick={this.props.optClick}
            />
          </div>
          <p className='promptTag hide' id='prompt2-1'>
            *请选择<span className='lastLetterNoSpacing'>*</span>
          </p>
        </div>
        <div className='containerB' id='bottomBtn2-1'>
          <div className='bottomBtnContainer'>
            <button className='btn--small next' id='next2-1' />
            <button className='btn--large back' id='backBtnInPage2'>
              返回
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Q2_1;
