import { Button, Card, Col, Container, Row } from "react-bootstrap";
import img1 from '../images/gym.jpeg'
import img2 from '../images/swim.jpeg'
import img3 from '../images/court.jpeg'
import img4 from '../images/supplement.jpg'
import img5 from '../images/food1.jpeg'
import img6 from '../images/food2.png'
import '../style/TopHeadlines.css'


export function Facilities(){
    return (
<Container className='mt-5'>
    <h3>Other Facilities Here</h3>
      <Row className='mt-5'>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img className="img1" variant="top" src={img1} />
      <Card.Body>
        <Card.Title>Gymming Area</Card.Title>
        <Card.Text>
          Enhance your power, strength & stamina under the guidnace of natinal lebvel trainer.
        </Card.Text> 
        <Button variant="primary" href="https://www.fulcrumfitness.com/blog/10-benefits-of-going-to-the-gym">Gym Benifits </Button>
      </Card.Body>
    </Card>
    </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img className="img1" variant="top" src={img2} />
      <Card.Body>
        <Card.Title>Swimming Pool</Card.Title>
        <Card.Text>
          Helps in your faltloss journey along with enhancing your stamina & adding a new skill to your list.
        </Card.Text>
        <Button variant="primary" href="https://www.healthline.com/health/benefits-of-swimming#risks">Benifits of swimmimg</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img className="img1" variant="top" src={img3} />
      <Card.Body>
        <Card.Title>Badminton Court</Card.Title>
        <Card.Text>
         Amazing Exercise to keep yourself Active & fit &  also to keep yourself relaxed .
        </Card.Text>
        <Button variant="primary" href="https://blog.decathlon.in/articles/10-benefits-of-playing-badminton-for-the-whole-body">Read About it...</Button>
      </Card.Body>
    </Card>
        </Col>
      </Row>
      <Row className='mt-5'>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img className="img1" variant="top" src={img4} />
      <Card.Body>
        <Card.Title>Supplement Store</Card.Title>
        <Card.Text>
          Get pure & tested(certified from labdor USA) supplements for recovery & Muscle Growth.
        </Card.Text>
        <Button variant="primary"href="https://www.eufic.org/en/healthy-living/article/food-supplements-who-needs-them-and-when">To Know More...</Button>
      </Card.Body>
    </Card>
    </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img className="img1" variant="top" src={img5} />
      <Card.Body>
        <Card.Title>Food Court</Card.Title>
        <Card.Text>
         Get pure healthy food to complete Your daily Macros & Nutrition from our expert detician made diet plan.
        </Card.Text>
        <Button variant="primary" href="https://avitahealth.org/health-library/macronutrients-a-simple-guide-to-macros/#:~:text=There%20are%20three%20types%20of,carbohydrates%2C%20proteins%2C%20and%20fats.&text=Along%20with%20energy%2C%20all%20of,allows%20you%20to%20function%20properly.">To Know More...</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img className="img1" variant="top" src={img6} />
      <Card.Body>
        <Card.Title>Help Desk</Card.Title>
        <Card.Text>
          Clear your Queries & Doubts from Our Experts & start your journey towards Fitness.
        </Card.Text>
        <Button variant="primary" href="../RegistrationForm">To register Click Here... </Button>
      </Card.Body>
    </Card>
        </Col>
      </Row>
    </Container>
    )
}