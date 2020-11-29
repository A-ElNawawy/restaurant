import styled, {css} from 'styled-components';
import * as Co from './../../includes/constants';
// props: maxWidth, border
const Card = styled.div`
  max-width: ${props => props.maxWidth ? props.maxWidth : "280px"};
  ${props => props.border && css`
    border: 1px solid ${Co.input_border_color};
    border-radius: 5px;
    box-shadow: 0 5px 0 0 ${Co.input_shadow_color};
  `}
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  > *{
    flex-basis: 100%;
  }
  img{
    max-width: 100%;
    /*height: 100%;*/
  }
  .image{
    margin-bottom: 20px;
  }
  p ~ :first-of-type{
    margin-top: 25px;
  }
`;
export default Card;