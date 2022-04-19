import React, { Component } from "react";

class Q3_2 extends Component {
  state = {};
  render() {
    return (
      <div className='containerQ hide' id='page3-2'>
        <div className='optQuestion grid-2x3' id='question3-2'>
          <h2>上述角色之间的关系是...</h2>
          <div />
          <h2>上述角色的主要行为是...</h2>
          <div className='descInputGroup double'>
            <textarea
              id='relation'
              className='description'
              cols={30}
              rows={4}
              placeholder='例：A与B是恋人/同学/敌对关系'
              defaultValue={""}
            />
          </div>
          <div />
          <div className='descInputGroup double'>
            <textarea
              id='action'
              className='description'
              cols={32}
              rows={4}
              placeholder='例：吃饭、运动'
              defaultValue={""}
            />
          </div>
          <p className='promptTag hide' id='prompt3-2'>
            *请填写<span className='lastLetterNoSpacing'>*</span>
          </p>
        </div>
        <div className='containerB' id='bottomBtn3-2'>
          <div className='bottomBtnContainer'>
            <button className='btn--small prev' id='prev3-2' />
            <button className='btn--small next' id='next3-2' />
          </div>
        </div>
      </div>
    );
  }
}

export default Q3_2;
