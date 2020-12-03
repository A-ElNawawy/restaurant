import React from 'react';
import styled from 'styled-components';

/* Start Importing Components */
import Link from './components/Link/Link';
import Container from './components/Container/Container';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import NexaFont from './components/NexaFont/NexaFont';
import DecorationLine from './components/DecorationLine/DecorationLine';
import FixedBG from './components/FixedBG/FixedBG';
import Card from './components/Card/Card';
import H2 from './components/H2/H2';
import H5 from './components/H5/H5';
import Newsletter from './components/Newsletter/Newsletter';
import Summery from './components/Summery/Summery';
import SideCard from './components/SideCard/SideCard';
import H6 from './components/H6/H6';
import CopyRight from './components/CopyRight/CopyRight';
//import SlideShow from './components/SlideShow/SlideShow';
import SimpleSlideShow from './components/SimpleSlideShow/SimpleSlideShow';
import SlideShowAuto from './components/SlideShowAuto/SlideShowAuto';
/* End Importing Components */

/* Start Importing Constants */
import * as Co from './includes/constants';
/* End Importing Constants */

/* Start Importing Languages */
import {paragraph, paragraph2} from './includes/langs/english';
/* End Importing Languages */

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
      height: 70px;
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
      ul{
        display: flex;
        li{
          font-size: 14px;
          font-weight: 700;
          margin: 0 17px;
        }
        li:not(:last-of-type){
        }
      }
    }
  }
`;
const Carousel = styled.div`
  background-color: rgba(0, 0, 0, 0);
  background-repeat: no-repeat;
  background-image: url('./demoData/images/bg_wood.jpg'); /* Not Working :(/ */
  background-image: url('http://bliccathemes.com/themes/pronto/demo1/wp-content/uploads/2015/01/background11.jpg');
  background-size: cover;
  background-position: center top;
  width: 100%;
  height: 514px;
  padding: 125px 0;
  opacity: 1;
  visibility: inherit;
  /*z-index: 20;*/
  .Container{
    display: flex;
  }
  .flashy{
    color: ${Co.white_color};
    width: 350px;
    text-align: center;
    display: none;
    &.no1{
      margin-left: 150px;
    }
    &.no2{
      /*display: none;*/
      margin-left: auto;
      margin-right: 150px;
    }
    .like-logo{
      font-family: ${Co.logo_font_family};
      font-size: 80px;
      line-height: 1;
      text-transform: capitalize;
    }
    .second{
      font-size: 25px;
      font-weight: bold;
      text-transform: uppercase;
    }
  }
`;
const Features = styled.div`
  .container{
    padding: 80px 0;
    display: grid;
    justify-content: center;
    row-gap: 40px;
    column-gap: 40px;
    grid-template-areas:
      'box1 box1 box1'
      'box2 box3 box4'
    ;
    .box1{grid-area: box1;}
    .box2{grid-area: box2;}
    .box3{grid-area: box3;}
    .box4{grid-area: box4;}
    .Card{
      :hover{
        h3{
          transition: all .4s ease-in-out;
          color: ${Co.gold_color};
        }
      }
      img{
        max-width: 200px;
        /*height: auto;*/
      }
      p{
        text-align: center;
      }
    }
  }
`;
const Intro = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width:500px;
  margin: auto;
  > *{
    flex-basis: 100%;
  }
  img{
    max-width:50px;
    max-height:20px;
  }
  p{
    text-align: center;
    margin-top: 15px;
  }
`;
const H3 = styled.h3`
  font-size: 20px;
  font-weight: 400;
  font-style: italic;
  text-transform: capitalize;
  text-align: center;
`;
const H4 = styled.h4`
  text-align: center;
`;
const P = styled.p`
  font-family: ${Co.p_font_family};
  line-height: 1.625;
`;
const Offer = styled.div`
  .FixedBG{
    padding: 90px 0 150px;
    height: 500px;
  }
  p{
    font-size: 48px;
    font-style: italic;
    font-weight: bold;
  }
  .buy-now{
    margin-top: 35px;
    display: flex;
    justify-content: center;
  }
`;
const BookATable = styled.div`
  padding: 80px 0;
  .form{
    width: 50%;
    margin-left: auto;
    margin-top: 65px;
  }
`;
const Form = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 48% 48%;
  justify-content: space-between;
  row-gap: 15px;
  .full-width{
    grid-column: 1 / span 2;
  }
`;
const Counters = styled.div`
  .FixedBG{
    padding: 150px 0 140px;
    height: 500px;
  }
  .container{
    display: grid;
    grid-template-columns: 23% 23% 23% 23%;
    justify-content: center;
    gap: 0 3.5%;
  }
  h3{
    margin-bottom: 15px;
  }
  h2{
    margin-bottom: 5px;
    font-size: 60px;
  }
  .image{
    margin-bottom: 25px;
  }
`;
const FromBlog = styled.div`
  .container{
    padding: 80px 0;
    display: grid;
    justify-content: center;
    row-gap: 40px;
    column-gap: 20px;
    grid-template-areas:
      'box1 box1 box1'
      'box2 box3 box4'
      'box5 box5 box5'
    ;
    .box1{grid-area: box1;}
    .box2{grid-area: box2;}
    .box3{grid-area: box3;}
    .box4{grid-area: box4;}
    .box5{grid-area: box5;}
    .Card{
      .image{
        overflow: hidden;
        position: relative;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        /*height: 190px;*/
        img{
          transition: all .3s ease-in-out;
          height: 100%;
        }
        .link{
          transition: all .5s ease-in-out;
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1;
          opacity: 0;
        }
        .over-lay{
          border-top-left-radius: 5px;
          border-top-right-radius: 5px;
          transition: all .5s ease-in-out;
          position: absolute;
          top: 0;
          left: 0;
          background-color: #000;
          opacity: 0;
          width: 100%;
          height: 100%;
        }
      }
      .topic{
        padding: 0 30px 30px;
      }
      :hover{
        .image{
          img{
            transform: scale(1.5)
            rotate(10deg);
          }
          .link{
            opacity: 1;
          }
          .over-lay{
            opacity: .7;
          }
        }
        .topic{
          h5{
            cursor: pointer;
          }
        }
      }
    }
    .load-more{
      display: flex;
      justify-content: center;
      a{
        font-size: 15px!important; /* To Be Removed After Adjusting Button Component */
      }
    }
  }
`;
const UpComingEvents = styled.div`
  .FixedBG{
    padding: 80px 0;
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
            right: 115px;
            transform: rotate(-25deg);
            font-size: 18px;
          }
          [type="submit"]{
            margin-left: 8px;
            padding: 10px 15px;
            font-weight: bold;
            /*font-size: 10px;*/
            font-style: italic;
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
        /*background-color: red;*/
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
      .parag{
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
  //flashing(){
  //  setInterval(this.showElement(flashy2), 1000);
  //}

  //hideElement(element) {
  //}
  //showElement(element) {
  //}
  twist(hide, show) {
    hide.style.display = "none";
    show.style.display = "block";
    //console.log(hide);
  }
  componentDidMount(){
    let flashy1 = document.getElementById("no1");
    let flashy2 = document.getElementById("no2");
    //this.twist(flashy1, flashy2)
    setInterval(this.twist(flashy1, flashy2), 2000);
    let flashy = flashy1;
    flashy1 = flashy2;
    flashy2 = flashy;
    //setInterval(this.twist(flashy1, flashy2), 2000);
    //this.flashing();
  }
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
                  <Link href="#void">example@yoursite.com</Link>
                </div>
              </div>
              <div className="right">
                <ul>
                  <li><Link href="#void"><i className="fab fa-facebook-f"></i></Link></li>
                  <li><Link href="#void"><i className="fab fa-twitter"></i></Link></li>
                  <li><Link href="#void"><i className="fab fa-pinterest"></i></Link></li>
                  <li><Link href="#void"><i className="fab fa-instagram-square"></i></Link></li>
                  <li><Link href="#void"><i className="fab fa-google-plus"></i></Link></li>
                  <li><Link href="#void"><i className="fab fa-skype"></i></Link></li>
                  <li><Link href="#void"><i className="fab fa-youtube"></i></Link></li>
                  <li><Link href="#void"><i className="fab fa-foursquare"></i></Link></li>
                </ul>
                <div className="search">
                  <Link href="#void"><i className="fas fa-search"></i></Link>
                </div>
              </div>
            </Container>
          </nav>
          <nav className="main-nav">
            <Container className="container no-wrap">
              <div className="left capital">
                <Link className="logo" href="#void">pronto</Link>
              </div>
              <div className="right">
                <ul>
                  <li><Link hover active className="upper" href="#void">home</Link></li>
                  <li><Link hover className="upper" href="#void">menu</Link></li>
                  <li><Link hover className="upper" href="#void">about us</Link></li>
                  <li><Link hover className="upper" href="#void">blog</Link></li>
                  <li><Link hover className="upper" href="#void">shop</Link></li>
                  <li><Link hover className="upper" href="#void">features</Link></li>
                  <li><Link hover className="upper" href="#void">contact us</Link></li>
                  <li><Link hover className="upper" href="#void">buy now</Link></li>
                </ul>
              </div>
            </Container>
          </nav>
        </Header>
        <section className="Body">
          {/*<SimpleSlideShow></SimpleSlideShow>*/}
          <SlideShowAuto></SlideShowAuto>
          <Carousel className="Carousel">
            <Container className="Container">
              <div id="no1" className="flashy no1">
                <P className="like-logo">beef steaks</P>
                <P className="second">yours to savor</P>
              </div>
              <div id="no2" className="flashy no2">
                <P className="like-logo">tasty</P>
                <P className="second">try our beff</P>
              </div>
            </Container>
          </Carousel>
          <Features className="Features">
            <Container className="container">
              <Intro className="box1">
                <H2>Features</H2>
                <DecorationLine className="line">M</DecorationLine>
                <P>
                  {paragraph}
                </P>
              </Intro>
              <Card imgHeight="auto" className="Card box2">
                <img
                  className="image"
                  //src="./demoData/images/features1.jpg"
                  src="http://bliccathemes.com/themes/pronto/demo1/wp-content/uploads/2015/02/serv11.jpg"
                  alt="services"
                ></img>
                <div className="topic">
                  <H3>serving with love</H3>
                  <P>{paragraph}</P>
                </div>
              </Card>
              <Card imgHeight="auto" className="Card box3">
                <img
                  className="image"
                  //src="./demoData/images/features2.png"
                  src="http://bliccathemes.com/themes/pronto/demo1/wp-content/uploads/2015/02/pizza1.png"
                  alt="services"
                ></img>
                <div className="topic">
                  <H3>your italian pizza</H3>
                  <P>{paragraph}</P>
                </div>
              </Card>
              <Card imgHeight="auto" className="Card box4">
                <img
                  className="image"
                  //src="./demoData/images/features3.png"
                  src="http://bliccathemes.com/themes/pronto/demo1/wp-content/uploads/2015/02/bread1.png"
                  alt="services"
                ></img>
                <div className="topic">
                  <H3>daily breads</H3>
                  <P>{paragraph}</P>
                </div>
              </Card>
            </Container>
          </Features>
          <Offer className="Offer">
            <FixedBG
              className="FixedBG"
              color={Co.white_color}
              //url= "./demoData/images/bg_vegetables.jpg"
              url="http://bliccathemes.com/themes/pronto/demo1/wp-content/uploads/2015/02/counts1.jpg"
            >
              <H4>
                <NexaFont fontSize="82px" className="NexaFont">KL</NexaFont>
              </H4>
              <H4>
                <p>“ Fresh and healthy master of town ”</p>
              </H4>
              <div className="buy-now">
                <Button whiteButton>buy now</Button>
              </div>
            </FixedBG>
          </Offer>
          <BookATable className="BookATable">
            <Container className="container">
              <Intro>
                <H2>book a table</H2>
                <DecorationLine className="line">M</DecorationLine>
                <P>
                  {paragraph}
                </P>
              </Intro>
              <div className="form">
                <Form className="Form">
                  <Input normal type="text" placeholder="Name" name="name"></Input>
                  <Input normal type="text" placeholder="Last Name" name="last-name"></Input>
                  <Input normal type="email" placeholder="E-mail" name="email"></Input>
                  <Input normal type="text" placeholder="time" name="time"></Input>
                  <Input normal type="date" placeholder="" name="date"></Input>
                  <Input normal type="number" placeholder="Guest Number" name="guest-number"></Input>
                  <Input button className="full-width" type="submit" value="Book A Table" name="guest-number"></Input>
                </Form>
              </div>
            </Container>
          </BookATable>
          <Counters className="Counters">
            <FixedBG
              className="FixedBG"
              color={Co.white_color}
              style={{
                backgroundColor: "#333"
              }}
            >
              <Container className="container">
                <Card className="Card">
                  <H3>coffees served</H3>
                  <H2 color={Co.white_color}>2538</H2>
                  <NexaFont fontSize="70px" className="NexaFont image">W</NexaFont>
                  <NexaFont fontSize="35px" className="NexaFont">KL</NexaFont>
                </Card>
                <Card className="Card">
                  <H3>chickens served</H3>
                  <H2 color={Co.white_color}>1264</H2>
                  <NexaFont fontSize="70px" className="NexaFont image">e</NexaFont>
                  <NexaFont fontSize="35px" className="NexaFont">KL</NexaFont>
                </Card>
                <Card className="Card">
                  <H3>meats cooked</H3>
                  <H2 color={Co.white_color}>6538</H2>
                  <NexaFont fontSize="70px" className="NexaFont image">i</NexaFont>
                  <NexaFont fontSize="35px" className="NexaFont">KL</NexaFont>
                </Card>
                <Card className="Card">
                  <H3>fishes fried</H3>
                  <H2 color={Co.white_color}>462</H2>
                  <NexaFont fontSize="70px" className="NexaFont image">n</NexaFont>
                  <NexaFont fontSize="35px" className="NexaFont">KL</NexaFont>
                </Card>
              </Container>
            </FixedBG>
          </Counters>
          <FromBlog className="FromBlog">
            <Container className="container">
              <Intro className="box1">
                <H2>from the blog</H2>
                <DecorationLine className="line">M</DecorationLine>
                <P>
                  {paragraph}
                </P>
              </Intro>
              <Card border className="Card box2">
                <div className="image">
                  <img
                    //src="./demoData/images/blog1.jpg"
                    src="http://bliccathemes.com/themes/pronto/demo1/wp-content/uploads/2015/02/blog31-1024x695.jpg"
                    alt="blog1"
                  ></img>
                  <div className="link">
                    <Button goldenButton href="#void">XX</Button>
                  </div>
                  <div className="over-lay"></div>
                </div>
                <div className="topic">
                  <H5><Link href="#void">hand picked meals for our best.</Link></H5>
                  <P>{paragraph2}</P>
                  <div className="read-more">
                    <Button goldenButton href="#void">Read more</Button>
                  </div>
                </div>
              </Card>
              <Card border className="Card box3">
                <div className="image">
                  <img
                    //src="./demoData/images/blog3.jpg"
                    src="http://bliccathemes.com/themes/pronto/demo1/wp-content/uploads/2015/02/blog21-1024x695.jpg"
                    alt="blog2"
                  ></img>
                  <div className="link">
                    <Button goldenButton href="#void">XX</Button>
                  </div>
                  <div className="over-lay"></div>
                </div>
                <div className="topic">
                  <H5><Link href="#void">daily special foods that you will going to love</Link></H5>
                  <P>{paragraph2}</P>
                  <div className="read-more">
                    <Button goldenButton href="#void">Read more</Button>
                  </div>
                </div>
              </Card>
              <Card border className="Card box4">
                <div className="image">
                  <img
                    //src="./demoData/images/blog1.jpg"
                    src="http://bliccathemes.com/themes/pronto/demo1/wp-content/uploads/2015/02/blog31-1024x695.jpg"
                    alt="blog3"
                  ></img>
                  <div className="link">
                    <Button goldenButton href="#void">XX</Button>
                  </div>
                  <div className="over-lay"></div>
                </div>
                <div className="topic">
                  <H5><Link href="#void">chilli cooking lesson from our master chefs</Link></H5>
                  <P>{paragraph2}</P>
                  <div className="read-more">
                    <Button goldenButton href="#void">Read more</Button>
                  </div>
                </div>
              </Card>
              <div className="load-more box5">
                <Button goldenButton>
                  <NexaFont>K</NexaFont> load more <NexaFont>L</NexaFont>
                </Button>
              </div>
            </Container>
          </FromBlog>
          <UpComingEvents className="UpComingEvents">
            <FixedBG
              className="FixedBG"
              color={Co.white_color}
              //url= "./demoData/images/bg_street.jpg"
              url="http://bliccathemes.com/themes/pronto/demo1/wp-content/uploads/2015/02/imageback31.jpg"
            >
              <Container>
                <Intro className="box1">
                  <H2>upcoming events</H2>
                  <DecorationLine className="line">M</DecorationLine>
                  <P>
                    {paragraph}
                  </P>
                </Intro>
                <Carousel></Carousel>
              </Container>
            </FixedBG>
          </UpComingEvents>
        </section>
        <Footer>
          <Newsletter className="Newsletter">
            <Container className="container no-wrap">
              <div className="left no-wrap">
                <H5>newsletter</H5>
                <P>sign up with your email to get updates fresh updates about our events</P>
              </div>
              <div className="right">
                <Form className="Form">
                  <Input type="text" placeholder="your email address" name="name"></Input>
                  <i className="far fa-envelope"></i>
                  {/*<i class="far fa-envelope"></i>*/}
                  <Input button whiteButton type="submit" value="sign up" name="guest-number"></Input>
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
                    //src="./demoData/images/blog1.jpg"
                    src="http://bliccathemes.com/themes/pronto/demo1/wp-content/uploads/2015/01/imageresto.png"
                    alt="http://aboutUs"
                  ></img>
                </div>
                <div className="topic">
                  <P>welcome to the Pronto Restaurant. The best steaks in town is in.</P>
                </div>
              </Card>
              <div className="recent-posts">
                <H5>Recent Posts</H5>
                <SideCard className="SideCard">
                  <img
                    src="http://bliccathemes.com/themes/pronto/demo1/wp-content/uploads/2015/02/blog31-1024x695.jpg"
                    alt="blog1"
                  ></img>
                  <div className="topic">
                    <H6>Hand picked meals for our best.</H6>
                    <P>February 28, 2015</P>
                  </div>
                </SideCard>
                <SideCard className="SideCard">
                  <img
                    src="http://bliccathemes.com/themes/pronto/demo1/wp-content/uploads/2015/02/blog31-1024x695.jpg"
                    alt="blog1"
                  ></img>
                  <div className="topic">
                    <H6>Daily special foods that you will going to love</H6>
                    <P>February 28, 2015</P>
                  </div>
                </SideCard>
                <SideCard className="SideCard">
                  <img
                    src="http://bliccathemes.com/themes/pronto/demo1/wp-content/uploads/2015/02/blog31-1024x695.jpg"
                    alt="blog1"
                  ></img>
                  <div className="topic">
                    <H6>Chilli cooking lesson from our master chefs</H6>
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
                  <li><Link href="#void"><i className="fab fa-facebook-f"></i></Link></li>
                  <li><Link href="#void"><i className="fab fa-twitter"></i></Link></li>
                  <li><Link href="#void"><i className="fab fa-pinterest"></i></Link></li>
                  <li><Link href="#void"><i className="fab fa-instagram-square"></i></Link></li>
                  <li><Link href="#void"><i className="fab fa-google-plus"></i></Link></li>
                  <li><Link href="#void"><i className="fab fa-skype"></i></Link></li>
                  <li><Link href="#void"><i className="fab fa-youtube"></i></Link></li>
                  <li><Link href="#void"><i className="fab fa-foursquare"></i></Link></li>
                </ul>
              </div>
              <div className="logo">
                <Link className="" href="#void">pronto</Link>
              </div>
              <div className="parag">
                <P>Copyright &copy; 2015 Blicca Themes. All rights reserved.</P>
              </div>
            </Container>
          </CopyRight>
        </Footer>
      </MyApp>
    );
  }
};