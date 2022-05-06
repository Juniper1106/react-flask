import React, { Component } from "react";

class Q4_2 extends Component {
  state = {};
  render() {
    return (
      <div className='containerQ hide' id='page4-2'>
        <div className='optQuestion grid-4x6' id='question4-2'>
          <h2>梦境中的负面情绪主要有...</h2>
          <div id='opt4-2-1' className='multiTag group4-2'>
            <label id='label4-2-1' htmlFor='4-2-1'>
              懊<span className='lastLetterNoSpacing'>悔</span>
            </label>
            <input
              id='4-2-1'
              name='group4-2'
              value='regret'
              type='checkbox'
              onClick={this.props.optClick}
            />
          </div>
          <div id='opt4-2-2' className='multiTag group4-2'>
            <label id='label4-2-2' htmlFor='4-2-2'>
              悲<span className='lastLetterNoSpacing'>伤</span>
            </label>
            <input
              id='4-2-2'
              name='group4-2'
              value='sad'
              type='checkbox'
              onClick={this.props.optClick}
            />
          </div>
          <div id='opt4-2-3' className='multiTag group4-2'>
            <label id='label4-2-3' htmlFor='4-2-3'>
              鄙<span className='lastLetterNoSpacing'>夷</span>
            </label>
            <input
              id='4-2-3'
              name='group4-2'
              value='scornful'
              type='checkbox'
              onClick={this.props.optClick}
            />
          </div>
          <div id='opt4-2-4' className='multiTag group4-2'>
            <label id='label4-2-4' htmlFor='4-2-4'>
              不<span className='lastLetterNoSpacing'>满</span>
            </label>
            <input
              id='4-2-4'
              name='group4-2'
              value='dissatisfied'
              type='checkbox'
              onClick={this.props.optClick}
            />
          </div>
          <div id='opt4-2-5' className='multiTag group4-2'>
            <label id='label4-2-5' htmlFor='4-2-5'>
              烦<span className='lastLetterNoSpacing'>躁</span>
            </label>
            <input
              id='4-2-5'
              name='group4-2'
              value='edgy'
              type='checkbox'
              onClick={this.props.optClick}
            />
          </div>
          <div id='opt4-2-6' className='multiTag group4-2'>
            <label id='label4-2-6' htmlFor='4-2-6'>
              孤<span className='lastLetterNoSpacing'>独</span>
            </label>
            <input
              id='4-2-6'
              name='group4-2'
              value='lonely'
              type='checkbox'
              onClick={this.props.optClick}
            />
          </div>
          <div id='opt4-2-7' className='multiTag group4-2'>
            <label id='label4-2-7' htmlFor='4-2-7'>
              悔<span className='lastLetterNoSpacing'>恨</span>
            </label>
            <input
              id='4-2-7'
              name='group4-2'
              value='remorse'
              type='checkbox'
              onClick={this.props.optClick}
            />
          </div>
          <div id='opt4-2-8' className='multiTag group4-2'>
            <label id='label4-2-8' htmlFor='4-2-8'>
              嫉<span className='lastLetterNoSpacing'>妒</span>
            </label>
            <input
              id='4-2-8'
              name='group4-2'
              value='jealous'
              type='checkbox'
              onClick={this.props.optClick}
            />
          </div>
          <div id='opt4-2-9' className='multiTag group4-2'>
            <label id='label4-2-9' htmlFor='4-2-9'>
              焦<span className='lastLetterNoSpacing'>虑</span>
            </label>
            <input
              id='4-2-9'
              name='group4-2'
              value='anxious'
              type='checkbox'
              onClick={this.props.optClick}
            />
          </div>
          <div id='opt4-2-10' className='multiTag group4-2'>
            <label id='label4-2-10' htmlFor='4-2-10'>
              恐<span className='lastLetterNoSpacing'>惧</span>
            </label>
            <input
              id='4-2-10'
              name='group4-2'
              value='scared'
              type='checkbox'
              onClick={this.props.optClick}
            />
          </div>
          <div id='opt4-2-11' className='multiTag group4-2'>
            <label id='label4-2-11' htmlFor='4-2-11'>
              伤<span className='lastLetterNoSpacing'>感</span>
            </label>
            <input
              id='4-2-11'
              name='group4-2'
              value='sentimental'
              type='checkbox'
              onClick={this.props.optClick}
            />
          </div>
          <div id='opt4-2-12' className='multiTag group4-2'>
            <label id='label4-2-12' htmlFor='4-2-12'>
              生<span className='lastLetterNoSpacing'>气</span>
            </label>
            <input
              id='4-2-12'
              name='group4-2'
              value='angry'
              type='checkbox'
              onClick={this.props.optClick}
            />
          </div>
          <div id='opt4-2-13' className='multiTag group4-2'>
            <label id='label4-2-13' htmlFor='4-2-13'>
              泄<span className='lastLetterNoSpacing'>气</span>
            </label>
            <input
              id='4-2-13'
              name='group4-2'
              value='discouraged'
              type='checkbox'
              onClick={this.props.optClick}
            />
          </div>
          <div id='opt4-2-14' className='multiTag group4-2'>
            <label id='label4-2-14' htmlFor='4-2-14'>
              羞<span className='lastLetterNoSpacing'>耻</span>
            </label>
            <input
              id='4-2-14'
              name='group4-2'
              value='shame'
              type='checkbox'
              onClick={this.props.optClick}
            />
          </div>
          <div id='opt4-2-15' className='multiTag group4-2'>
            <label id='label4-2-15' htmlFor='4-2-15'>
              厌<span className='lastLetterNoSpacing'>恶</span>
            </label>
            <input
              id='4-2-15'
              name='group4-2'
              value='disgusted'
              type='checkbox'
              onClick={this.props.optClick}
            />
          </div>
          <div id='opt4-2-16' className='multiTag group4-2'>
            <label id='label4-2-16' htmlFor='4-2-16'>
              忧<span className='lastLetterNoSpacing'>虑</span>
            </label>
            <input
              id='4-2-16'
              name='group4-2'
              value='worry'
              type='checkbox'
              onClick={this.props.optClick}
            />
          </div>
          <div id='opt4-2-17' className='multiTag group4-2'>
            <label id='label4-2-17' htmlFor='4-2-17'>
              憎<span className='lastLetterNoSpacing'>恨</span>
            </label>
            <input
              id='4-2-17'
              name='group4-2'
              value='hate'
              type='checkbox'
              onClick={this.props.optClick}
            />
          </div>
          <div id='opt4-2-18' className='multiTag group4-2'>
            <label id='label4-2-18' htmlFor='4-2-18'>
              罪恶<span className='lastLetterNoSpacing'>感</span>
            </label>
            <input
              id='4-2-18'
              name='group4-2'
              value='guilty'
              type='checkbox'
              onClick={this.props.optClick}
            />
          </div>
        </div>
        <div className='containerB' id='bottomBtn4-2'>
          <div className='bottomBtnContainer'>
            <button className='btn--small prev' id='prev4-2' />
            <button className='btn--small next' id='next4-2' />
          </div>
        </div>
      </div>
    );
  }
}

export default Q4_2;
