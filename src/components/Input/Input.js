import styled, {css} from 'styled-components';
import * as Co from './../../includes/constants';
const Input = styled.input`
  outline: none;
  font-size: 13px;
  font-family: ${Co.body_font_family};
  border-radius: 5px;
  display: block;
  border: none;
  text-transform: capitalize;
  ${props => props.normal && css`
  color: ${Co.input_color};
  background-color: ${Co.input_bg_color};
  padding: 10px 16px;
  font-weight: 400;
  line-height: 1.42857143;
  border: 1px solid ${Co.input_border_color};
  box-shadow: 0 2px 0 0 ${Co.input_shadow_color};
  `}
  ${props => props.button && css`
    padding: 11px;
    letter-spacing: 1px;
    position: relative;
    display: block;
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
      cursor: pointer;
      :after{
        height: 100%;
      }
    }
    ${props => props.whiteButton && css`
      color: ${Co.small_Text_color};
      background-color: ${Co.white_color};
    `}
    ${props => props.goldenButton && css`
      color: ${Co.white_color};
      background-color: ${Co.gold_color};
    `}
  `}
`;
export default Input;