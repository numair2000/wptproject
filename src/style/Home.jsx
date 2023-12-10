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
      <Card.Img variant="top" src={img1} />
    </Card>
    </Col>
        <Col xs={7}>
          <h3 className='Text1'>Karate</h3>
          <p>Karate is very old martial art form....</p>
        </Col>
        </Row>
          {/* --------------------------------------------- */}
        <Row className='mt-5'>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img1} />
    </Card>
    </Col>
        <Col xs={7}>
          <h3 className='Text1'>Karate</h3>
          <p>Karate is very old martial art form....</p>
        </Col>
          {/* --------------------------------------------- */}
        </Row>
        <Row className='mt-5'>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img1} />
    </Card>
    </Col>
        <Col xs={7}>
          <h3 className='Text1'>Karate</h3>
          <p>Karate is very old martial art form....</p>
        </Col>
          {/* --------------------------------------------- */}
        </Row>
        <Row className='mt-5'>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img1} />
    </Card>
    </Col>
        <Col xs={7}>
          <h3 className='Text1'>Karate</h3>
          <p>Karate is very old martial art form....</p>
        </Col>
        {/* --------------------------------------------- */}
        </Row>
        <Row className='mt-5'>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img1} />
    </Card>
    </Col>
        <Col xs={7}>
          <h3 className='Text1'>Karate</h3>
          <p>Karate is very old martial art form....</p>
        </Col>
        </Row>
        </Container>
        <Container className='mt-5'>
        <h4>Awards and Certificates</h4>
        <Col xs={3}>
          <img
          src={img4} 
          alt=""/>
        </Col>
        <Col xs={3}>
          <img
          src={img5} 
          alt=""/>
        </Col>
        <Col xs={3}>
          <img
          src={img6} 
          alt=""/>
        </Col>
        <Col xs={3}>
          <img
          src={img7} 
          alt=""/>
        </Col>
        <Col xs={3}>
          <img
          src={img8} 
          alt=""/>
        </Col>
        </Container>
        

  
  </div>
  )
}



export default Home
   
          

    
