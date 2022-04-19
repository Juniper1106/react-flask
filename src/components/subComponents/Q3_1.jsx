import React, { Component } from "react";

class Q3_1 extends Component {
  state = {};
  render() {
    return (
      <div className='containerQ hide' id='page3-1'>
        <div className='question' id='question3-1'>
          <h2>该梦境中的主要角色有...</h2>
          <div className='descInputGroup'>
            <textarea
              id='character'
              className='description'
              cols={65}
              rows={4}
              placeholder='例：张三、猎人、龙'
              defaultValue={""}
            />
          </div>
          <p className='promptTag hide' id='prompt3-1'>
            *请填写<span className='lastLetterNoSpacing'>*</span>
          </p>
        </div>
        <div className='containerB' id='bottomBtn3-1'>
          <div className='bottomBtnContainer'>
            <button className='btn--small next' id='next3-1' />
            <button className='btn--large back' id='backBtnInPage3'>
              返回
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Q3_1;
