import { Button, Col, Container, Form, Row } from "react-bootstrap";

export function Contact() {
    return (
        <Container className="mt-5">
            <Row>
                <Col sm="4">
                    <h4>Address</h4>
                    <p>Martial Arts Academy, Road no 12, Beside Heritage Hotel,Mumbai, Mahrashtra, 400024</p>
                </Col>
                <Col sm="4">
                    <h4>Phone number and Email</h4>
                    <p>Mob 1 - xxxxxxxxxx</p>
                    <p>Mob 2 - xxxxxxxxxx</p>
                    <p>Mob 3 - xxxxxxxxxx</p>
                    <p>Email - martialartsacademy@gmail.com </p>
                </Col>
                <Col sm="4">
                    <h4>Social Media Links</h4>
                    <p>Facebook</p>
                    <p>Instagram</p>
                    <p>Twitter</p>
                </Col>
            </Row>
            <div className="mt-5">
                <h2>Suggestion / Grievance form</h2>
                <Form className="mt-5">
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicSuggestion">
                        <Form.Label>Suggestions</Form.Label>
                        <Form.Control type="text" placeholder="Enter your suggestion and help us improve" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicGrievance">
                        <Form.Label>Grievance / Complaints</Form.Label>
                        <Form.Control type="text" placeholder="Enter details here if we are not up to your expectations" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </Container>
    );
}