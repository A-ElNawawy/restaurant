import './App.css';
import styled from 'styled-components';

/* Start Importing Components */
import Link from './components/Link/Link';
import Container from './components/Container/Container';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import NexaFont from './components/NexaFont/NexaFont';
import DecorationLine from './components/DecorationLine/DecorationLine';
/* End Importing Components */

/* Start Importing Constants */
import * as Co from './includes/constants';
/* End Importing Constants */

/* Start Importing Languages */
import {paragraph} from './includes/langs/english';
/* End Importing Languages */

/* Start General Styling */
const MyApp = styled.div`
  color: ${Co.big_Text_color};
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
        font-family: 'Great Vibes', cursive;
        font-size: 40px;
        line-height: 78px;
        color: #505050;
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
  background-image: url(http://bliccathemes.com/themes/pronto/demo1/wp-content/uploads/2015/01/background11.jpg);
  background-size: cover;
  background-position: center top;
  width: 100%;
  height: 514px;
  opacity: 1;
  visibility: inherit;
  z-index: 20;
`;
const Features = styled.div`
  .container{
    .box1{grid-area: box1;}
    .box2{grid-area: box2;}
    .box3{grid-area: box3;}
    .box4{grid-area: box4;}
    padding: 80px 0;
    display: grid;
    justify-content: center;
    grid-template-areas:
      'box1 box1 box1'
      'box2 box3 box4';
      grid-row-gap: 40px;
  }
  .line{
    margin-top: -25px;
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
  h2,p{
    text-align: center;
  }
  p{
    margin-top: 10px;
  }
`;
const H2 = styled.h2`
  font-family: 'Great Vibes', cursive;
  font-size: 40px;
  font-weight: normal;
  line-height: 78px;
  color: #505050;
  text-align: center;
  text-transform: capitalize;
`;
const H3 = styled.h3`
  font-size: 24px;
  font-weight: 400;
  font-style: italic;
  text-transform: capitalize;
`;
const H4 = styled.h4`
  text-align: center;
`;
const P = styled.p`
  font-family: 'Mulish', sans-serif;
  font-weight: 100;
`;
const Card = styled.div`
  padding: 10px 15px;
  max-width: 400px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  /*background-color: green;*/
  :hover{
    h3{
      transition: all .4s ease-in-out;
      color: ${Co.gold_color};
    }
  }
  > *{
    flex-basis: 100%;
  }
  img{
    max-width: 200px;
    margin-bottom: 24px;
  }
  h3{
    margin-bottom: 23px;
  }
  h3,p{
    text-align: center;
  }
`;
const Offer = styled.div`
  background-image: url(http://bliccathemes.com/themes/pronto/demo1/wp-content/uploads/2015/02/counts1.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  padding: 90px 0 150px;
  height: 500px;
  color: ${Co.white_color};
  .nexa-font{
    font-size: 82px;
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
  .line{
    margin-top: -25px;
  }
  .form{
    margin-top: 65px;
  }
`;
const Form = styled.div`
  width: 50%;
  margin-left: auto;
  display: grid;
  grid-template-columns: 48% 48%;
  justify-content: space-between;
  row-gap: 15px;
  .full-width{
    grid-column: 1 / span 2;
  }
`;
const Counters = styled.div``;
const FromBlog = styled.div``;
const ComingEvents = styled.div``;
export default function App() {
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
        <Carousel className="Carousel"></Carousel>
        <Features className="Features">
          <Container className="container">
            <Intro className="box1">
              <H2>Features</H2>
              <DecorationLine className="line">M</DecorationLine>
              {/*<img src="http://bliccathemes.com/themes/pronto/demo1/wp-content/uploads/2015/02/icon2.png" alt="separator"></img>*/}
              {/*<NexaFont className="nexa-font">KL</NexaFont>*/}
              <P>
                {paragraph}
              </P>
            </Intro>
            <Card className="box2">
              <img src="http://bliccathemes.com/themes/pronto/demo1/wp-content/uploads/2015/02/serv11.jpg" alt="services"></img>
              <H3>serving with love</H3>
              <P>{paragraph}</P>
            </Card>
            <Card className="box3">
              <img src="http://bliccathemes.com/themes/pronto/demo1/wp-content/uploads/2015/02/pizza1.png" alt="services"></img>
              <H3>your italian pizza</H3>
              <P>{paragraph}</P>
            </Card>
            <Card className="box4">
              <img src="http://bliccathemes.com/themes/pronto/demo1/wp-content/uploads/2015/02/bread1.png" alt="services"></img>
              <H3>daily breads</H3>
              <P>{paragraph}</P>
            </Card>
          </Container>
        </Features>
        <Offer className="Offer">
          <H4>
            <NexaFont className="nexa-font">KL</NexaFont>
          </H4>
          <H4>
            <p>“ Fresh and healthy master of town ”</p>
          </H4>
          <div className="buy-now">
            <Button whiteButton>buy now</Button>
          </div>
        </Offer>
        <BookATable className="BookATable">
          <Container className="container">
            <Intro>
              <H2>book a table</H2>
              <DecorationLine className="line">M</DecorationLine>
              {/*<img src="http://bliccathemes.com/themes/pronto/demo1/wp-content/uploads/2015/02/icon2.png" alt="separator"></img>*/}
              <P>
                {paragraph}
              </P>
            </Intro>
            <Form className="form">
              <Input type="text" placeholder="Name" name="name"></Input>
              <Input type="text" placeholder="Last Name" name="last-name"></Input>
              <Input type="email" placeholder="E-mail" name="email"></Input>
              <Input type="text" placeholder="time" name="time"></Input>
              <Input type="date" placeholder="" name="date"></Input>
              <Input type="number" placeholder="Guest Number" name="guest-number"></Input>
              <Input button className="full-width" type="submit" value="Book A Table" name="guest-number"></Input>
            </Form>
          </Container>
        </BookATable>
        <Counters className="Counters">Counters</Counters>
        <FromBlog className="FromBlog">FromBlog</FromBlog>
        <ComingEvents className="ComingEvents">ComingEvents</ComingEvents>
      </section>
      <footer>
        <div className="Newsletter">newsletter</div>
        <div className="Summery">
          <div>About us</div>
          <div>Recent Posts</div>
          <div>Our Working Hours</div>
        </div>
        <div className="CopyRight">
          <div>Social</div>
          <div>logo</div>
          <div>copy right</div>
        </div>
      </footer>
    </MyApp>
  );
};