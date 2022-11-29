import React,{useEffect,useState} from 'react'
import {Link,useParams} from 'react-router-dom'
import {Form,Button,Row,Col} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import {login} from '../actions/userActions'
import FormContainer from '../components/FormContainer'
import { useNavigate } from 'react-router-dom';

function LoginScreen(props) {
    let navigate = useNavigate();
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const dispatch=useDispatch()

    const {redirect}= useParams()
    // const redirect1 = location.search ? location.search.split('=')[1] : '/'

    const userLogin=useSelector(state=>state.userLogin)
    const {error,loading,userInfo}=userLogin

    useEffect(()=>{
        if(userInfo){
            navigate('/')
        }
    },[navigate,userInfo,redirect])
    const submitHandler=(e)=>{
        dispatch(login(email,password))
        e.preventDefault()

    }

  return (
    <FormContainer >
        <h1>Sign in</h1>
        <p style={{ color:'red' }}>{error}</p>
         {/* {loading && <Loader />} */}
        <Form onSubmit={submitHandler} >
            <Form.Group controlId='email' style={{ padding:'10px' }}>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                type='text'
                placeholder='Enter email'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}>

                </Form.Control>
            </Form.Group>
            <Form.Group controlId='password' style={{ padding:'10px' }}>
                <Form.Label>Password</Form.Label>
                <Form.Control
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}>

                </Form.Control>
            </Form.Group>
            <Button type='submit' variant='primary'>Sign In</Button>
        </Form>
        <Row className='py-3'>
            <Col>
            New Customer ?<Link to={redirect ?`/register:redirect=${redirect}`:'/register'}>Register</Link>
            </Col>
        </Row>
    </FormContainer>
  )
}

export default LoginScreen