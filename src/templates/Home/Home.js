import styled from 'styled-components';
import * as Co from '../../includes/constants';

/* Start Importing Components */
import {Link as MyLink} from '../../components/Link/Link';
import Container from '../../components/Container/Container';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import NexaFont from '../../components/NexaFont/NexaFont';
import DecorationLine from '../../components/DecorationLine/DecorationLine';
import FixedBG from '../../components/FixedBG/FixedBG';
import Card from '../../components/Card/Card';
import H2 from '../../components/H2/H2';
import H5 from '../../components/H5/H5';
import P from '../../components/P/P';
import SlideShowAuto from '../../components/SlideShowAuto/SlideShowAuto';
import Form from '../../components/Form/Form';
import Intro from './../Intro/Intro';
/* End Importing Components */

/* Start Importing Languages */
import {paragraph, paragraph2} from '../../includes/langs/english';
/* End Importing Languages */

/* Start Importing Images */
import * as Imgs from '../../demoData/images/index';
/* End Importing Images */


const Carousel = styled.div`
  height: 514px;
`;
const Features = styled.div`
  .container{
    padding: 80px 0;
    overflow: hidden;
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
    .features-fade {
      animation-name: features-fade;
    }
    .time1{animation-duration: .5s;}
    .time2{animation-duration: 1s;}
    .time3{animation-duration: 1.5s;}
    @keyframes features-fade {
      from {
        transform: translateX(-500px);
      }
      to {
        transform: translateX(0);
      }
    }
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
const Offer = styled.div`
  .FixedBG{
    padding: 90px 0 150px;
    /*height: 500px;*/
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
const Counters = styled.div`
  .FixedBG{
    padding: 150px 0 140px;
    position: relative;
    .over-lay{
      position: absolute;
      top: 0;
      left: 0;
      background-color: #000;
      opacity: .7;
      width: 100%;
      height: 100%;
    }
    .Card{
      z-index: 2;
    }
  }
  .container{
    display: grid;
    grid-template-columns: 23% 23% 23% 23%;
    justify-content: center;
    gap: 0 3.5%;
  }
  h3{
    margin-bottom: 15px;
    font-size: 30px;
    font-weight: bold;
    font-style: italic;
  }
  h2{
    margin-bottom: 15px;
    font-size: 60px;
    font-family: ${Co.body_font_family};
    font-weight: bold;
    font-style: normal;
  }
  .pic{
    margin-bottom: 30px;
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
          i{
            font-size: 20px;
            color: #2a2a2a;
          }
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
    }
  }
`;
const UpComingEvents = styled.div`
  display: none;
  .FixedBG{
    padding: 80px 0;
  }
`;

function Home() {
  return(
    <div className="Home">
      <Carousel className="Carousel">
        <SlideShowAuto></SlideShowAuto>
      </Carousel>
      <Features className="Features">
        <Container className="container">
          <Intro
            className="box1"
            heading="Features"
            paragraph={paragraph}
          ></Intro>
          <Card imgHeight="auto" className="Card box2">
            <img
              className="image"
              src={Imgs.features1}
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
              src={Imgs.features2}
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
              src={Imgs.features3}
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
          url={Imgs.bg_vegetables}
        >
          <H4>
            <NexaFont fontSize="82px" className="NexaFont">KL</NexaFont>
          </H4>
          <H4>
            <p>“ Fresh and healthy master of town ”</p>
          </H4>
          <div className="buy-now">
            <Button
              fontWeight="bold"
              width="auto"
              fontStyle="italic"
              noBorder
              anchor
            >
              <a href="#void">buy now</a>
            </Button>
          </div>
        </FixedBG>
      </Offer>
      <BookATable className="BookATable">
        <Container className="container">
          <Intro
            heading="book a table"
            paragraph={paragraph}
          ></Intro>
          <div className="form">
            <Form className="Form">
              <Input normal type="text" placeholder="Name" name="name"></Input>
              <Input normal type="text" placeholder="Last Name" name="last-name"></Input>
              <Input normal type="email" placeholder="E-mail" name="email"></Input>
              <Input normal type="time" placeholder="time" name="time"></Input>
              <Input normal type="date" placeholder="" name="date"></Input>
              <Input normal type="number" placeholder="Guest Number" name="guest-number"></Input>
              <Button
                className="full-width"
                type="submit"
                backgroundColor={Co.gold_color}
                color={Co.white_color}
              >
                Book A Table
              </Button>
            </Form>
          </div>
        </Container>
      </BookATable>
      <Counters className="Counters">
        <FixedBG
          className="FixedBG"
          color={Co.white_color}
          url={Imgs.bg_counters}
        >
          <div className="over-lay"></div>
          <Container className="container">
            <Card className="Card">
              <H3>coffees served</H3>
              <H2 color={Co.white_color}>2538</H2>
              <NexaFont fontSize="80px" className="NexaFont pic">W</NexaFont>
              <NexaFont fontSize="50px" className="NexaFont">KL</NexaFont>
            </Card>
            <Card className="Card">
              <H3>chickens served</H3>
              <H2 color={Co.white_color}>1264</H2>
              <NexaFont fontSize="80px" className="NexaFont pic">e</NexaFont>
              <NexaFont fontSize="50px" className="NexaFont">KL</NexaFont>
            </Card>
            <Card className="Card">
              <H3>meats cooked</H3>
              <H2 color={Co.white_color}>6538</H2>
              <NexaFont fontSize="80px" className="NexaFont pic">i</NexaFont>
              <NexaFont fontSize="50px" className="NexaFont">KL</NexaFont>
            </Card>
            <Card className="Card">
              <H3>fishes fried</H3>
              <H2 color={Co.white_color}>462</H2>
              <NexaFont fontSize="80px" className="NexaFont pic">n</NexaFont>
              <NexaFont fontSize="50px" className="NexaFont">KL</NexaFont>
            </Card>
          </Container>
        </FixedBG>
      </Counters>
      <FromBlog className="FromBlog">
        <Container className="container">
          <Intro
            className="box1"
            heading="from the blog"
            paragraph={paragraph}
          ></Intro>
          <Card border className="Card box2">
            <div className="image">
              <img
                src={Imgs.blog1}
                alt="blog1"
              ></img>
              <div className="link">
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
              <div className="over-lay"></div>
            </div>
            <div className="topic">
              <H5><MyLink href="#void">hand picked meals for our best.</MyLink></H5>
              <P>{paragraph2}</P>
              <div className="read-more">
                <Button
                  padding="9px 12px"
                  fontStyle="italic"
                  fontSize="13px"
                  anchor
                  backgroundColor={Co.gold_color}
                  color={Co.white_color}
                >
                  <a href="#void">Read more</a>
                </Button>
              </div>
            </div>
          </Card>
          <Card border className="Card box3">
            <div className="image">
              <img
                src={Imgs.blog2}
                alt="blog2"
              ></img>
              <div className="link">
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
              <div className="over-lay"></div>
            </div>
            <div className="topic">
              <H5><MyLink href="#void">daily special foods that you will going to love</MyLink></H5>
              <P>{paragraph2}</P>
              <div className="read-more">
                <Button
                  padding="9px 12px"
                  fontStyle="italic"
                  fontSize="13px"
                  anchor
                  backgroundColor={Co.gold_color}
                  color={Co.white_color}
                >
                  <a href="#void">Read more</a>
                </Button>
              </div>
            </div>
          </Card>
          <Card border className="Card box4">
            <div className="image">
              <img
                src={Imgs.blog3}
                alt="blog3"
              ></img>
              <div className="link">
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
              <div className="over-lay"></div>
            </div>
            <div className="topic">
              <H5><MyLink href="#void">chilli cooking lesson from our master chefs</MyLink></H5>
              <P>{paragraph2}</P>
              <div className="read-more">
                <Button
                  padding="9px 12px"
                  fontStyle="italic"
                  fontSize="13px"
                  anchor
                  backgroundColor={Co.gold_color}
                  color={Co.white_color}
                >
                  <a href="#void">Read more</a>
                </Button>
              </div>
            </div>
          </Card>
          <div className="load-more box5">
            <Button
              padding="5px 15px"
              fontWeight="bold"
              fontSize="15px"
              backgroundColor={Co.gold_color}
              color={Co.white_color}
            >
              <a href="#void"><NexaFont fontSize="23px">K</NexaFont> load more <NexaFont fontSize="23px">L</NexaFont></a>
            </Button>
          </div>
        </Container>
      </FromBlog>
      <UpComingEvents className="UpComingEvents">
        <FixedBG
          className="FixedBG"
          color={Co.white_color}
          url= {Imgs.bg_street}
        >
          <Container>
            <Intro
              className="box1"
              heading="upcoming events"
              paragraph={paragraph}
            ></Intro>
            <Carousel></Carousel>
          </Container>
        </FixedBG>
      </UpComingEvents>
    </div>
  )
}
export default Home;