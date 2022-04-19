import React, { Component } from "react";

class Q5_1 extends Component {
  state = {};
  render() {
    return (
      <div className='containerQ hide' id='page5-1'>
        <div className='question' id='question5-1'>
          <h2>您是否有对该梦境内容的补充描述？</h2>
          <div className='descInputGroup'>
            <textarea
              id='supplement'
              className='description'
              cols={65}
              rows={4}
              placeholder='我还想起来...'
              defaultValue={""}
            />
          </div>
          <button className='skipBtn' id='5-1'>
            跳<span className='lastLetterNoSpacing'>过</span>
          </button>
        </div>
        <div className='containerB' id='bottomBtn5-1'>
          <div className='bottomBtnContainer'>
            <button className='btn--small next' id='next5-1' />
            <button className='btn--large back' id='backBtnInPage5'>
              返回
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Q5_1;
