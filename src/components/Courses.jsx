import { Card, Col, Container, Row } from "react-bootstrap";
import img1 from '../images/karate1.jpeg'
import img2 from '../images/boxing4.jpeg'
import img3 from '../images/kickboxing.jpeg'
import img4 from '../images/muay.jpeg'
import img5 from '../images/kk.jpeg'
import img6 from '../images/train.jpeg'
import img7 from '../images/fat.jpeg'
import '../style/TopHeadlines.css'

export function Courses(){
    return (
        <Container className="mt-5">
            
            <h4>Courses which are taught by us</h4>
            <Row className="mt-4">
                <Col xs={3} className = "course1">
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img1} />
      <Card.Body>
        <Card.Title>Karate</Card.Title>
        <Card.Text>
            <ul>
                <li>Plans</li>
                <ol>
                <li>Fees : 2500/ month</li>
                <li>Fees : 7500(Quaterly)</li>
                <li>Fees : 10000(Half_yealy)</li>
                <li>Fees : 13000(yearly)</li>
                </ol>
            </ul>
        </Card.Text>
        
      </Card.Body>
    </Card>
    </Col>
    <Col xs={3} className = "course1">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img3} />
      <Card.Body>
        <Card.Title>Kick Boxing</Card.Title>
        <Card.Text>
        <ul>
                <li>Plans</li>
                <ol>
                <li>Fees : 2500/ month</li>
                <li>Fees : 7500(Quaterly)</li>
                <li>Fees : 10000(Half_yealy)</li>
                <li>Fees : 13000(yearly)</li>
                </ol>
            </ul>
        </Card.Text>
        
      </Card.Body>
    </Card>
    </Col>
    <Col xs={3} className = "course1">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img2} />
      <Card.Body>
        <Card.Title>Boxing</Card.Title>
        <Card.Text>
        <ul>
                <li>Plans</li>
                <ol>
                <li>Fees : 2000/ month</li>
                <li>Fees : 7000(Quaterly)</li>
                <li>Fees : 9000(Half_yealy)</li>
                <li>Fees : 12000(yearly)</li>
                </ol>
            </ul>
        </Card.Text>
        
      </Card.Body>
     
    </Card>
    </Col>
    </Row>
    <Row className="mt-4">
    <Col xs={3} className = "course2">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img4} />
      <Card.Body>
        <Card.Title>Muay-Thai</Card.Title>
        <Card.Text>
        <ul>
                <li>Plans</li>
                <ol>
                <li>Fees : 3000/ month</li>
                <li>Fees : 8900(Quaterly)</li>
                <li>Fees : 11000(Half_yealy)</li>
                <li>Fees : 14500(yearly)</li>
                </ol>
            </ul>
        </Card.Text>
        
      </Card.Body>
    </Card>
    </Col>
    <Col xs={3} className = "course2">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img6} />
      <Card.Body>
        <Card.Title>Functional Training</Card.Title>
        <Card.Text>
        <ul>
                <li>Plans</li>
                <ol>
                <li>Fees : 1500/ month</li>
                <li>Fees : 5500(Quaterly)</li>
                <li>Fees : 8000(Half_yealy)</li>
                <li>Fees : 10000(yearly)</li>
                </ol>
            </ul>
        </Card.Text>
        
      </Card.Body>
    </Card>
    </Col>
    <Col xs={3} className = "course2">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img5} />
      <Card.Body>
        <Card.Title>Karate+Kick Boxing</Card.Title>
        <Card.Text>
        <ul>
                <li>Plans</li>
                <ol>
                <li>Fees : 3500/ month</li>
                <li>Fees : 9000(Quaterly)</li>
                <li>Fees : 12000(Half_yealy)</li>
                <li>Fees : 16000(yearly)</li>
                </ol>
            </ul>
        </Card.Text>
        
      </Card.Body>
    </Card>
    </Col>
    </Row>
    <Row className="mt-4">
    <Col xs={3} className = "course3">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img7} />
      <Card.Body>
        <Card.Title>Fat Loss Prograam</Card.Title>
        <Card.Text>
        <ul>
                <li>Plans</li>
                <ol>
                <li>Fees : 2000/ month</li>
                <li>Fees : 5000(Quaterly)</li>
                <li>Fees : 8500(Half_yealy)</li>
                <li>Fees : 11500(yearly)</li>
                </ol>
            </ul>
        </Card.Text>
        
      </Card.Body>
    </Card>
    </Col>
    </Row>
        </Container>
        
    );
}
           