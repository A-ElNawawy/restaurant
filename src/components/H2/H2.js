import styled from 'styled-components';
import * as Co from './../../includes/constants';
const H2 = styled.h2`
  font-family: ${Co.logo_font_family};
  font-size: 40px;
  font-weight: normal;
  /*line-height: 78px;*/
  color: ${props => props.color ? props.color : "#505050"};
  text-align: center;
  text-transform: capitalize;
`;
export default H2;