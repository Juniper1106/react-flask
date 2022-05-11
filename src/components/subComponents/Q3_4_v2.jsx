import React, { Component } from "react";

class Q3_4_v2 extends Component {
  map = (inNum, in_min, in_max, out_min, out_max) => {
    return (
      ((inNum - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
    );
  };

  handleSunny = (e) => {
    // lightning
    console.log("handled");
    if (
      document.getElementById("3-4-3").value >
      Math.round(this.map(e.target.value, 1, 50, 4, 0))
    ) {
      document.getElementById("3-4-3").value = Math.round(
        this.map(e.target.value, 1, 50, 4, 0)
      );
    }

    // separated by 25
    if (e.target.value > 0 && e.target.value <= 25) {
      // rainy
      if (
        document.getElementById("3-4-1").value >
        Math.round(this.map(e.target.value, 1, 25, 20, 0))
      ) {
        document.getElementById("3-4-1").value = Math.round(
          this.map(e.target.value, 1, 25, 20, 0)
        );
      }

      // cloudy
      if (
        document.getElementById("3-4-2").value >
        Math.round(this.map(e.target.value, 1, 25, 3, 0))
      ) {
        document.getElementById("3-4-2").value = Math.round(
          this.map(e.target.value, 1, 25, 20, 0)
        );
      }

      // foggy
      if (
        document.getElementById("3-4-4").value >
        Math.round(this.map(e.target.value, 1, 25, 3, 0))
      ) {
        document.getElementById("3-4-4").value = Math.round(
          this.map(e.target.value, 1, 25, 3, 0)
        );
      }

      // snow
      if (
        document.getElementById("3-4-5").value >
        Math.round(this.map(e.target.value, 1, 25, 50, 1))
      ) {
        document.getElementById("3-4-5").value = Math.round(
          this.map(e.target.value, 1, 25, 50, 1)
        );
      }
    } else {
      // >25
      document.getElementById("3-4-1").value = 0; // rainy
      document.getElementById("3-4-4").value = 0; // foggy
      document.getElementById("3-4-5").value = 0; // snowy

      // cloudy
      // console.log(Math.round(this.map(e.target.value, 26, 50, 1, 0)));
      if (
        document.getElementById("3-4-2").value >
        Math.round(this.map(e.target.value, 26, 50, 1, 0))
      ) {
        document.getElementById("3-4-2").value = Math.round(
          this.map(e.target.value, 26, 50, 1, 0)
        );
      }
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className='containerQ hide' id='page3-4'>
          <div className='optQuestion grid-4x2' id='question3-4'>
            <h2>梦中的天气是...</h2>
            <div className='weatherSlider' id='sliderGroup3-4-1'>
              <h3 className='sliderTxt2'>
                雨<span className='lastLetterNoSpacing'>量</span>
              </h3>
              <input
                type='range'
                name='rainy'
                id='3-4-1'
                min={0}
                max={20}
                defaultValue={12}
              />
            </div>
            <div className='weatherSlider' id='sliderGroup3-4-2'>
              <h3 className='sliderTxt3'>
                积云<span className='lastLetterNoSpacing'>量</span>
              </h3>
              <input
                type='range'
                name='cloudy'
                id='3-4-2'
                min={0}
                max={3}
                defaultValue={0}
              />
            </div>
            <div className='weatherSlider' id='sliderGroup3-4-3'>
              <h3 className='sliderTxt2'>
                雷<span className='lastLetterNoSpacing'>电</span>
              </h3>
              <input
                type='range'
                name='lightning'
                id='3-4-3'
                min={0}
                max={4}
                defaultValue={3}
              />
            </div>
            <div className='weatherSlider' id='sliderGroup3-4-4'>
              <h3 className='sliderTxt3'>
                起雾<span className='lastLetterNoSpacing'>度</span>
              </h3>
              <input
                type='range'
                name='foggy'
                id='3-4-4'
                min={0}
                max={3}
                defaultValue={2}
              />
            </div>
            <div className='weatherSlider' id='sliderGroup3-4-5'>
              <h3 className='sliderTxt2'>
                雪<span className='lastLetterNoSpacing'>量</span>
              </h3>
              <input
                type='range'
                name='snowy'
                id='3-4-5'
                min={0}
                max={50}
                defaultValue={0}
              />
            </div>
            <div className='weatherSlider' id='sliderGroup3-4-6'>
              <h3 className='sliderTxt3'>
                晴朗<span className='lastLetterNoSpacing'>度</span>
              </h3>
              <input
                type='range'
                name='sunny'
                id='3-4-6'
                min={0}
                max={50}
                defaultValue={0}
                onChange={this.handleSunny}
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
                onClick={(a, b) => (
                  this.props.handleWeather(a), this.props.test(b)
                )}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Q3_4_v2;
