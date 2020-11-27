import styled, {css} from 'styled-components';
import * as Co from './../../includes/constants';
const Link = styled.a`
  position: relative;
  text-decoration: none;
  color: inherit;
  transition: all .4s ease-in-out;
  :hover{
    color: ${Co.gold_color};
  }
  i{
    font-size: 15px;
  }
  ${props => props.hover && css`
    :after{
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: -7px;
      left: 0;
      background-color: ${Co.gold_color};
      transform: scaleX(0);
      transition: all 0.4s ease-in-out 0s;
    }
    :hover{
      :after{
        transform: scaleX(1);
      }
    }
  `}
  ${props => props.active && css`
    :after{
      transform: scaleX(1);
    }
  `}
`;
export default Link;