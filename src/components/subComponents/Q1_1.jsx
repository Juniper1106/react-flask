import React, { Component } from "react";

class Q1_1 extends Component {
  render() {
    return (
      <div className='containerQ hide' id='page1-1'>
        <div className='question' id='question1-1'>
          <h2>为您首先想到的梦境起个名字吧</h2>
          <div className='titleInputGroup'>
            <input
              id='dreamTitle'
              className='dreamTitle'
              type='text'
              placeholder='我的梦境'
              maxLength={20}
              autoComplete='off'
              name='title'
              // value={this.props.value}
              onChange={this.props.onSetTitle}
            />
            <label htmlFor='dreamTitle' id='titleCount' className='titleCount'>
              0/20
            </label>
            <div className='line' />
          </div>
        </div>
        <div className='containerB' id='bottomBtn1-1'>
          <div className='bottomBtnContainer'>
            <button className='btn--small next' id='next1-1' />
            <button className='btn--large back' id='backBtnInPage1'>
              返回
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Q1_1;
