import React, { Component } from "react";

class Q3_4 extends Component {
  state = {};
  render() {
    return (
      <div className='containerQ hide' id='page3-4'>
        <div className='optQuestion grid-2x5' id='question3-4'>
          <h2>（可多选）梦中的天气是...</h2>
          <div id='opt3-4-1' className='multiOpt group3-4'>
            <label id='label3-4-1' htmlFor='3-4-1'>
              晴<span className='lastLetterNoSpacing'>天</span>
            </label>
            <input
              id='3-4-1'
              name='group3-4'
              value='sunny'
              type='checkbox'
              onClick={this.props.optClick}
            />
          </div>
          <div id='opt3-4-2' className='multiOpt group3-4'>
            <label id='label3-4-2' htmlFor='3-4-2'>
              阴<span className='lastLetterNoSpacing'>天</span>
            </label>
            <input
              id='3-4-2'
              name='group3-4'
              value='cloudy'
              type='checkbox'
              onClick={this.props.optClick}
            />
          </div>
          <div id='opt3-4-3' className='multiOpt group3-4'>
            <label id='label3-4-3' htmlFor='3-4-3'>
              雨<span className='lastLetterNoSpacing'>天</span>
            </label>
            <input
              id='3-4-3'
              name='group3-4'
              value='rainy'
              type='checkbox'
              onClick={this.props.optClick}
            />
          </div>
          <div id='opt3-4-4' className='multiOpt group3-4'>
            <label id='label3-4-4' htmlFor='3-4-4'>
              雾/<span className='lastLetterNoSpacing'>霾</span>
            </label>
            <input
              id='3-4-4'
              name='group3-4'
              value='foggy'
              type='checkbox'
              onClick={this.props.optClick}
            />
          </div>
          <div id='opt3-4-5' className='multiOpt group3-4'>
            <label id='label3-4-5' htmlFor='3-4-5'>
              雷<span className='lastLetterNoSpacing'>电</span>
            </label>
            <input
              id='3-4-5'
              name='group3-4'
              value='thunder'
              type='checkbox'
              onClick={this.props.optClick}
            />
          </div>
          <button
            className='forgetBtn'
            id='3-4'
            onClick={this.props.forgetClick}>
            不记得<span className='lastLetterNoSpacing'>了</span>
          </button>
        </div>
        <div className='containerB' id='bottomBtn3-4'>
          <div className='bottomBtnContainer'>
            <button className='btn--small prev' id='prev3-4' />
            <button
              className='btn--small next'
              id='next3-4'
              onClick={this.props.test}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Q3_4;
