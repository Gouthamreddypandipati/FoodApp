import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import {Link} from 'react-router-dom'

function Product({product}) {
  return (
    <Card className='my-3 p-3 rounded' style={{height:"25rem"}}>
        <Link to={`/product/${product._id}`}>
            <Card.Img src={product.image}></Card.Img>
        </Link>
        <Card.Body>
        <Link to={`/product/${product._id}`}>
            <Card.Title as="div">
                {product.name}
            </Card.Title>
        </Link>
        <Card.Text as="div">
            <div className='my-3'>
                {product.rating} from {product.numReviews} reviews
                <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e824'}></Rating>
            </div>
        </Card.Text>
        <Card.Text as="h3">
            ${product.price}
        </Card.Text>
        </Card.Body>

    </Card>
  )
}

export default Product
