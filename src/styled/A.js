import styled from 'styled-components';
/*
  padding
  color
  fontSize
  fontFamily
  fontWeight
  fontStyle
*/
const A = styled.a`
  /* Resets */
  display: block;
  text-decoration: none;
  box-sizing: border-box;
  margin: 0;
  /* ------------- */
  padding: ${props => props.padding || 0};
  margin: ${props => props.margin || 0};
  color: ${props => props.color || "inherit"};
  font-size: ${props => props.fontSize || "inherit"};
  font-family: ${props => props.fontFamily || "inherit"};
  font-weight: ${props => props.fontWeight || "normal"};
  font-style: ${props => props.fontStyle || "normal"};
  :link {
    text-decoration: none;
  }
  :visited {
    text-decoration: none;
  }
  :hover {
    text-decoration: none;
    cursor: pointer;
  }
  :active {
    text-decoration: none;
  }
  a{
    display: block;
    text-decoration: none;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: ${props => props.color || "inherit"};
    font-size: "inherit";
    font-family: "inherit";
    font-weight: "inherit";
    font-style: "inherit";
    :link {
      text-decoration: none;
    }
    :visited {
      text-decoration: none;
    }
    :hover {
      text-decoration: none;
      cursor: pointer;
    }
    :active {
      text-decoration: none;
    }
  }
`;
export default A;