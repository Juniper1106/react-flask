import React, { Component } from "react";

class Q2_2 extends Component {
  state = {};
  render() {
    return (
      <div className='containerQ hide' id='page2-2'>
        <div className='optQuestion grid-2x5' id='question2-2'>
          <h2>您在梦中的视角是...</h2>
          <div />
          <div id='opt2-2-1' className='singleOpt group2-2'>
            <label id='label2-2-1' htmlFor='2-2-1'>
              第一人<span className='lastLetterNoSpacing'>称</span>
            </label>
            <input id='2-2-1' name='group2-2' defaultValue='' type='radio' />
          </div>
          <div id='opt2-2-2' className='singleOpt group2-2'>
            <label id='label2-2-2' htmlFor='2-2-2'>
              第三人<span className='lastLetterNoSpacing'>称</span>
            </label>
            <input id='2-2-2' name='group2-2' defaultValue='' type='radio' />
          </div>
          <div id='opt2-2-3' className='singleOpt group2-2'>
            <label id='label2-2-3' htmlFor='2-2-3'>
              不固<span className='lastLetterNoSpacing'>定</span>
            </label>
            <input id='2-2-3' name='group2-2' defaultValue='' type='radio' />
          </div>
          <button className='forgetBtn' id='2-2'>
            不记得<span className='lastLetterNoSpacing'>了</span>
          </button>
        </div>
        <div className='containerB' id='bottomBtn2-2'>
          <div className='bottomBtnContainer'>
            <button className='btn--small prev' id='prev2-2' />
            <button className='btn--small next' id='next2-2' />
          </div>
        </div>
      </div>
    );
  }
}

export default Q2_2;
