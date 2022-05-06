import React, { Component } from "react";

class Q4_4 extends Component {
  state = {};
  render() {
    return (
      <div className='containerQ hide' id='page4-4'>
        <div className='optQuestion grid-2x5' id='question4-4'>
          <h2>您的性别是...</h2>
          <div />
          <div id='opt4-4-1' className='singleOpt group4-4'>
            <label id='label4-4-1' htmlFor='4-4-1'>
              男<span className='lastLetterNoSpacing'>性</span>
            </label>
            <input id='4-4-1' name='group4-4' defaultValue='' type='radio' />
          </div>
          <div id='opt4-4-2' className='singleOpt group4-4'>
            <label id='label4-4-2' htmlFor='4-4-2'>
              女<span className='lastLetterNoSpacing'>性</span>
            </label>
            <input id='4-4-2' name='group4-4' defaultValue='' type='radio' />
          </div>
          <div id='opt4-4-3' className='singleOpt group4-4'>
            <label id='label4-4-3' htmlFor='4-4-3'>
              保<span className='lastLetterNoSpacing'>密</span>
            </label>
            <input id='4-4-3' name='group4-4' defaultValue='' type='radio' />
          </div>
        </div>
        <div className='containerB' id='bottomBtn4-4'>
          <div className='bottomBtnContainer'>
            <button className='btn--small prev' id='prev4-4' />
            <button className='btn--small next' id='next4-4' />
          </div>
        </div>
      </div>
    );
  }
}

export default Q4_4;
