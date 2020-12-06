import React from 'react';
import styled from 'styled-components';

const NavStickyStyle = styled.div`
  #navbar {
    background-color: #fff;
    overflow: hidden;
  }
  .sticky {
    position: fixed;
    z-index: 3;
    top: 0;
    width: 100%;
  }
`;

export default class NavSticky extends React.Component {
  //props:
  //-----
  /*
    children
  */
  componentDidMount() {
    window.onscroll = function() {myFunction()};
    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;
    function myFunction() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
      } else {
        navbar.classList.remove("sticky");
      }
    }
  }
  render() {
    return(
      <NavStickyStyle>
        <div id="navbar">
          {this.props.children}
        </div>
      </NavStickyStyle>
    )
  }
}