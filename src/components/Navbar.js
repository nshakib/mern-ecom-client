import React from 'react'
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarMenu = () => {
  return (
    <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">Shakib Store</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href={'/'}>Home</Nav.Link>
            <Nav.Link href="/ProductList">Product List</Nav.Link>
            <Nav.Link href="/Login">Login</Nav.Link>
            <Nav.Link href="/Registration">Registration</Nav.Link>
            <Nav.Link href="/Cart">Cart</Nav.Link>
            <Nav.Link href="/Checkout">Checkout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default NavbarMenu