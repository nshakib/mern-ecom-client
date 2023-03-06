import React, { Fragment } from 'react'
import { Card, Button } from 'react-bootstrap';
import Layout from '../components/masterLayout/Layout';

const ProductListPage = () => {
  return (
    <Fragment>
      <Layout>
          <div className="d-flex flex-wrap justify-content-center">
          {products.map((product) => (
            <Card key={product.id} className="m-2" style={{ width: '18rem' }}>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Button variant="primary">{product.price}</Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Layout>
    </Fragment>
  )
}

export default ProductListPage