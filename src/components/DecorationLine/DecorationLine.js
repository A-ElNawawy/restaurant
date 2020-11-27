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
    height: 1px;
    width: 85px;
    border-top: 1px solid;
    border-color: ${Co.big_Text_color};
    position: absolute;
  }
  :before{
    left: -130px;
    top: 27px;
  }
  :after{
    left: 89px;
    top: 27px;
  }
`;

export default function DecorationLine({children, className}) {
  return (
    <div
      className= {`DecorationLine ${className}`}
      style={{
        //height: "20px",
        display: "flex",
        justifyContent: "center"
      }}
    >
      <Fig>
        {children}
      </Fig>
    </div>
  )
};