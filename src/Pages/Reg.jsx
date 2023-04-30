import React, { useContext, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomNavbarPart2 from '../Components/CustomNavbarPart2';
import { AuthContext } from '../Provider/AuthProvider';
import facebook from '../img/images/icons/fb.png';
import google from '../img/images/icons/google.png';
import { toast } from 'react-toastify';

const Reg = () => {
    const {googleSingIn,registerUser,error} = useContext(AuthContext) 
    const [update,setUpdate]= useState({})

    const handelOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newValue = {...update}
        newValue[field] = value
        setUpdate(newValue)
    }

    
    
    const handelForm = (e)=>{
        e.preventDefault()
        if(update.password !== update.conpass){
            toast.error('password did not match', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
            return
        }
        registerUser(update.email,update.password)
    }

    
    return (
        <Container>
            <CustomNavbarPart2></CustomNavbarPart2>
            <Row>
                <Col md={6} className='mx-auto'>
                    <h3 className='mt-1 mb-2'>Create an account</h3>
                    <form className='mt-5 p-4 border border-1' onSubmit={handelForm}>
                        <input onChange={handelOnChange} name='fastName' type="text" className='form-control mt-2 p-3 border border-0 logininput' placeholder='First Name' />

                        <input onChange={handelOnChange} name='LastName' type="text" className='form-control mt-2 p-3 border border-0 logininput' placeholder='Last Name' />

                        <input onChange={handelOnChange} name='email' type="text" className='form-control mt-2 p-3 border border-0 logininput' placeholder=' Email' />


                        <input onChange={handelOnChange} name='password' type="Password" className='form-control mt-2 p-3 border border-0 logininput' placeholder='Password' />

                        <input onChange={handelOnChange} name='conpass' type="Password" className='form-control mt-2 p-3 border border-0 logininput' placeholder='Confirm Password' />


                        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                            <div className='mt-3'>
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" for="exampleCheck1">Remember Me</label>
                            </div>
                            <h6 className='mt-2'><Link to='' style={{color:'#F9A51A'}}>Forgate Password</Link></h6>
                        </div>
                        {/* {error && <p style={{color:'red'}}>{error}</p>} */}
                        <div>
                        <button type='submit' className='loginButtonSUbmit mt-4 w-100'>Create an account</button>
                        </div>
                        <small>Already have an account?  <Link style={{color:'#F9A51A'}} to='/login'>Login</Link></small>
                    </form>
                    
                    <div className='mx-auto text-center'>
                    <button className='btn border border-1 mt-3'><img style={{width:'30px',height:'30px',borderRadius:'50%'}} src={facebook} alt="" /> Continue with Facebook</button> <br />

                    <button onClick={()=>googleSingIn()} className='btn border border-1 mt-3'><img style={{width:'30px',height:'30px',borderRadius:'50%'}} src={google} alt="" /> Continue with Google</button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Reg;