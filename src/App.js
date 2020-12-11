import React from 'react';
import styled from 'styled-components';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";

/* Start Importing Components */
import Home from './templates/Home/Home';
import Menu from './templates/Menu/Menu';
import AboutUs from './templates/AboutUs/AboutUs';
import Blog from './templates/Blog/Blog';
import ContactUs from './templates/ContactUs/ContactUs';
import {Link as MyLink, NavLink} from './components/Link/Link';
import Container from './components/Container/Container';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import Card from './components/Card/Card';
import H5 from './components/H5/H5';
import Newsletter from './templates/Newsletter/Newsletter';
import Summery from './templates/Summery/Summery';
import SideCard from './components/SideCard/SideCard';
import H6 from './components/H6/H6';
import P from './components/P/P';
import CopyRight from './templates/CopyRight/CopyRight';
import NavSticky from './components/NavSticky/NavSticky';
import Form from './components/Form/Form';
/* End Importing Components */

/* Start Importing Constants */
import * as Co from './includes/constants';
/* End Importing Constants */

/* Start Importing Images */
import * as Imgs from './demoData/images/index';
/* End Importing Images */

/* Start General Styling */
const MyApp = styled.div`
  color: ${Co.big_Text_color};
  font-family: ${Co.body_font_family};
  .no-wrap{
    display: flex;
    justify-content: space-between;
  }
`;
/* End General Styling */

const Header = styled.header`
  .on-fly-contacts{
    border-bottom: 1px solid ${Co.border_color};
    font-size: 12px;
    .container{
      align-items: center;
      height: 50px;
      .left{
        & > div:not(:last-of-type){
          margin-right: 20px;
        }
        i{
          margin-right: 5px;
        }
      }
      .right{
        height: 100%;
        padding: 0 16px;
        display: flex;
        align-items: center;
        border-left: 1px solid ${Co.border_color};
        border-right: 1px solid ${Co.border_color};
        ul{
          display: flex;
          li:not(:last-of-type){
            margin: 0 20px 0 0;
          }
        }
        .search{
          height: 100%;
          padding-left: 16px;
          margin-left: 16px;
          display: flex;
          align-items: center;
          border-left: 1px solid ${Co.border_color};
        }
      }
    }
  }
  .main-nav{
    .container{
      align-items: center;
      /*height: 70px;*/
    }
    .left{
      .logo{
        font-family: ${Co.logo_font_family};
        font-size: 40px;
        line-height: 78px;
        color: ${Co.logo_color};
      }
    }
    .right{
      margin-right: -14px;
      margin-bottom: 15px;
      ul{
        display: flex;
        li{
          font-size: 14px;
          font-weight: bold;
          margin: 0 17px;
        }
        li:not(:last-of-type){
        }
      }
    }
  }
`;
const Footer = styled.footer`
  .Newsletter{
    color: ${Co.white_color};
    .container{
      height: 100px;
      .left{
        flex-basis: 57%;
        align-items: center;
        h5{
          font-size: 28px;
        }
        p{
          font-size: 14px;
        }
      }
      .right{
        flex-basis: 28%;
        .Form{
          position: relative;
          height: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          input{
            line-height: 1;
            height: 40px;
            ::placeholder{
              color: ${Co.white_color};
            }
          }
          input:not([type="submit"]){
            background-color: #0000004d;
            color: ${Co.white_color};
            padding: 10px;
            /*font-size: 15px;*/
            font-family: ${Co.p_font_family};
            flex-basis: 100%;
          }
          i.fa-envelope{
            position: absolute;
            top: 42px;
            right: 130px;
            transform: rotate(-25deg);
            font-size: 18px;
          }
          [type="submit"]{
            margin-left: 8px;
          }
        }
      }
    }
  }
  .Summery{
    .Container{
      padding: 60px 0;
      display: grid;
      grid-template-columns: 23% 23% 23% 23%;
      justify-content: space-between;
      .Card{
        align-content: flex-start;
      }
      .recent-posts{
        h5{
          margin-bottom: 14px;
        }
        .SideCard{
          margin-bottom: 20px;
        }
      }
      .work-hours{
        h5{
          margin-bottom: 14px;
        }
        p{
          font-size: 14px;
          margin-bottom: 10px;
        }
      }
    }
  }
  .CopyRight{
    padding: 50px 0 33px;
    .Container{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      > *{
        flex-basis: 100%
      }
      .social{
        color: ${Co.white_color};
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 25px;
        ul{
          display: flex;
          li:not(:last-of-type){
            margin: 0 20px 0 0;
          }
        }
      }
      .logo{
        color: ${Co.white_color};
        text-align: center;
        text-transform: capitalize;
        font-family: ${Co.logo_font_family};
        font-size: 40px;
        line-height: 78px;
        margin-bottom: 15px;
      }
      .copy-right{
        text-align: center;
        p{
          color: ${Co.copyRight_color};
          font-weight: bold;
          font-size: 13px;
        }
      }
    }
  }
`;

export default class App extends React.Component {
  render() {
    return (
      <MyApp className="App">
        <Header>
          <nav className="on-fly-contacts">
            <Container className="container no-wrap">
              <div className="left no-wrap">
                <div>
                  <i className="fas fa-phone-alt"></i>+00123 456 789
                </div>
                <div>
                  <i className="fas fa-envelope"></i>
                  <MyLink href="#void">example@yoursite.com</MyLink>
                </div>
              </div>
              <div className="right">
                <ul>
                  <li><MyLink href="#void"><i className="fab fa-facebook-f"></i></MyLink></li>
                  <li><MyLink href="#void"><i className="fab fa-twitter"></i></MyLink></li>
                  <li><MyLink href="#void"><i className="fab fa-pinterest"></i></MyLink></li>
                  <li><MyLink href="#void"><i className="fab fa-instagram-square"></i></MyLink></li>
                  <li><MyLink href="#void"><i className="fab fa-google-plus"></i></MyLink></li>
                  <li><MyLink href="#void"><i className="fab fa-skype"></i></MyLink></li>
                  <li><MyLink href="#void"><i className="fab fa-youtube"></i></MyLink></li>
                  <li><MyLink href="#void"><i className="fab fa-foursquare"></i></MyLink></li>
                </ul>
                <div className="search">
                  <MyLink href="#void"><i className="fas fa-search"></i></MyLink>
                </div>
              </div>
            </Container>
          </nav>
          <NavSticky>
            <nav className="main-nav">
              <Container className="container no-wrap">
                <div className="left capital">
                  <MyLink className="logo" href="#void">Printa</MyLink>
                </div>
                <div className="right">
                  <ul>
                    <li>
                      <NavLink active href="#void"><Link to="/">home</Link></NavLink>
                    </li>
                    <li>
                      <NavLink href="#void"><Link to="/menu">menu</Link></NavLink>
                    </li>
                    <li>
                      <NavLink href="#void"><Link to="/aboutus">about us</Link></NavLink>
                    </li>
                    <li>
                      <NavLink href="#void"><Link to="/blog">blog</Link></NavLink>
                    </li>
                    <li>
                      <NavLink href="#void"><Link to="/contactus">contact us</Link></NavLink>
                    </li>
                  </ul>
                </div>
              </Container>
            </nav>
          </NavSticky>
        </Header>
        <Switch>
          <section className="Body">
            <Route exact path="/menu">
              <Menu />
            </Route>
            <Route exact path="/aboutus">
              <AboutUs />
            </Route>
            <Route exact path="/blog">
              <Blog />
            </Route>
            <Route exact path="/contactus">
              <ContactUs />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </section>
        </Switch>
        <Footer>
            <Newsletter className="Newsletter">
              <Container className="container no-wrap">
                <div className="left no-wrap">
                  <H5>newsletter</H5>
                  <P>sign up with your email to get updates fresh updates about our events</P>
                </div>
                <div className="right">
                  <Form className="Form">
                    <Input type="email" placeholder="your email address" name="email"></Input>
                    <i className="far fa-envelope"></i>
                    <Button
                      type="submit"
                      fontWeight="bold"
                      fontStyle="italic"
                      fontSize="13px"
                      padding="12px 20px"
                      width="140px"
                      backgroundColor={Co.white_color}
                      noBorder
                    >
                      sign up
                    </Button>
                  </Form>
                </div>
              </Container>
            </Newsletter>
            <Summery className="Summery">
              <Container className="Container">
                <Card imgHeight="174px" className="Card">
                  <div className="topic">
                    <H5>about us</H5>
                  </div>
                  <div className="image">
                    <img
                      className="image"
                      src={Imgs.aboutus}
                      alt="http://aboutUs"
                    ></img>
                  </div>
                  <div className="topic">
                    <P>welcome to the Printa Restaurant. The best steaks in town is in.</P>
                  </div>
                </Card>
                <div className="recent-posts">
                  <H5>Recent Posts</H5>
                  <SideCard className="SideCard">
                    <MyLink href="#void">
                      <img
                        src={Imgs.blog1}
                        alt="blog1"
                      ></img>
                    </MyLink>
                    <div className="topic">
                      <H6><MyLink href="#void">Hand picked meals for our best.</MyLink></H6>
                      <P>February 28, 2015</P>
                    </div>
                  </SideCard>
                  <SideCard className="SideCard">
                    <MyLink href="#void">
                      <img
                        src={Imgs.blog2}
                        alt="blog2"
                      ></img>
                    </MyLink>
                    <div className="topic">
                      <H6><MyLink href="#void">Daily special foods that you will going to love</MyLink></H6>
                      <P>February 28, 2015</P>
                    </div>
                  </SideCard>
                  <SideCard className="SideCard">
                    <MyLink href="#void">
                      <img
                        src={Imgs.blog3}
                        alt="blog3"
                      ></img>
                    </MyLink>
                    <div className="topic">
                      <H6><MyLink href="#void">Chilli cooking lesson from our master chefs</MyLink></H6>
                      <P>February 28, 2015</P>
                    </div>
                  </SideCard>
                </div>
                <div></div>
                <div className="work-hours">
                  <H5>Our Working Hours</H5>
                  <P>Monday ................................ 8 am - 9 pm</P>
                  <P>Tuesday ............................. 8 am - 10 pm</P>
                  <P>Wednesday ....................... 8 am - 10 pm</P>
                  <P>Thursday ............................ 8 am - 10 pm</P>
                  <P>Friday ................................. 8 am - 10 pm</P>
                  <P>Saturday ............................ 8 am - 11 pm</P>
                  <P>Sunday ................................. 8 am - 9 pm</P>
                </div>
              </Container>
            </Summery>
            <CopyRight className="CopyRight">
              <Container className="Container">
                <div className="social">
                  <ul>
                    <li><MyLink href="#void"><i className="fab fa-facebook-f"></i></MyLink></li>
                    <li><MyLink href="#void"><i className="fab fa-twitter"></i></MyLink></li>
                    <li><MyLink href="#void"><i className="fab fa-pinterest"></i></MyLink></li>
                    <li><MyLink href="#void"><i className="fab fa-instagram-square"></i></MyLink></li>
                    <li><MyLink href="#void"><i className="fab fa-google-plus"></i></MyLink></li>
                    <li><MyLink href="#void"><i className="fab fa-skype"></i></MyLink></li>
                    <li><MyLink href="#void"><i className="fab fa-youtube"></i></MyLink></li>
                    <li><MyLink href="#void"><i className="fab fa-foursquare"></i></MyLink></li>
                  </ul>
                </div>
                <div className="logo">
                  <MyLink className="" href="#void">Printa</MyLink>
                </div>
                <div className="copy-right">
                  <P>Copyright &copy; 2020 ElNawawy Web. All rights reserved.</P>
                </div>
              </Container>
            </CopyRight>
          </Footer>
      </MyApp>
    );
  }
};