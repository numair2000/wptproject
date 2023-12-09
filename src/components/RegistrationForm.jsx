// import { useState } from "react";
// import { Button, Container, Form } from "react-bootstrap";


// export const RegistrationForm = () => {
//     const [formData, setFormData] = useState({
//       name: '',
//       email: '',
//       password: '',
//     });
  
//     const handleChange = (e) => {
//       const { name, value } = e.target;
//       setFormData({
//         ...formData,
//         [name]: value,
//       });
//     };
  
//     const handleSubmit = async (e) => {
//       e.preventDefault();
    
//       try {
//         const response = await fetch('http://localhost:3001/register', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(formData),
//         });
    
//         const data = await response.json();
    
//         if (response.ok) {
//           console.log('Registration successful:', data);
//           // You can redirect the user or perform other actions after successful registration
//         } else {
//           console.error('Registration failed:', data.message);
//           // Handle registration failure, show an error message, etc.
//         }
//       } catch (error) {
//         console.error('Error during registration:', error);
//       }
//     };
  
//     return (
//         <Container className="mt-4">
//             <h4>Registration Form</h4>
//             <Form className="mt-5" onSubmit={handleSubmit}>
//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                     <Form.Label >Enter Your Name</Form.Label>
//                     <Form.Control type="text" placeholder="Enter your name"  onChange={handleChange}/>
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                     <Form.Label>Email Your Age</Form.Label>
//                     <Form.Control type="text" placeholder="Enter your age" onChange={handleChange}/>
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                     <Form.Label>Email address</Form.Label>
//                     <Form.Control type="email" placeholder="Enter email" onChange={handleChange}/>
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="formBasicPassword">
//                     <Form.Label>Password</Form.Label>
//                     <Form.Control type="password" placeholder="Password" onChange={handleChange}/>
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formBasicPassword">
//                     <Form.Label>Confirm Password</Form.Label>
//                     <Form.Control type="password" placeholder="Password" onChange={handleChange}/>
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                     <Form.Label>Past Injuries ( If Any)</Form.Label>
//                     <Form.Control type="text" placeholder="Enter your past injuries (if any)" onChange={handleChange}/>
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                     <Form.Label>Enter Your Experience (If Any)</Form.Label>
//                     <Form.Control type="text" placeholder="Enter your past experience" onChange={handleChange}/>
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                     <Form.Label>Enter Your Height (For Your Specific Diet Plan)</Form.Label>
//                     <Form.Control type="text" placeholder="Enter your height" onChange={handleChange}/>
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                     <Form.Label>Enter Your Weight (For Your Specific Diet Plan)</Form.Label>
//                     <Form.Control type="text" placeholder="Enter your weight" onChange={handleChange}/>
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                     <Form.Label>Enter Your Food Allergies (If Any)</Form.Label>
//                     <Form.Control type="text" placeholder="Enter your food allergies" onChange={handleChange}/>
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                     <Form.Label>Enter Your Medical Problems (If Any)</Form.Label>
//                     <Form.Control type="text" placeholder="Enter your medical problems" onChange={handleChange}/>
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formBasicCheckbox">
//                     <Form.Check type="checkbox" label="To learn karate" /> 
//                     <Form.Check type="checkbox" label="To learn to live a disciplined life" />
//                     <Form.Check type="checkbox" label="To learn karate" />
//                     <Form.Check type="checkbox" label="To learn karate" />
//                 </Form.Group>
//                 <Button variant="primary" type="submit">
//                     Submit
//                 </Button>
//             </Form>
//         </Container>
//     );
// }

import { useState } from "react";
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
      const response = await fetch('http://localhost:3001/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Registration successful:', data);
        // You can redirect the user or perform other actions after successful registration
      } else {
        console.error('Registration failed:', data.message);
        // Handle registration failure, show an error message, etc.
      }
    } catch (error) {
      console.error('Error during registration:', error);
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
          <Form.Label>Email Your Age</Form.Label>
          <Form.Control type="text" placeholder="Enter your age" name="age" onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Enter Your password</Form.Label>
          <Form.Control type="password" placeholder="Enter your name" name="name" onChange={handleChange} />
        </Form.Group>
        {/* Add the rest of your Form.Group components here */}
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="To learn karate"
            onChange={() => handleCheckboxChange("Learn Karate")}
          />
          <Form.Check
            type="checkbox"
            label="To learn to live a disciplined life"
            onChange={() => handleCheckboxChange("Live a Disciplined Life")}
          />
          {/* Add similar lines for other goals */}
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};