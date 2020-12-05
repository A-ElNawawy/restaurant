import React from 'react';
import styled from 'styled-components';
//import styled from 'styled-components';
//import * as Co from './../../includes/constants';
//import * as Imgs from './../../demoData/images/index';

const NavSticky = styled.div`
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

export default class _NavSticky extends React.Component {
  //props:
  //-----
  /*

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
      <NavSticky className="NavSticky">
        <div id="navbar">
          {this.props.children}
        </div>
      </NavSticky>
    )
  }
}