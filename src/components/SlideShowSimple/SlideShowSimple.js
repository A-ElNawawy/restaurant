import React from 'react';
//import styled from 'styled-components';
import './SlideShowSimple.css';

export default class SlideShowSimple extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      slideIndex: 1,
      slidesLength: 0
    };
  }
  
  plusSlides = (e, n) => {
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
  }

  currentSlide(n) {
    this.setState((state, props) => ({
      slideIndex: n
    }));
  }

  showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[this.state.slideIndex-1].style.display = "block";
    dots[this.state.slideIndex-1].className += " active";
  }

  componentDidMount() {
    // We Set: slidesLength Here to Prevent React Error If We Set It in showSlides Method
    var slides = document.getElementsByClassName("mySlides");
    this.setState({slidesLength: slides.length});

    this.showSlides();
    this.setState({loaded: true})
  }

  render() {
    if (this.state.loaded) {
      this.showSlides();
    }
    return(
      <div className="SlideShowSimple">
        <div className="slideshow-container">
          <div className="mySlides fade">
            <div className="text">Caption One</div>
          </div>
          <div className="mySlides fade">
            <div className="text">Caption Two</div>
          </div>
          <div className="mySlides fade">
            <div className="text">Caption Three</div>
          </div>
          <a href="#void" className="prev" onClick={(e) => this.plusSlides(e, -1)}>&#10094;</a>
          <a href="#void" className="next" onClick={(e) => this.plusSlides(e, 1)}>&#10095;</a>
        </div>
        <br></br>
        <div style={{textAlign: "center"}}>
          <span className="dot" onClick={() => this.currentSlide(1)}></span>
          <span className="dot" onClick={() => this.currentSlide(2)}></span>
          <span className="dot" onClick={() => this.currentSlide(3)}></span>
        </div>
      </div>
    )
  }
}