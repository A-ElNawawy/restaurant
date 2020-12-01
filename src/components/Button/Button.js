import styled, {css} from 'styled-components';
import * as Co from './../../includes/constants';
// Props:
// -----
// whiteButton, goldenButton
const Button = styled.a`
  text-decoration: none;
  color: inherit;
  border-radius: 5px;
  :hover{
    cursor: pointer;
  }
  ${props => props.whiteButton && css`
    padding: 14px 30px;
    font-size: 13px;
    font-weight: bold;
    letter-spacing: 1px;
    text-transform: capitalize;
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
  ${props => props.goldenButton && css`
    background-color: ${Co.gold_color};
    color: ${Co.white_color};
    padding: 9px 12px;
    font-style: italic;
    font-size: 10px;
  `}
`;
export default Button;