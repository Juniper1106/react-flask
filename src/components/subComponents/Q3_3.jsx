import React, { Component } from "react";

class Q3_3 extends Component {
  state = {};
  render() {
    return (
      <div className='containerQ hide' id='page3-3'>
        <div className='question' id='question3-3'>
          <h2>梦中的主要场景有...</h2>
          <div className='descInputGroup'>
            <textarea
              id='scene'
              className='description'
              cols={65}
              rows={4}
              placeholder='例：森林、学校、太空'
              onChange={this.props.handleInput}
            />
          </div>
          <p className='promptTag hide' id='prompt3-3'>
            *请填写<span className='lastLetterNoSpacing'>*</span>
          </p>
        </div>
        <div className='containerB' id='bottomBtn3-3'>
          <div className='bottomBtnContainer'>
            <button className='btn--small prev' id='prev3-3' />
            <button className='btn--small next' id='next3-3' />
          </div>
        </div>
      </div>
    );
  }
}

export default Q3_3;
