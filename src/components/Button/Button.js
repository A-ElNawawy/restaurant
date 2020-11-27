import styled, {css} from 'styled-components';
import * as Co from './../../includes/constants';
const Button = styled.a`
  text-decoration: none;
  color: inherit;
  padding: 14px 30px;
  font-size: 13px;
  border-radius: 5px;
  letter-spacing: 1px;
  text-transform: capitalize;
  font-weight: bold;
  :hover{
    cursor: pointer;
  }
  ${props => props.whiteButton && css`
    position: relative;
    background-color: ${Co.white_color};
    color: ${Co.black_color};
    :after{
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      background-color: #000;
      opacity: 0.1;
      width: 100%;
      height: 0;
      border-radius: 5px;
      transition: all 0.3s;
    }
    :hover{
      :after{
        height: 100%;
      }
    }
  `}
`;
export default Button;