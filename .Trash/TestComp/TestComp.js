import styled, {css as Css} from 'styled-components';
import * as Constants from './../../includes/constants';

export const testNesting = styled.div`
  color: red;
  .myDiv{
    background-color: red;
  }
`;

export const testImportAstrict = styled.h1`
  font-size: ${Constants.body_font};
  text-align: center;
  color: ${Constants.gold_color};
`;


const css = Css`
  color: red;
  background-color: pink;
  border: 1px solid #888;
`;
export const Thing = styled.div`
  ${css}
`