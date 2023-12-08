import { Button, Container, Form } from "react-bootstrap";

export function RegistrationForm() {
    return (
        <Container className="mt-4">
            <h4>Registration Form</h4>
            <Form className="mt-5">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter Your Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email Your Age</Form.Label>
                    <Form.Control type="text" placeholder="Enter your age" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Past Injuries ( If Any)</Form.Label>
                    <Form.Control type="text" placeholder="Enter your past injuries (if any)" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter Your Experience (If Any)</Form.Label>
                    <Form.Control type="text" placeholder="Enter your past experience" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter Your Height (For Your Specific Diet Plan)</Form.Label>
                    <Form.Control type="text" placeholder="Enter your height" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter Your Weight (For Your Specific Diet Plan)</Form.Label>
                    <Form.Control type="text" placeholder="Enter your weight" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter Your Food Allergies (If Any)</Form.Label>
                    <Form.Control type="text" placeholder="Enter your food allergies" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter Your Medical Problems (If Any)</Form.Label>
                    <Form.Control type="text" placeholder="Enter your medical problems" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="To learn karate" /> 
                    <Form.Check type="checkbox" label="To learn to live a disciplined life" />
                    <Form.Check type="checkbox" label="To learn karate" />
                    <Form.Check type="checkbox" label="To learn karate" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
}
