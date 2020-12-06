import styled from 'styled-components';
// Props:
// -----
// fontSize
const NexaFont = styled.span`
  font-family: Nexa_Rust_Extras_Free;
  text-align: center;
  line-height: .6;
  font-size: ${props => props.fontSize || "inherit"};
  font-weight: ${props => props.fontWeight || "normal"};
`;
export default NexaFont;