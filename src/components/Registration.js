import axios from 'axios';
import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const RegistrationForm = ({ onSubmit }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [photo, setPhoto] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      firstName,
      lastName,
      email,
      mobile,
      password,
      photo
    };
    onSubmit(newUser);
    try {
        const response = await  axios.post('/BasedUrl/registration', newUser);
        onSubmit(response.data);
      } catch (error) {
        console.error(error);
      }
    

  };

 
  return (
    <Container className="mt-5">
      <h1 className="text-center">Registration</h1>
        <Form className="mt-5" onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="Enter first name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formBasicLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Enter last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formBasicMobile">
            <Form.Label>Mobile</Form.Label>
            <Form.Control type="text" placeholder="Enter mobile number" value={mobile} onChange={(e) => setMobile(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formBasicPhoto">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control type="text" placeholder="Enter photo URL" value={photo} onChange={(e) => setPhoto(e.target.value)} />
        </Form.Group>

        <Button variant="primary" type="submit">
            Submit
        </Button>
        </Form>
    </Container>
  );
};

export default RegistrationForm;
