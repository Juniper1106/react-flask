import React, { Component } from "react";

class Q3_5 extends Component {
  state = {};
  render() {
    return (
      <div className='containerQ hide' id='page3-5'>
        <div className='optQuestion grid-2x5' id='question3-5'>
          <h2>（可多选）梦中的时间是...</h2>
          <div id='opt3-5-1' className='multiOpt group3-5'>
            <label id='label3-5-1' htmlFor='3-5-1'>
              清<span className='lastLetterNoSpacing'>晨</span>
            </label>
            <input
              id='3-5-1'
              name='group3-5'
              value='dawn'
              type='checkbox'
              onClick={this.props.optClick}
            />
          </div>
          <div id='opt3-5-2' className='multiOpt group3-5'>
            <label id='label3-5-2' htmlFor='3-5-2'>
              白<span className='lastLetterNoSpacing'>天</span>
            </label>
            <input
              id='3-5-2'
              name='group3-5'
              value='daytime'
              type='checkbox'
              onClick={this.props.optClick}
            />
          </div>
          <div id='opt3-5-3' className='multiOpt group3-5'>
            <label id='label3-5-3' htmlFor='3-5-3'>
              黄<span className='lastLetterNoSpacing'>昏</span>
            </label>
            <input
              id='3-5-3'
              name='group3-5'
              value='twilight'
              type='checkbox'
              onClick={this.props.optClick}
            />
          </div>
          <div id='opt3-5-4' className='multiOpt group3-5'>
            <label id='label3-5-4' htmlFor='3-5-4'>
              夜<span className='lastLetterNoSpacing'>晚</span>
            </label>
            <input
              id='3-5-4'
              name='group3-5'
              value='evening'
              type='checkbox'
              onClick={this.props.optClick}
            />
          </div>
          <div id='opt3-5-5' className='multiOpt group3-5'>
            <label id='label3-5-5' htmlFor='3-5-5'>
              深夜/凌<span className='lastLetterNoSpacing'>晨</span>
            </label>
            <input
              id='3-5-5'
              name='group3-5'
              value='night'
              type='checkbox'
              onClick={this.props.optClick}
            />
          </div>
          <button
            className='forgetBtn'
            id='3-5'
            onClick={this.props.forgetClick}>
            不记得<span className='lastLetterNoSpacing'>了</span>
          </button>
        </div>
        <div className='containerB' id='bottomBtn3-5'>
          <div className='bottomBtnContainer'>
            <button className='btn--small prev' id='prev3-5' />
            <button
              className='btn--small next'
              id='next3-5'
              onClick={this.props.handleForget}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Q3_5;
