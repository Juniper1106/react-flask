import React, { Component } from "react";

class Q4_1 extends Component {
  state = {};
  render() {
    return (
      <div className='containerQ hide' id='page4-1'>
        <div className='optQuestion grid-4x6' id='question4-1'>
          <h2>梦境中的正面情绪主要有...</h2>
          <div id='opt4-1-1' className='multiTag group4-1'>
            <label id='label4-1-1' htmlFor='4-1-1'>
              爱<span className='lastLetterNoSpacing'>情</span>
            </label>
            <input
              id='4-1-1'
              name='group4-1'
              value='love'
              type='checkbox'
              onClick={this.props.optClick}
            />
          </div>
          <div id='opt4-1-2' className='multiTag group4-1'>
            <label id='label4-1-2' htmlFor='4-1-2'>
              保护<span className='lastLetterNoSpacing'>欲</span>
            </label>
            <input
              id='4-1-2'
              name='group4-1'
              value='protectiveness'
              type='checkbox'
              onClick={this.props.optClick}
            />
          </div>
          <div id='opt4-1-3' className='multiTag group4-1'>
            <label id='label4-1-3' htmlFor='4-1-3'>
              崇<span className='lastLetterNoSpacing'>敬</span>
            </label>
            <input
              id='4-1-3'
              name='group4-1'
              value='respect'
              type='checkbox'
              onClick={this.props.optClick}
            />
          </div>
          <div id='opt4-1-4' className='multiTag group4-1'>
            <label id='label4-1-4' htmlFor='4-1-4'>
              感<span className='lastLetterNoSpacing'>恩</span>
            </label>
            <input
              id='4-1-4'
              name='group4-1'
              value='gratitude'
              type='checkbox'
              onClick={this.props.optClick}
            />
          </div>
          <div id='opt4-1-5' className='multiTag group4-1'>
            <label id='label4-1-5' htmlFor='4-1-5'>
              关<span className='lastLetterNoSpacing'>心</span>
            </label>
            <input
              id='4-1-5'
              name='group4-1'
              value='care'
              type='checkbox'
              onClick={this.props.optClick}
            />
          </div>
          <div id='opt4-1-6' className='multiTag group4-1'>
            <label id='label4-1-6' htmlFor='4-1-6'>
              好<span className='lastLetterNoSpacing'>奇</span>
            </label>
            <input
              id='4-1-6'
              name='group4-1'
              value='curiosity'
              type='checkbox'
              onClick={this.props.optClick}
            />
          </div>
          <div id='opt4-1-7' className='multiTag group4-1'>
            <label id='label4-1-7' htmlFor='4-1-7'>
              惊<span className='lastLetterNoSpacing'>喜</span>
            </label>
            <input
              id='4-1-7'
              name='group4-1'
              value='surprise'
              type='checkbox'
              onClick={this.props.optClick}
            />
          </div>
          <div id='opt4-1-8' className='multiTag group4-1'>
            <label id='label4-1-8' htmlFor='4-1-8'>
              开<span className='lastLetterNoSpacing'>心</span>
            </label>
            <input
              id='4-1-8'
              name='group4-1'
              value='happy'
              type='checkbox'
              onClick={this.props.optClick}
            />
          </div>
          <div id='opt4-1-9' className='multiTag group4-1'>
            <label id='label4-1-9' htmlFor='4-1-9'>
              乐<span className='lastLetterNoSpacing'>观</span>
            </label>
            <input
              id='4-1-9'
              name='group4-1'
              value='optimistic'
              type='checkbox'
              onClick={this.props.optClick}
            />
          </div>
          <div id='opt4-1-10' className='multiTag group4-1'>
            <label id='label4-1-10' htmlFor='4-1-10'>
              期<span className='lastLetterNoSpacing'>待</span>
            </label>
            <input
              id='4-1-10'
              name='group4-1'
              value='expectancy'
              type='checkbox'
              onClick={this.props.optClick}
            />
          </div>
          <div id='opt4-1-11' className='multiTag group4-1'>
            <label id='label4-1-11' htmlFor='4-1-11'>
              惬<span className='lastLetterNoSpacing'>意</span>
            </label>
            <input
              id='4-1-11'
              name='group4-1'
              value='leisured'
              type='checkbox'
              onClick={this.props.optClick}
            />
          </div>
          <div id='opt4-1-12' className='multiTag group4-1'>
            <label id='label4-1-12' htmlFor='4-1-12'>
              热<span className='lastLetterNoSpacing'>情</span>
            </label>
            <input
              id='4-1-12'
              name='group4-1'
              value='passion'
              type='checkbox'
              onClick={this.props.optClick}
            />
          </div>
          <div id='opt4-1-13' className='multiTag group4-1'>
            <label id='label4-1-13' htmlFor='4-1-13'>
              喜<span className='lastLetterNoSpacing'>爱</span>
            </label>
            <input
              id='4-1-13'
              name='group4-1'
              value='favor'
              type='checkbox'
              onClick={this.props.optClick}
            />
          </div>
          <div id='opt4-1-14' className='multiTag group4-1'>
            <label id='label4-1-14' htmlFor='4-1-14'>
              信<span className='lastLetterNoSpacing'>任</span>
            </label>
            <input
              id='4-1-14'
              name='group4-1'
              value='trust'
              type='checkbox'
              onClick={this.props.optClick}
            />
          </div>
          <div id='opt4-1-15' className='multiTag group4-1'>
            <label id='label4-1-15' htmlFor='4-1-15'>
              友<span className='lastLetterNoSpacing'>爱</span>
            </label>
            <input
              id='4-1-15'
              name='group4-1'
              value='friendliness'
              type='checkbox'
              onClick={this.props.optClick}
            />
          </div>
          <div id='opt4-1-16' className='multiTag group4-1'>
            <label id='label4-1-16' htmlFor='4-1-16'>
              自<span className='lastLetterNoSpacing'>信</span>
            </label>
            <input
              id='4-1-16'
              name='group4-1'
              value='confident'
              type='checkbox'
              onClick={this.props.optClick}
            />
          </div>
        </div>
        <div className='containerB' id='bottomBtn4-1'>
          <div className='bottomBtnContainer'>
            <button className='btn--small next' id='next4-1' />
            <button className='btn--large back' id='backBtnInPage4'>
              返回
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Q4_1;
