import styled from 'styled-components';
const FixedBG = styled.div`
  background-image: url(${props => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  color: ${props => props.color};
`;
export default FixedBG;