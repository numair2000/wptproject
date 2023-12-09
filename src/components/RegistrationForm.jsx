
import { useEffect, useState } from "react";
import { Button, Container, Form, Table } from "react-bootstrap";

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

  const [registeredStudents, setRegisteredStudents] = useState({
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

  useEffect(() => {
    // Fetch the initial list of registered students when the component mounts
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

  const [registeredCount, setRegisteredCount] = useState(0);

  useEffect(() => {
    // Fetch the initial registered count when the component mounts
    fetchRegisteredCount();
  }, []);

  const fetchRegisteredCount = async () => {
    try {
      const response = await fetch('http://localhost:3302/registeredCount');
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
   
    setRegisteredStudents({
      ...registeredStudents,
      [e.target.name]: e.target.value,
      [e.target.age]: e.target.value,
      [e.target.eamil]: e.target.value,
      [e.target.pastInjuries]: e.target.value,
      [e.target.experience]: e.target.value,
      [e.target.height]: e.target.value,
      [e.target.weight]: e.target.value,
      [e.target.foodAllergies]: e.target.value,
      [e.target.medicalProblems]: e.target.value
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
      const response = await fetch('http://localhost:3302/register', {
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
        setRegisteredStudents([...registeredStudents, data.user]);
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
      const response = await fetch('http://localhost:3302/register', {
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
        setRegisteredCount((prevCount) => prevCount - 1);
        setRegisteredStudents([...registeredStudents, data.user]);
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
          <Form.Control type="text" placeholder="Enter your name" value={registeredStudents.name} name="name" onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicAge">
          <Form.Label>Enter Your Age</Form.Label>
          <Form.Control type="text" placeholder="Enter your age" value={registeredStudents.age} name="age" onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={registeredStudents.email} name="email" onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Any Past Injuries</Form.Label>
          <Form.Control type="text" placeholder="Enter your injuries" value={registeredStudents.pastInjuries} name="pastInjuries" onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Any Past Experience</Form.Label>
          <Form.Control type="text" placeholder="Enter your experience" value={registeredStudents.experience} name="experience" onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Enter Your Height</Form.Label>
          <Form.Control type="text" placeholder="Enter your height" value={registeredStudents.height} name="height" onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Enter Your weight</Form.Label>
          <Form.Control type="text" placeholder="Enter your weight" value={registeredStudents.weight} name="weight" onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Enter Your Food allergies</Form.Label>
          <Form.Control type="text" placeholder="Enter your allergies" value={registeredStudents.foodAllergies} name="foodAllergies" onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Enter Your Mediacal Problems</Form.Label>
          <Form.Control type="text" placeholder="Enter your Medical Problems" value={registeredStudents.medicalProblems} name="medicalProblems" onChange={handleChange} />
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

        <Table className="mt-4" striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            {/* ... other table headers */}
          </tr>
        </thead>
        <tbody>
        {registeredStudents.map((student, index) => (
      <tr key={index}>
        <td>{formData.name}</td>
        <td>{formData.age}</td>
        <td>{formData.email}</td>
        {/* ... other table cells */}
      </tr>
    ))}
        </tbody>
      </Table>
        
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