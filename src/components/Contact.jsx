// src/components/ContactUsAndSuggestionForm.js
import React, { useState } from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    suggestion: '',
    grievance: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Implement the API endpoint for handling suggestions
      const response = await fetch('http://localhost:3302/submitSuggestion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        window.alert("Suggestion submitted successfully");
        console.log('Suggestion submitted successfully:', data);
      } else {
        console.error('Suggestion submission failed:', data.message);
      }
    } catch (error) {
      console.error('Error during suggestion submission:', error);
    }
  };

  return (
    <Container className="mt-4">
      <Row className="mt-3">
        <Col xs={3}>
          <h4> Martial Art Academy</h4>
          <p>Customers of ANG Martial Arts Academy are welcome to review this website. Tell me how you good and needful this mission.</p>
          </Col>
        <Col xs={3}>
          <h4>Address</h4>
          </Col>
        <Col xs={3}>
          <h4>Phone Number</h4>
          </Col>
        <Col xs={3}>
          <h4>Social Media Links</h4>
          </Col>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formSuggestion">
              <Form.Label>Suggestion</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter your suggestion"
                name="suggestion"
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formGrievance">
              <Form.Label>Grievance</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter your grievance"
                name="grievance"
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};


