import React, { Component } from "react";

class Q4_3 extends Component {
  state = {};
  render() {
    return (
      <div className='containerQ hide' id='page4-3'>
        <div className='optQuestion grid-4x6' id='question4-3'>
          <h2>梦境中的中性情绪主要有...</h2>
          <div id='opt4-3-1' className='multiTag group4-3'>
            <label id='label4-3-1' htmlFor='4-3-1'>
              不<span className='lastLetterNoSpacing'>解</span>
            </label>
            <input
              id='4-3-1'
              name='multi group4-3'
              value='puzzled'
              type='checkbox'
              onClick={this.props.optClick}
            />
          </div>
          <div id='opt4-3-2' className='multiTag group4-3'>
            <label id='label4-3-2' htmlFor='4-3-2'>
              怅然若<span className='lastLetterNoSpacing'>失</span>
            </label>
            <input
              id='4-3-2'
              name='multi group4-3'
              value='lost'
              type='checkbox'
              onClick={this.props.optClick}
            />
          </div>
          <div id='opt4-3-3' className='multiTag group4-3'>
            <label id='label4-3-3' htmlFor='4-3-3'>
              尴<span className='lastLetterNoSpacing'>尬</span>
            </label>
            <input
              id='4-3-3'
              name='multi group4-3'
              value='embarrassed'
              type='checkbox'
              onClick={this.props.optClick}
            />
          </div>
          <div id='opt4-3-4' className='multiTag group4-3'>
            <label id='label4-3-4' htmlFor='4-3-4'>
              忽<span className='lastLetterNoSpacing'>视</span>
            </label>
            <input
              id='4-3-4'
              name='multi group4-3'
              value='neglect'
              type='checkbox'
              onClick={this.props.optClick}
            />
          </div>
          <div id='opt4-3-5' className='multiTag group4-3'>
            <label id='label4-3-5' htmlFor='4-3-5'>
              怀<span className='lastLetterNoSpacing'>旧</span>
            </label>
            <input
              id='4-3-5'
              name='multi group4-3'
              value='nostalgia'
              type='checkbox'
              onClick={this.props.optClick}
            />
          </div>
          <div id='opt4-3-6' className='multiTag group4-3'>
            <label id='label4-3-6' htmlFor='4-3-6'>
              坚<span className='lastLetterNoSpacing'>决</span>
            </label>
            <input
              id='4-3-6'
              name='multi group4-3'
              value='determined'
              type='checkbox'
              onClick={this.props.optClick}
            />
          </div>
          <div id='opt4-3-7' className='multiTag group4-3'>
            <label id='label4-3-7' htmlFor='4-3-7'>
              警<span className='lastLetterNoSpacing'>惕</span>
            </label>
            <input
              id='4-3-7'
              name='multi group4-3'
              value='alarmed'
              type='checkbox'
              onClick={this.props.optClick}
            />
          </div>
          <div id='opt4-3-8' className='multiTag group4-3'>
            <label id='label4-3-8' htmlFor='4-3-8'>
              冷<span className='lastLetterNoSpacing'>静</span>
            </label>
            <input
              id='4-3-8'
              name='multi group4-3'
              value='calm'
              type='checkbox'
              onClick={this.props.optClick}
            />
          </div>
          <div id='opt4-3-9' className='multiTag group4-3'>
            <label id='label4-3-9' htmlFor='4-3-9'>
              冷<span className='lastLetterNoSpacing'>漠</span>
            </label>
            <input
              id='4-3-9'
              name='multi group4-3'
              value='indifference'
              type='checkbox'
              onClick={this.props.optClick}
            />
          </div>
          <div id='opt4-3-10' className='multiTag group4-3'>
            <label id='label4-3-10' htmlFor='4-3-10'>
              平<span className='lastLetterNoSpacing'>静</span>
            </label>
            <input
              id='4-3-10'
              name='multi group4-3'
              value='peace'
              type='checkbox'
              onClick={this.props.optClick}
            />
          </div>
          <div id='opt4-3-11' className='multiTag group4-3'>
            <label id='label4-3-11' htmlFor='4-3-11'>
              屈<span className='lastLetterNoSpacing'>服</span>
            </label>
            <input
              id='4-3-11'
              name='multi group4-3'
              value='submission'
              type='checkbox'
              onClick={this.props.optClick}
            />
          </div>
          <div id='opt4-3-12' className='multiTag group4-3'>
            <label id='label4-3-12' htmlFor='4-3-12'>
              无<span className='lastLetterNoSpacing'>聊</span>
            </label>
            <input
              id='4-3-12'
              name='multi group4-3'
              value='boring'
              type='checkbox'
              onClick={this.props.optClick}
            />
          </div>
          <div id='opt4-3-13' className='multiTag group4-3'>
            <label id='label4-3-13' htmlFor='4-3-13'>
              心<span className='lastLetterNoSpacing'>酸</span>
            </label>
            <input
              id='4-3-13'
              name='multi group4-3'
              value='heart-tugging'
              type='checkbox'
              onClick={this.props.optClick}
            />
          </div>
          <div id='opt4-3-14' className='multiTag group4-3'>
            <label id='label4-3-14' htmlFor='4-3-14'>
              疑<span className='lastLetterNoSpacing'>惑</span>
            </label>
            <input
              id='4-3-14'
              name='multi group4-3'
              value='doubt'
              type='checkbox'
              onClick={this.props.optClick}
            />
          </div>
          <div id='opt4-3-15' className='multiTag group4-3'>
            <label id='label4-3-15' htmlFor='4-3-15'>
              专<span className='lastLetterNoSpacing'>注</span>
            </label>
            <input
              id='4-3-15'
              name='multi group4-3'
              value='focused'
              type='checkbox'
              onClick={this.props.optClick}
            />
          </div>
        </div>
        <div className='containerB' id='bottomBtn4-3'>
          <div className='bottomBtnContainer'>
            <button className='btn--small prev' id='prev4-3' />
            <button className='btn--small next' id='next4-3' />
          </div>
        </div>
      </div>
    );
  }
}

export default Q4_3;
