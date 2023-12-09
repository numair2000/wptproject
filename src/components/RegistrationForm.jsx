import { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

export const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    password: '',
    confirmPassword: '',
    pastInjuries: '',
    experience: '',
    height: '',
    weight: '',
    foodAllergies: '',
    medicalProblems: '',
    goals: []
  });

  

  const fetchRegisteredStudents = async () => {
    try {
      const response = await fetch('http://localhost:3385/register');
      const data = await response.json();

      if (response.ok) {
        fetchRegisteredStudents(data.students);
      } else {
        console.error('Failed to fetch registered students:', data.message);
      }
    } catch (error) {
      console.error('Error fetching registered students:', error);
    }
  };

  const [registeredCount, setRegisteredCount] = useState(0);

  useEffect(() => {
    // Fetch the initial registered count when the component mounts
    fetchRegisteredCount();
  }, []);

  const fetchRegisteredCount = async () => {
    try {
      const response = await fetch('http://localhost:3385/register');
      const data = await response.json();

      if (response.ok) {
        setRegisteredCount(data.count);
      } else {
        console.error('Failed to fetch registered count:', data.message);
      }
    } catch (error) {
      console.error('Error fetching registered count:', error);
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

 

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3385/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
       window.alert("Successfully Registered")
        console.log('Registration successful:', data);
        setRegisteredCount((prevCount) => prevCount + 1);
       
        // You can redirect the user or perform other actions after successful registration
      } else {
        console.error('Registration failed:', data.message);
        // Handle registration failure, show an error message, etc.
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  const handleCancelRegistration = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:3385/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: formData.name }), // Send only the name for cancellation
      });
  
      const data = await response.json();
  
      if (response.ok) {
        window.alert("Registration Canceled Successfully");
        console.log('Registration canceled successfully:', data);
        // You can update the UI or perform other actions after cancellation
      } else {
        console.error('Cancellation failed:', data.message);
        // Handle cancellation failure, show an error message, etc.
      }
    } catch (error) {
      console.error('Error during cancellation:', error);
    }
  };
  return (
    <Container className="mt-4">
      <h4>Registration Form</h4>
      <Form className="mt-5" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Enter Your Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" name="name" onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicAge">
          <Form.Label>Enter Your Age</Form.Label>
          <Form.Control type="text" placeholder="Enter your age" name="age" onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleChange} />
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
        {/* Add the rest of your Form.Group components here */}
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="To learn karate"
            name="goals"
            onChange={() => handleCheckboxChange("Learn Karate") }
          />
          <Form.Check
            type="checkbox"
            label="To learn to live a disciplined life"
            name="goals"
            onChange={() => handleCheckboxChange("Live a Disciplined Life")}
          />
          {/* Add similar lines for other goals */}
        </Form.Group>
        <Button variant="primary" type="submit" >
          Submit
        </Button>
        <p>{registeredCount} candidates have registered so far.</p>

       
        
        <Form className="mt-5" onSubmit={handleCancelRegistration}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Enter Your Name for Cancellation</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" name="name" onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
        </Form.Group>
        <Button variant="danger" type="submit">
          Cancel Registration
        </Button>
      </Form>
       
      </Form>
      
    </Container>
  );
};