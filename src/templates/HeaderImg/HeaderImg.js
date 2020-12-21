import styled from 'styled-components';
import Container from './../../components/Container/Container';
import Intro from './../Intro/Intro';
import * as Co from './../../includes/constants';
const HeaderImg = styled.div`
  background-image: url(${props => props.url});
  background-size: cover;
  height: 514px;
  .Container{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
function _HeaderImg({
  backgroundImg,
  heading,
  paragraph
}) {
  return(
    <HeaderImg
      className="_HeaderImg"
      url={backgroundImg}
    >
      <Container className="Container">
        <Intro
          heading={heading}
          paragraph={paragraph}
          color={Co.white_color}
        ></Intro>
      </Container>
    </HeaderImg>
  )
}
export default _HeaderImg;