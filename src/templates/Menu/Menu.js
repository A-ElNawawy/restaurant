import styled from 'styled-components';
import {
  //Switch,
  //Route,
  Link
} from "react-router-dom";
import HeaderImg from './../HeaderImg/HeaderImg';
import {paragraph, itemDescription} from './../../includes/langs/english';
import * as Imgs from './../../demoData/images';
import * as Co from './../../includes/constants';
import Container from './../../components/Container/Container';
import {FilterLink} from './../../components/Link/Link';
import CardMenuSidePic from './../../components/CardMenuSidePic/CardMenuSidePic';

const Menu = styled.div`
  .menu-holder{
    padding: 70px 0;
  }
  .filter-nav{
    margin-bottom: 45px;
    ul{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      max-width: 730px;
      margin: auto;
      padding: 5px 10px;
      border: 1px solid ${Co.border_color};
      border-radius: 5px;
      li{
        font-size: 13px;
        font-weight: bold;
        margin: 10px 15px 10px;
      }
    }
  }
  .list-of-items{
    display: grid;
    grid-template-columns: 49% 49%;
    gap: 25px 2%;
    @media (max-width: 1000px){
      grid-template-columns: 99%;
      gap: 25px 0%;
    }
  }
`;
function _Menu() {
  return(
    <Menu className="_Menu">
      <HeaderImg
        backgroundImg= {Imgs.bg_wood}
        heading="grid menu"
        paragraph={paragraph}
      ></HeaderImg>
      <div className="menu-holder">
        <Container className="Container">
          <div className="filter-nav">
            <ul>
              <li>
                <FilterLink fontFamily={Co.p_font_family} active href="#void"><Link to="#">all</Link></FilterLink>
              </li>
              <li>
                <FilterLink fontFamily={Co.p_font_family} href="#void"><Link to="#">beverages &amp; drinks</Link></FilterLink>
              </li>
              <li>
                <FilterLink fontFamily={Co.p_font_family} href="#void"><Link to="#">breakfast &amp; salads</Link></FilterLink>
              </li>
              <li>
                <FilterLink fontFamily={Co.p_font_family} href="#void"><Link to="#">desserts</Link></FilterLink>
              </li>
              <li>
                <FilterLink fontFamily={Co.p_font_family} href="#void"><Link to="#">main dishes</Link></FilterLink>
              </li>
            </ul>
          </div>
          <div className="list-of-items">
            <CardMenuSidePic
              img={Imgs.tiramisu}
              alt="Tiramisu"
              itemName="Tantalizing Tiramisu"
              description={itemDescription}
              price="$8"
            />
            <CardMenuSidePic
              img={Imgs.tiramisu}
              alt="Tiramisu"
              itemName="Tantalizing Tiramisu"
              description={itemDescription}
              price="$8"
            />
            <CardMenuSidePic
              img={Imgs.tiramisu}
              alt="Tiramisu"
              itemName="Tantalizing Tiramisu"
              description={itemDescription}
              price="$8"
            />
            <CardMenuSidePic
              img={Imgs.tiramisu}
              alt="Tiramisu"
              itemName="Tantalizing Tiramisu"
              description={itemDescription}
              price="$8"
            />
            <CardMenuSidePic
              img={Imgs.tiramisu}
              alt="Tiramisu"
              itemName="Tantalizing Tiramisu"
              description={itemDescription}
              price="$8"
            />
            <CardMenuSidePic
              img={Imgs.tiramisu}
              alt="Tiramisu"
              itemName="Tantalizing Tiramisu"
              description={itemDescription}
              price="$8"
            />
            <CardMenuSidePic
              img={Imgs.tiramisu}
              alt="Tiramisu"
              itemName="Tantalizing Tiramisu"
              description={itemDescription}
              price="$8"
            />
            <CardMenuSidePic
              img={Imgs.tiramisu}
              alt="Tiramisu"
              itemName="Tantalizing Tiramisu"
              description={itemDescription}
              price="$8"
            />
            <CardMenuSidePic
              img={Imgs.tiramisu}
              alt="Tiramisu"
              itemName="Tantalizing Tiramisu"
              description={itemDescription}
              price="$8"
            />
          </div>
        </Container>
      </div>
    </Menu>
  )
};

export default _Menu;