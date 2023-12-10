import React, { useState, useEffect } from "react";
import { Button, Container, Form, FormCheck, Table } from "react-bootstrap";

export const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    pastInjuries: '',
    experience: '',
    height: '',
    weight: '',
    foodAllergies: '',
    medicalProblems: '',
     goals: []
  });

  const [registeredStudents, setRegisteredStudents] = useState([]);

  useEffect(() => {
    fetchRegisteredStudents();
  }, []);

  const fetchRegisteredStudents = async () => {
    try {
      const response = await fetch('http://localhost:3302/registeredStudents');
      const data = await response.json();

      if (response.ok) {
        setRegisteredStudents(data.students);
      } else {
        console.error('Failed to fetch registered students:', data.message);
      }
    } catch (error) {
      console.error('Error fetching registered students:', error);
    }
  };

  const handleRegister = async () => {
    try {
      // Validate required fields
      const requiredFields = ['name', 'age', 'email'];
      const missingFields = requiredFields.filter(field => !formData[field]);

      if (missingFields.length > 0) {
        window.alert(`Please fill in all required fields: ${missingFields.join(', ')}`);
        return;
      }

      // Add your additional validation logic here

      const response = await fetch('http://localhost:3302/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        window.alert("Successfully Registered");
        fetchRegisteredStudents();
      } else {
        console.error('Registration failed:', data.message);
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  const handleCancelRegistration = async (name) => {
    try {
      const response = await fetch('http://localhost:3302/cancelRegistration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
      });

      const data = await response.json();

      if (response.ok) {
        window.alert("Registration Canceled Successfully");
        fetchRegisteredStudents();
      } else {
        console.error('Cancellation failed:', data.message);
      }
    } catch (error) {
      console.error('Error during cancellation:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (goal) => {
    const updatedGoals = [...formData.goals];

    if (updatedGoals.includes(goal)) {
      updatedGoals.splice(updatedGoals.indexOf(goal), 1);
    } else {
      updatedGoals.push(goal);
    }

    setFormData({
      ...formData,
      goals: updatedGoals,
    });
  };

  return (
    <Container className="mt-4">
      <h4>Registration Form</h4>
      <Form className="mt-5">
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" name="name" onChange={handleChange} required />
        </Form.Group>

        <Form.Group controlId="formBasicAge">
          <Form.Label>Age</Form.Label>
          <Form.Control type="text" placeholder="Enter your age" name="age" onChange={handleChange} required />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleChange} required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Any Past Injuries</Form.Label>
          <Form.Control type="text" placeholder="Enter your injuries" name="pastInjuries" onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Any Past Experience</Form.Label>
          <Form.Control type="text" placeholder="Enter your experience" name="experience" onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Enter Your Height</Form.Label>
          <Form.Control type="text" placeholder="Enter your height" name="height" onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Enter Your weight</Form.Label>
          <Form.Control type="text" placeholder="Enter your weight" name="weight" onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Enter Your Food allergies</Form.Label>
          <Form.Control type="text" placeholder="Enter your allergies" name="foodAllergies" onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Enter Your Mediacal Problems</Form.Label>
          <Form.Control type="text" placeholder="Enter your Medical Problems" name="medicalProblems" onChange={handleChange} />
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="To learn karate"
            name="goals"
            onChange={() => handleCheckboxChange("Learn Karate")}
          />
          <input onChange={()=>handleCheckboxChange("Monthly")} type="radio" />Monthly <input onChange={()=>handleCheckboxChange("Quaterly")} type="radio" />Quaterly  <input onChange={()=>handleCheckboxChange("Half-yearly")} type="radio" />Half-Yearly  <input onChange={()=>handleCheckboxChange("Yearly")} type="radio" />Yearly
          <Form.Check
            type="checkbox"
            label="To learn Boxing"
            name="goals"
            onChange={() => handleCheckboxChange("Learn Boxing")}
          />
          <input onChange={()=>handleCheckboxChange("Monthly")} type="radio" />Monthly <input onChange={()=>handleCheckboxChange("Quaterly")} type="radio" />Quaterly  <input onChange={()=>handleCheckboxChange("Half-yearly")} type="radio" />Half-Yearly  <input onChange={()=>handleCheckboxChange("Yearly")} type="radio" />Yearly
          <FormCheck
        type="checkbox" 
        label="To learn Kick-Boxing"
        name="goals"
        onChange={()=>handleCheckboxChange("Learn Kick-Boxing")}
        />
        <input onChange={()=>handleCheckboxChange("Monthly")} type="radio" />Monthly <input onChange={()=>handleCheckboxChange("Quaterly")} type="radio" />Quaterly  <input onChange={()=>handleCheckboxChange("Half-yearly")} type="radio" />Half-Yearly  <input onChange={()=>handleCheckboxChange("Yearly")} type="radio" />Yearly
        <FormCheck
        type="checkbox" 
        label="To learn Mua-Thai"
        name="goals"
        onChange={()=>handleCheckboxChange("Learn Mua-Thai")}
        />
        <input onChange={()=>handleCheckboxChange("Monthly")} type="radio" />Monthly <input onChange={()=>handleCheckboxChange("Quaterly")} type="radio" />Quaterly  <input onChange={()=>handleCheckboxChange("Half-yearly")} type="radio" />Half-Yearly  <input onChange={()=>handleCheckboxChange("Yearly")} type="radio" />Yearly
        <FormCheck
        type="checkbox" 
        label="To train"
        name="goals"
        onChange={()=>handleCheckboxChange("To Train")}
        />
        <input onChange={()=>handleCheckboxChange("Monthly")} type="radio" />Monthly <input onChange={()=>handleCheckboxChange("Quaterly")} type="radio" />Quaterly  <input onChange={()=>handleCheckboxChange("Half-yearly")} type="radio" />Half-Yearly  <input onChange={()=>handleCheckboxChange("Yearly")} type="radio" />Yearly
        <FormCheck
        type="checkbox" 
        label="To learn Karate+Kick-Boxing"
        name="goals"
        onChange={()=>handleCheckboxChange("Learn Karate+Kick-Boxing")}
        />
        <input onChange={()=>handleCheckboxChange("Monthly")} type="radio" />Monthly <input onChange={()=>handleCheckboxChange("Quaterly")} type="radio" />Quaterly  <input onChange={()=>handleCheckboxChange("Half-yearly")} type="radio" />Half-Yearly  <input onChange={()=>handleCheckboxChange("Yearly")} type="radio" />Yearly
        <FormCheck
        type="checkbox" 
        label="Fat Loss Program"
        name="goals"
        onChange={()=>handleCheckboxChange("Fat Loss Program")}
        />
        <input onChange={()=>handleCheckboxChange("Monthly")} type="radio" />Monthly <input onChange={()=>handleCheckboxChange("Quaterly")} type="radio" />Quaterly  <input onChange={()=>handleCheckboxChange("Half-yearly")} type="radio" />Half-Yearly  <input onChange={()=>handleCheckboxChange("Yearly")} type="radio" />Yearly
        </Form.Group>
        <Button variant="primary" onClick={handleRegister}>
          Add
        </Button>
      </Form>

      <Table className="mt-4" striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {registeredStudents.map((student) => (
            <tr key={student.name}>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.email}</td>
              <td>
                <Button variant="danger" onClick={() => handleCancelRegistration(student.name)}>
                  Cancel
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};
