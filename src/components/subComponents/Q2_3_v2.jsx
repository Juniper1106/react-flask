import React, { Component } from "react";

class Q2_3_v2 extends Component {
  state = {};
  render() {
    return (
      <div className='containerQ' id='page2-3'>
        <div className='optQuestion grid-2x3' id='question2-3'>
          <h2>该梦境是否与现实事件相关？</h2>
          <div />
          <h2>您是否多次梦见类似梦境？</h2>
          <div className='descInputGroup double'>
            <div className='textareaOpt'>
              <div className='checkBorder' id='checkBorder2-3-1'></div>
              <label
                id='label2-3-1-1'
                htmlFor='2-3-1-1'
                style={{ opacity: 0.8 }}>
                是
              </label>
              <input
                type='radio'
                name='group2-3-1'
                id='2-3-1-1'
                defaultChecked
              />
              <label
                id='label2-3-1-2'
                htmlFor='2-3-1-2'
                style={{ opacity: 0.3 }}>
                否
              </label>
              <input type='radio' name='group2-3-1' id='2-3-1-2' />
            </div>
            <textarea
              id='relation'
              className='description'
              cols={29}
              rows={4}
              placeholder='最近在现实生活中...'
              onChange={this.props.handleInput}
            />
          </div>
          <div />
          <div className='descInputGroup double'>
            <div className='textareaOpt'>
              <div className='checkBorder' id='checkBorder2-3-2'></div>
              <label
                id='label2-3-2-1'
                htmlFor='2-3-2-1'
                style={{ opacity: 0.8 }}>
                是
              </label>
              <input
                type='radio'
                name='group2-3-2'
                id='2-3-2-1'
                defaultChecked
              />
              <label
                id='label2-3-2-2'
                htmlFor='2-3-2-2'
                style={{ opacity: 0.3 }}>
                否
              </label>
              <input type='radio' name='group2-3-2' id='2-3-2-2' />
            </div>
            <textarea
              id='action'
              className='description'
              cols={29}
              rows={4}
              placeholder='之前还梦见...'
              onChange={this.props.handleInput}
            />
          </div>
          <p className='promptTag hide' id='prompt2-3'>
            *请填写<span className='lastLetterNoSpacing'>*</span>
          </p>
        </div>
        <div className='containerB' id='bottomBtn2-3'>
          <div className='bottomBtnContainer'>
            <button className='btn--large continue' id='continueBtnInPage2'>
              继续
            </button>
            <button className='btn--small prev' id='prev2-3' />
          </div>
        </div>
      </div>
    );
  }
}

export default Q2_3_v2;
