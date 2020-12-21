import styled from 'styled-components';
import * as Co from './../../includes/constants';
import NexaFont from './../NexaFont/NexaFont';
const Fig = styled(NexaFont)`
  position: relative;
  text-align: center;
  font-size: 40px;
  color: ${Co.gold_color};
  :before,:after{
    content: "";
    display: block;
    background-color: ${props => props.color || Co.big_Text_color};;
    height: 1px;
    width: 85px;
    position: absolute;
  }
  :before{
    left: -130px;
    top: 18px;
  }
  :after{
    left: 89px;
    top: 18px;
  }
`;

export default function DecorationLine({
  //props for function
  children,
  //props for Styled-Component
  className,
  color
}) {
  return (
    <div
      className= {`DecorationLine ${className}`}
      style={{
        display: "flex",
        justifyContent: "center"
      }}
    >
      <Fig color={color}>
        {children}
      </Fig>
    </div>
  )
};