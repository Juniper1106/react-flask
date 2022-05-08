import React, { Component } from "react";

class Q3_4_v2 extends Component {
  snowCount = () => {
    console.log(document.getElementById("3-4-4").value);
  };
  render() {
    return (
      <React.Fragment>
        <div className='containerQ' id='page3-4'>
          <div className='optQuestion grid-4x2' id='question3-4'>
            <h2>梦中的天气是...</h2>
            <div className='weatherSlider'>
              <h3 className='sliderTxt3'>
                晴朗<span className='lastLetterNoSpacing'>度</span>
              </h3>
              <input
                type='range'
                name=''
                id='3-4-1'
                min={0}
                max={50}
                defaultValue={0}
              />
            </div>
            <div className='weatherSlider'>
              <h3 className='sliderTxt2'>
                雨<span className='lastLetterNoSpacing'>量</span>
              </h3>
              <input
                type='range'
                name=''
                id='3-4-2'
                min={0}
                max={50}
                defaultValue={0}
              />
            </div>
            <div className='weatherSlider'>
              <h3 className='sliderTxt3'>
                积云<span className='lastLetterNoSpacing'>量</span>
              </h3>
              <input
                type='range'
                name=''
                id='3-4-3'
                min={0}
                max={50}
                defaultValue={0}
              />
            </div>
            <div className='weatherSlider'>
              <h3 className='sliderTxt2'>
                雪<span className='lastLetterNoSpacing'>量</span>
              </h3>
              <input
                type='range'
                name=''
                id='3-4-4'
                min={0}
                max={50}
                defaultValue={0}
                // onChange={this.snowCount}
              />
            </div>
            <div className='weatherSlider'>
              <h3 className='sliderTxt3'>
                起雾<span className='lastLetterNoSpacing'>度</span>
              </h3>
              <input
                type='range'
                name=''
                id='3-4-5'
                min={0}
                max={50}
                defaultValue={0}
              />
            </div>
            <div className='weatherSlider'>
              <h3 className='sliderTxt2'>
                雷<span className='lastLetterNoSpacing'>电</span>
              </h3>
              <input
                type='range'
                name=''
                id='3-4-6'
                min={0}
                max={4}
                defaultValue={0}
              />
            </div>
            <button
              className='forgetBtn'
              id='3-4'
              onClick={this.props.forgetClick}>
              不记得<span className='lastLetterNoSpacing'>了</span>
            </button>
          </div>
          <div className='containerB' id='bottomBtn3-4'>
            <div className='bottomBtnContainer'>
              <button className='btn--small prev' id='prev3-4' />
              <button
                className='btn--small next'
                id='next3-4'
                //   onClick={this.props.handleForget}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Q3_4_v2;
