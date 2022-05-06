import React, { Component } from "react";

class Q4_5 extends Component {
  state = {};
  render() {
    return (
      <div className='containerQ hide' id='page4-5'>
        <div className='question' id='question4-5'>
          <h2>其他需补充的主要情绪...</h2>
          <div className='descInputGroup'>
            <textarea
              id='emotion'
              className='description'
              cols={65}
              rows={4}
              placeholder='请输入上述选项中未出现但在您的梦中作为主要情绪出现的情绪'
              defaultValue={""}
            />
          </div>
          <button className='skipBtn' id='4-5'>
            跳<span className='lastLetterNoSpacing'>过</span>
          </button>
        </div>
        <div className='containerB' id='bottomBtn4-5'>
          <div className='bottomBtnContainer'>
            <button className='btn--large continue' id='continueBtnInPage4'>
              继续
            </button>
            <button className='btn--small prev' id='prev4-5' />
          </div>
        </div>
      </div>
    );
  }
}

export default Q4_5;
