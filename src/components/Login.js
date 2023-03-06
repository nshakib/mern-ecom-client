import React from 'react'
import { Container, Form, Button } from 'react-bootstrap';

const Login = () => {
  return (
    <Container className="mt-5">
      <h1 className="text-center">Login</h1>
      <Form className="mt-5">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  )
}

export default Login