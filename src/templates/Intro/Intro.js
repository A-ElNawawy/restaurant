import styled from 'styled-components';
import H2 from './../../components/H2/H2';
import DecorationLine from './../../components/DecorationLine/DecorationLine';
import P from './../../components/P/P';

// Props:
// -----
// color
const Intro = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width:500px;
  margin: auto;
  color: ${props => props.color || "inherit"};
  > *{
    flex-basis: 100%;
  }
  p{
    text-align: center;
    margin-top: 15px;
  }

`;

function _Intro({
  //props for function
  heading,
  paragraph,
  //props for Styled-Component
  className,
  color
}) {
  return(
    <Intro
      color={color}
      className={`_Intro ${className}`}
    >
      <H2 color={color}>{heading}</H2>
      <DecorationLine color={color} className="line">M</DecorationLine>
      <P>{paragraph}</P>
    </Intro>
  )
}

export default _Intro;