import React from 'react'
import { Card, Button } from 'react-bootstrap';
const Product = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>Price: ${price.toFixed(2)}</Card.Text>
        <Card.Text>Quantity: {quantity}</Card.Text>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
  )
}

export default Product