import styled, {css} from 'styled-components';
import * as Co from './../../includes/constants';
// Props:
// -----
// maxWidth, border, imgHeight
const Card = styled.div`
  max-width: ${props => props.maxWidth ? props.maxWidth : "340px"};
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
  .image{
    margin-bottom: 20px;
    height: ${props => props.imgHeight? props.imgHeight : "235px"};
  }
  img{
    width: 100%;
  }
  .topic{
    & > :first-of-type{
      margin-bottom: 14px;
    }
    p ~ :first-of-type{
      margin-top: 25px;
    }
  }
`;
export default Card;