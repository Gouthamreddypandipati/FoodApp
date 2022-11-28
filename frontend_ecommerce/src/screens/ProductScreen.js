import React from 'react'
import {Link ,useParams} from 'react-router-dom'
import { withRouter } from 'react-router'
import {Row,Col,Image,ListGroup,Button,Card,Form} from 'react-bootstrap'
import Rating from '../components/Rating'
import products from '../products'
import Product from '../components/Product'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function ProductScreen() {
    let navigate = useNavigate();
    const [qty,setqty]=useState(1)
    const {id} =useParams()
    const [product,setproduct]=useState([])
    useEffect(()=>{
        async function fetchproducts(){
          const {data}= await axios.get(`/api/products/${id}`)
          setproduct(data)
        }
        fetchproducts()
        
      },[])
    const addtocart=()=>{
         navigate(`/cart/${id}/${qty}`)
    }
  return (
    <div>
      <Link to='/' className='btn btn-light my-3'>Go Back</Link>
      <Row>
        <Col md={6}>
            <Image src={product.image} alt={product.name} fluid  ></Image>
        </Col>
        <Col md={3}>
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <h3>{product.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e824'}></Rating>
                </ListGroup.Item>
                <ListGroup.Item>
                    Price:{product.price}
                </ListGroup.Item>
                <ListGroup.Item>
                    ABOUT:{product.description}
                </ListGroup.Item>

            </ListGroup>
        </Col>
        <Col md={3}>
            <Card>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <Row>
                            <Col>Price:</Col><Col><strong>{product.price}</strong></Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col>Status:</Col><Col>
                            {product.countInStock>0 ? 'In stock' :'Out of Stock' }</Col>
                        </Row>
                    </ListGroup.Item>
                    {product.countInStock > 0 && (
                        <ListGroup.Item>
                            <Row>
                                <Col>Qty</Col>
                                <Col xs='auto' className='my-1'>
                                <Form.Control as="select" value={qty} onChange={(e)=>setqty(e.target.value)}>
                                    {
                                        [...Array(product.countInStock).keys()].map((x)=>(
                                            <option key={x+1}>
                                                {x+1}
                                            </option>
                                        ))
                                    }
                                </Form.Control>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    )}
                    <ListGroup.Item>
                        <Button onClick={addtocart} className='btn-block' disabled={product.countInStock==0} type='button'>Add to cart</Button>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </Col>
      </Row>
    </div>
  )
}

export default ProductScreen
