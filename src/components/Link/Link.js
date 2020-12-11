import styled, {css} from 'styled-components';
import * as Co from './../../includes/constants';
import A from './../../styled/A';
// Props:
// -----
// active
const Link = styled(A)`
  :hover{
    color: ${Co.gold_color};
  }
  i{
    font-size: 15px;
  }
`;
const NavLink = styled(A)`
  text-transform: uppercase;
  font-weight: bold;
  position: relative;
  transition: all .4s ease-in-out;
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
    color: ${Co.gold_color};
    :after{
      transform: scaleX(1);
    }
  }
  ${props => props.active && css`
    color: ${Co.gold_color};
    :after{
      transform: scaleX(1);
    }
  `}
`;
export {
  Link,
  NavLink
};