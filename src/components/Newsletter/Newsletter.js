import styled, {css} from 'styled-components';
import * as Co from './../../includes/constants';
// Props:
// -----
// 
const Newsletter = styled.div`
  background-color: ${props => props.backgroundColor? props.backgroundColor : Co.gold_color}
`;
export default Newsletter;