Styling:
- Every shape Was Made using [Styled-components].
- If shape Used in Single File, it will be located in this file
- else, it will be in a separated file located in styled Dir beside components Dir

- any shape name is the same name of component + (Style) word

Ex.:
we want to create Button component
first we will create its styled component [ButtonStyle.js] then we will import it in Button.js file and add functionality to it
so we have ButtonStyle.js & Button.js

in ButtonStyle.js
================
// list of props and its defaults and usage

const ButtonStyle = styled.button`
  // Styling We Want
  // props
`;

============================================
in Button.js
============
import ButtonStyle from
function Button({
  //Attributes:
  className
  type

  //props:
  color
  anchor
}){
  return(
    <ButtonStyle
      className={className}
      type={type}
      color={color}
      anchor={anchor}
    ></ButtonStyle>
  )
}

- when we use Dev-tools for React
- there is no naming of any component created by Styled-components
- So We made this work around mentioned above