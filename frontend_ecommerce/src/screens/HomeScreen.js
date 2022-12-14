import React from 'react'
import {Row,Col} from 'react-bootstrap'
import Product from '../components/Product'
import { useEffect, useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {listProducts} from '../actions/productActions'
import Loader from '../components/Loader'

function HomeScreen() {
  const dispatch=useDispatch()
  const productList=useSelector(state=> state.productList)
  const {error,loading,products}=productList
  useEffect(()=>{
    console.log("effect");
    dispatch(listProducts())
  },[])
  return (
    <div>
      <h1>Items</h1>
      {loading ? <Loader></Loader>
      : error ? <h3>{error}</h3>
      :<Row>{
        products.map(product=>( <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product}></Product>
            </Col>))
       
}
      </Row>
}
    </div>
  )
}

export default HomeScreen
