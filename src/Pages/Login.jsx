import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CustomNavbarPart2 from '../Components/CustomNavbarPart2';
import '../Style/LoginStyle.css';
import { Link } from 'react-router-dom';
import facebook from '../img/images/icons/fb.png'
import google from '../img/images/icons/google.png'

const Login = () => {
    return (
        <Container>
            <CustomNavbarPart2></CustomNavbarPart2>
            <Row>
                <Col md={6} className='mx-auto'>
                    <h3 className='mt-4 mb-4'>Login</h3>
                    <form className='mt-5 p-4 border border-1'>
                        <input type="text" className='form-control mt-3 p-3 border border-0 logininput' placeholder='UserName Or Email' />


                        <input type="text" className='form-control mt-3 p-3 border border-0 logininput' placeholder='Password' />


                        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                            <div className='mt-3'>
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Remember Me</label>
                            </div>
                            <h6 className='mt-2'><Link to='' style={{color:'#F9A51A'}}>Forgate Password</Link></h6>
                        </div>
                        <div>
                        <button className='loginButtonSUbmit mt-4 w-100'>Login</button>
                        </div>
                        <small>Don’t have an account? <Link style={{color:'#F9A51A'}} to='/reg'>Create an account</Link></small>
                    </form>
                    
                    <div className='mx-auto text-center'>
                    <button className='btn border border-1 mt-3'><img style={{width:'30px',height:'30px',borderRadius:'50%'}} src={facebook} alt="" /> Continue with Facebook</button> <br />
                    <button className='btn border border-1 mt-3'><img style={{width:'30px',height:'30px',borderRadius:'50%'}} src={google} alt="" /> Continue with Google</button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;