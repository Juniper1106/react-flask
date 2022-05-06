import React, { Component } from "react";

class Q1_2 extends Component {
  render() {
    return (
      <div className='containerQ hide' id='page1-2'>
        <div className='question' id='question1-2'>
          <h2>用一句话简要描述您的梦境...</h2>
          <div className='descInputGroup'>
            <textarea
              id='description'
              className='description'
              cols={65}
              rows={4}
              placeholder='我梦见...'
              maxLength={100}
              autoComplete='off'
              name='description'
              onChange={this.props.handleInput}
            />
            <label
              htmlFor='description'
              id='descriptionCount'
              className='descriptionCount'>
              0/100
            </label>
          </div>
        </div>
        <div className='containerB' id='bottomBtn1-2'>
          <div className='bottomBtnContainer'>
            <button className='btn--large continue' id='continueBtnInPage1'>
              继续
            </button>
            <button className='btn--small prev' id='prev1-2' />
          </div>
        </div>
      </div>
    );
  }
}

export default Q1_2;
