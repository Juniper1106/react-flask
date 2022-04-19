import React, { Component } from "react";

class Q2_3 extends Component {
  render() {
    return (
      <div className='containerQ hide' id='page2-3'>
        <div className='question' id='question2-3'>
          <h2>该梦境的现实原型是...</h2>
          <div className='descInputGroup'>
            <textarea
              id='realityEvent'
              className='description'
              cols={65}
              rows={4}
              placeholder='最近在现实生活中...'
              defaultValue={""}
            />
          </div>
          <button className='skipBtn' id='2-3'>
            跳<span className='lastLetterNoSpacing'>过</span>
          </button>
        </div>
        <div className='containerB' id='bottomBtn2-3'>
          <div className='bottomBtnContainer'>
            <button className='btn--small prev' id='prev2-3' />
            <button className='btn--small next' id='next2-3' />
          </div>
        </div>
      </div>
    );
  }
}

export default Q2_3;
