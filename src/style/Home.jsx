




import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../images/karate1.jpeg'
import img2 from '../images/gym.jpeg'
import img3 from '../images/swim.jpeg'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import '../style/TopHeadlines.css'


export function Home() {
  return (
    
    <div>
    <Carousel>
    <Carousel.Item>
      <img style={{height:'90vh'}}
        className="d-block w-100"
        src={img1}
        alt="First slide"
      />
      <Carousel.Caption>
        
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img style={{height:'90vh'}}
        className="d-block w-100"
        src={img2}
        alt="Second slide"
      />

      <Carousel.Caption>
        
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
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

  
  </div>
  )
}



export default Home
   
          

    
