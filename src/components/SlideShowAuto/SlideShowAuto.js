import React from 'react';
import styled from 'styled-components';
import * as Co from './../../includes/constants';
import * as Imgs from './../../demoData/images/index';
import P from './../P/P';

const SlideShowContainer = styled.div`
  height: 100%;
  position: relative;
  margin: auto;
  a{text-decoration: none;}
  *{box-sizing: border-box}
  .mySlides{display: none;}
  /*.shown{
    opacity: 1;
    transform: scale(1);
  }*/
  .mySlides img {
    width: 100%;
  }
  /* Next & previous buttons */
  .prev, .next {
    cursor: pointer;
    position: absolute;
    top: 41%;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 30px;
    transition: all 0.6s ease;
    user-select: none;
    background-image: url(${Imgs.small_wood});
    background-size: 0;
  }
  .prev{
    left: 50px;
  }
  .next {
    right: 50px;
  }
  .prev:hover, .next:hover {
    background-size: 60px 60px;
  }
  .flashy{
    position: absolute;
    top: 160px;
    color: ${Co.white_color};
    width: 350px;
    text-align: center;
    &.no1{
      left: 200px;
    }
    &.no2{
      right: 200px;
    }
    .like-logo{
      font-family: ${Co.logo_font_family};
      font-size: 80px;
      line-height: 1;
      text-transform: capitalize;
    }
    .second{
      font-size: 25px;
      font-weight: bold;
      text-transform: uppercase;
    }
  }
  /* Fading animation */
  .fade {
    animation-name: fade;
    animation-duration: 1.5s;
  }
  @keyframes fade {
    from {opacity: .4;}
    to {opacity: 1;}
  }
  .fade-down{
    animation-name: fade-down;
    animation-duration: 1.5s;
  }
  @keyframes fade-down {
    from {
      transform: translateY(-50px);
      opacity: 0;
    }
    to {
      transform: translateY(0px);
      opacity: 1;
    }
  }
  .fade-up{
    animation-name: fade-up;
    animation-duration: 1.5s;
  }
  @keyframes fade-up {
    from {
      transform: translateY(50px);
      opacity: 0;
    }
    to {
      transform: translateY(0px);
      opacity: 1;
    }
  }
`;
const Indicators = styled.div`
  * {box-sizing: border-box}
  .dot {
    cursor: pointer;
    height: 15px;
    width: 15px;
    margin: 0 2px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.6s ease;
  }
  .active, .dot:hover {
    background-color: #717171;
  }
`;
export default class SlideShowAuto extends React.Component {
  //props:
  //-----
  /*
    indicators(dots): set it to show the dots under the slideShow
  */
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      slideIndex: 1,
      slidesLength: 0
    };
  }
  
  plusSlides(e, n) {
    e.preventDefault();
    if (this.state.slideIndex + n > this.state.slidesLength) {
      this.setState({slideIndex: 1})
    }else if (this.state.slideIndex + n < 1) {
      this.setState({slideIndex: this.state.slidesLength})
    }else{
      this.setState((state, props) => ({
        slideIndex: state.slideIndex + n
      }));
    }
    clearInterval(this.timerID);
    this.timerID = setInterval(
      () => this.incrementSlideIndex(),
      5000
    );
  }

  currentSlide(n) {
    this.setState((state, props) => ({
      slideIndex: n
    }));
    clearInterval(this.timerID);
    this.timerID = setInterval(
      () => this.incrementSlideIndex(),
      5000
    );
  }

  showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = this.props.indicators ? document.getElementsByClassName("dot") : [];
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    if(this.props.indicators){
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
    }
    slides[this.state.slideIndex-1].style.display = "block";
    if(this.props.indicators){
      dots[this.state.slideIndex-1].className += " active";
    }
  }

  incrementSlideIndex() {
    if (this.state.slideIndex + 1 > this.state.slidesLength) {
      this.setState({slideIndex: 1})
    }else if (this.state.slideIndex + 1 < 1) {
      this.setState({slideIndex: this.state.slidesLength})
    }else{
      this.setState((state, props) => ({
        slideIndex: state.slideIndex + 1
      }));
    }
  }

  componentDidMount() {
    // In the Next Two Lines
    // We Set: slidesLength Here to Prevent React Error If We Set It in showSlides Method
    /* ===== */
    var slides = document.getElementsByClassName("mySlides");
    this.setState({slidesLength: slides.length});
    /* ===== */
    this.showSlides();
    this.setState({loaded: true})
    this.timerID = setInterval(
      () => this.incrementSlideIndex(),
      5000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    if (this.state.loaded) {
      this.showSlides();
    }
    return(
      <div className="SlideShowAuto">
        <SlideShowContainer className="SlideShowContainer">
          <div className="mySlides fade">
            <img
              alt="background"
              src={Imgs.bg_wood}
            ></img>
            <div className="flashy no1">
              <P className="like-logo fade-down">beef steaks</P>
              <P className="second fade-up">yours to savor</P>
            </div>
          </div>
          <div className="mySlides fade">
            <img
              alt="background"
              src={Imgs.bg_wood}
            ></img>
            <div className="flashy no2">
              <P className="like-logo fade-down">tasty</P>
              <P className="second fade-up">try our beff</P>
            </div>
          </div>
          <a href="#void" className="prev" onClick={(e) => this.plusSlides(e, -1)}>&#10094;</a>
          <a href="#void" className="next" onClick={(e) => this.plusSlides(e, 1)}>&#10095;</a>
        </SlideShowContainer>
        {
          this.props.indicators? 
            <Indicators style={{textAlign: "center"}}>
              <br></br>
              <span className="dot" onClick={() => this.currentSlide(1)}></span>
              <span className="dot" onClick={() => this.currentSlide(2)}></span>
              <span className="dot" onClick={() => this.currentSlide(3)}></span>
            </Indicators>
          :
          null
        }
      </div>
    )
  }
}