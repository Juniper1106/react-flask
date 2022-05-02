import React, { Component } from "react";

class ResultPage extends Component {
  state = {
    resultPic: "https://picsum.photos/240",
  };

  changeImg = () => {
    document.getElementById("genImg").src = "http://127.0.0.1:5000/img";
  };

  getMusic = async () => {
    document.getElementById("music").src = "http://127.0.0.1:5000/music";
  };

  componentDidMount() {
    setInterval(this.changeImg, 3000);
  }

  render() {
    return (
      <div className='containerQ hide' id='result' onClick={this.changeImg}>
        <div className='resultArea grid-result' id='resultPage'>
          <div className='frame'>
            <img
              className='genImg'
              id='genImg'
              src={this.state.resultPic}
              alt='This is an image generated from your dream contents'
            />
          </div>
          <h2>
            {/* {this.props.title} */}
            幸福的港湾
          </h2>
          <textarea
            readOnly
            id='resultTxt'
            className='resultTxt'
            // value={this.props.content}
            value={
              "以前住过的地方\n有一大片树林\n还有老房子\n在里面很开心的生活\n梦里妈妈在忙活他的事情\n我在静静的看着\n很幸福的样子\n以前住过的地方\n有一大片树林\n还有老房子\n在里面很开心的生活\n梦里妈妈在忙活他的事情\n我在静静的看着\n很幸福的样子"
            }
          />
          <iframe
            id='music'
            width={"290px"}
            height={"120px"}
            src='https://w.soundcloud.com/player/?url=https://api.soundcloud.com/tracks/47685694&color=ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_artwork=false'
            frameBorder='no'></iframe>
          <div className='containerB--result' id='bottomBtnResult'>
            <div className='bottomBtnContainer'>
              <button className='btn--small prev' id='prevInResultPage' />
              <button className='btn--small refresh' id='refresh' />
              <button className='btn--small print' id='print' />
              <button className='btn--small finish' id='complete' />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ResultPage;
