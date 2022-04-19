import React, { Component } from "react";

class ResultPage extends Component {
  state = {
    resultPic: "https://picsum.photos/240",
  };

  render() {
    return (
      <div className='containerQ hide' id='result'>
        <div className='optQuestion grid-result' id='resultPage'>
          <div className='frame'>
            <img
              className='genImg'
              src={this.state.resultPic}
              alt='This is an image generated from your dream contents'
            />
          </div>
          <h2>{this.props.title}</h2>
          <textarea
            readOnly=''
            id='resultTxt'
            className='resultTxt'
            defaultValue={
              "以前住过的地方\n有一大片树林\n还有老房子\n在里面很开心的生活\n梦里妈妈在忙活他的事情\n我在静静的看着\n很幸福的样子\n梦里妈妈在忙活他的事情\n我在静静的看着\n很幸福的样子\n            "
            }
          />
        </div>
        <div className='containerB containerB--result' id='bottomBtnResult'>
          <div className='audioContainer'>
            <audio controls='controls' src='/music/Goldberg-Variationen.mp3' />
          </div>
          <div className='bottomBtnContainer'>
            <button className='btn--large complete' id='complete'>
              完成
            </button>
            <button className='btn--small prev' id='prevInResultPage' />
          </div>
        </div>
      </div>
    );
  }
}

export default ResultPage;
