import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../images/karate1.jpeg'
import img2 from '../images/gym.jpeg'
import img3 from '../images/swim.jpeg'
import img4 from '../images/certificate1.jpg'
import img5 from '../images/certificate2.jpg'
import img6 from '../images/certificate3.jpg'
import img7 from '../images/sir1.jpg'
import img8 from '../images/sir2.jpg'
import img9 from '../images/boxing1.jpg'
import img10 from '../images/boxing2.jpg'
import img11 from '../images/boxing3.jpg'
import img12 from '../images/boxing4.jpeg'
import img13 from '../images/kickboxing.jpeg'
import img14 from '../images/muay.jpeg'
import img15 from '../images/teakwondo.jpeg'
import { Card, Col, Container, Row } from 'react-bootstrap';
import '../style/TopHeadlines.css'


export function Home() {
  return (
    
    <div className='division'>
    <Carousel>
    <Carousel.Item className='cor1'>
      <img style={{height:'90vh'}}
        className="d-block w-100"
        src={img1}
        alt="First slide"
      />
      <Carousel.Caption>
        
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className='cor1'>
      <img style={{height:'90vh'}}
        className="d-block w-100"
        src={img2}
        alt="Second slide"
      />
       <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='cor1'>
        <img style={{height:'90vh'}}
          className="d-block w-100"
          src={img9}
          alt="Second slide"
        />
         <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='cor1'>
        <img style={{height:'90vh'}}
          className="d-block w-100"
          src={img10}
          alt="Second slide"
        />
         <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='cor1'>
        <img style={{height:'90vh'}}
          className="d-block w-100"
          src={img11}
          alt="Second slide"
        />

      <Carousel.Caption>
        
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className='cor1'>
      <img style={{height:'90vh'}}
        className="d-block w-100"
        src={img3}
        alt="Third slide"
      />

      <Carousel.Caption>
        
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>

  <Container className='mt-5'>
    <h3>Types of Martial Arts</h3>
    <Row className='mt-5'>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img12} />
    </Card>
    </Col>
        <Col xs={7}>
          <h3 className='Text1'>Boxing</h3>
          <p>Its is a type of Martial Arts in which only hands are used to show your skill Set.You get to learn Several types of punches</p>
          <p>It builds Your stamina & also increase your reflex power.It Also increase your defence power</p>
        </Col>
        </Row>

          {/* --------------------------------------------- */}
          <Row className='mt-5'>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img13} />
    </Card>
    </Col>
        <Col xs={7}>
          <h3 className='Text1'>Kick-Boxing</h3>
          <p>It is Advanced version of kick-boxing, with punches you have to use your legs for several types of kicks.</p>
          <p>With Upper Body you have to work on your lower body As well. It increasses your flexibity each day.</p>
        </Col>
          {/* --------------------------------------------- */}
        </Row>

        <Row className='mt-5'>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img14} />
    </Card>
    </Col>
        <Col xs={7}>
          <h3 className='Text1'>Muay Thai</h3>
          <p>Its is very Advanced version of matrtial art in which every type of kick & puches are used. </p>
          <p>Its is played at very high level & is recommended to train under a expert only.</p>

        </Col>
          {/* --------------------------------------------- */}
        </Row>
        <Row className='mt-5'>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img15} />
    </Card>
    </Col>
        <Col xs={7}>
          <h3 className='Text1'>Taekwondo</h3>
          <p>Its is Korean Martial Arts.</p>
          <p>In this punches & kicks both are used bt most of the emphasis are given on kicks.</p>
          <p>Kicks is the main showcase of this type of Martial Arts.</p>

        </Col>
        {/* --------------------------------------------- */}
        </Row>
        <Row className='mt-5'>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img15} />
    </Card>
    </Col>
        <Col xs={7}>
          <h3 className='Text1'>Karate</h3>
          <p>Karate is very old form of martial art. There are many forms of karate in the world , One such is Shotogan type of karate.  </p>
          <p>This type of Karate usually found in Japan. Its a great exercise for the body & mind connection. You get Control of Your Body </p>

        </Col>
        </Row>
        </Container>
        <Container className='mt-5'>
        <h4>Awards and Certificates</h4>
        <Row>
        <Col xs={3} className='cer1'>
        <Card  style={{ width: '18rem' }}>
      <Card.Img className='col1' variant="top" src={img4} />
    </Card>
        </Col>
        
        <Col xs={3}>
        <Card style={{ width: '18rem' }}>
      <Card.Img className='col2' variant="top" src={img5} />
    </Card>
        </Col>
        <Col xs={3}>
        <Card style={{ width: '18rem' }}>
      <Card.Img className='col2' variant="top" src={img6} />
    </Card>
        </Col>
        
       
        <Col xs={3}>
        <Card style={{ width: '18rem' }}>
      <Card.Img className='col4' variant="top" src={img7} />
    </Card>
    
    
        </Col>
        </Row>
        <Row>
        <Col xs={3}>
        <Card style={{ width: '18rem' }}>
      <Card.Img className='col3' variant="top" src={img8} />
    </Card>
        </Col>
        </Row>
       
        </Container>
        

  
  </div>
  )
}



export default Home
   
          

    
