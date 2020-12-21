import styled from 'styled-components';
import * as Co from './../../includes/constants';
import H5 from './../H5/H5';
import P from './../P/P';
import Button from './../Button/Button';
// Props:
// -----
// 
const CardMenuSidePic = styled.div`
  display: flex;
  height: 115px;
  min-width: 400px;
  border: 1px solid ${Co.input_border_color};
  border-radius: 5px;
  box-shadow: 0 2px 0 0 ${Co.input_shadow_color};
  .img{
    height: 113px;
    width: 116px;
    min-width: 116px;
    position: relative;
    img{
      height: 100%;
      width: 100%;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }
    :after{
      content: "";
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      transition: all .3s ease-in-out;
      position: absolute;
      top: 0;
      left: 0;
      background-color: #f00;
      opacity: 0;
      width: 100%;
      height: 100%;
    }
    :hover{
      :after{
        opacity: .3;
      }
    }
  }
  .content{
    flex-basis: 100%;
    padding: 10px 0;
    text-align: center;
    h5{
      margin-bottom: 10px;
      font-style: italic;
      font-size: 22px;
    }
    p{
      line-height: 1;
    }
    p:not(:last-of-type){
      margin-bottom: 10px;
      @media (max-width: 600px){
        font-size: 14px;
      }
    }
    .price{
      font-family: ${Co.body_font_family};
      font-size: 22px;
      font-style: italic;
    }
  }
`;

function _CardMenuSidePic({
  //props for function
  img,
  alt,
  itemName,
  description,
  price
  //props for Styled-Component
}) {
  return(
    <CardMenuSidePic className="CardMenuSidePic">
      <div className="img">
        <img src={img} alt={alt}></img>
          <Button
            className="Button"
            width="auto"
            fontStyle="italic"
            padding="16px"
            noBorder
            anchor
          >
            <a href="#void"><i className="fas fa-link"></i></a>
          </Button>
      </div>
      <div className="content">
        <H5>{itemName}</H5>
        <P>{description}</P>
        <P className="price">Price: <span>{price}</span></P>
      </div>
    </CardMenuSidePic>
  )
}

export default _CardMenuSidePic;