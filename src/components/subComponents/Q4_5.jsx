import React, { Component } from "react";

class Q4_5 extends Component {
  state = {};
  render() {
    return (
      <div className='containerQ' id='page4-5'>
        <div className='optQuestion grid-2x5' id='question4-5'>
          <h2>您的性别是...</h2>
          <div />
          <div id='opt4-5-1' className='singleOpt group4-5'>
            <label id='label4-5-1' htmlFor='4-5-1'>
              男<span className='lastLetterNoSpacing'>性</span>
            </label>
            <input id='4-5-1' name='group4-5' defaultValue='' type='radio' />
          </div>
          <div id='opt4-5-2' className='singleOpt group4-5'>
            <label id='label4-5-2' htmlFor='4-5-2'>
              女<span className='lastLetterNoSpacing'>性</span>
            </label>
            <input id='4-5-2' name='group4-5' defaultValue='' type='radio' />
          </div>
          <div id='opt4-5-3' className='singleOpt group4-5'>
            <label id='label4-5-3' htmlFor='4-5-3'>
              保<span className='lastLetterNoSpacing'>密</span>
            </label>
            <input id='4-5-3' name='group4-5' defaultValue='' type='radio' />
          </div>
        </div>
        <div className='containerB' id='bottomBtn4-5'>
          <div className='bottomBtnContainer'>
            <button className='btn--small prev' id='prev4-5' />
            <button className='btn--small next' id='next4-5' />
          </div>
        </div>
      </div>
    );
  }
}

export default Q4_5;
