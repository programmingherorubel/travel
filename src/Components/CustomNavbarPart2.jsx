import React, { useContext, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../img/images/logo.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const CustomNavbarPart2 = () => {
    const [activeLogin,setActiveLogin] = useState(false)
    const {user,logout} = useContext(AuthContext)
    console.log(user)
    return (
        <Container>
            <Row>
                <Col>
                    <div style={{position:'relative',display:'flex',justifyContent:'space-between',padding:'8px 0px'}} className='navpart2'>
                        <div><img src={logo} style={{width:'100px'}} alt="" /></div>
                        <div className='customNavMenu2'>
                        <ul style={{display:'flex',gap:'15px'}}>
                                <li style={{listStyle:'none'}}>
                                    <Link to='/' style={{textDecoration:'none',color:'black',fontWeight:'600'}}>Home</Link>
                                </li>


                                <li style={{listStyle:'none'}}>
                                    <Link style={{textDecoration:'none',color:'black',fontWeight:'600'}}>Dest
                                ination</Link></li>


                                <li style={{listStyle:'none'}}>
                                    <Link style={{textDecoration:'none',color:'black',fontWeight:'600'}}>Blog</Link>
                                </li>


                                <li style={{listStyle:'none'}}>
                                    <Link style={{textDecoration:'none',color:'black',fontWeight:'600'}}>Contact</Link>
                                </li>
                            </ul>
                        </div>
                        <div className='customNavLogin'>
                            {user?.email ? <button onClick={()=> logout()} className='loginButton'>Logout</button> : <button className='loginButton'><Link to='/login'style={{textDecoration:'none',color:'black'}}>Login</Link></button>}
                        </div>
                        <div onClick={()=>setActiveLogin(!activeLogin)} className='hamburger2 mt-2'><i style={{fontSize:'22px',color:'black'}} className="fa-sharp fa-solid fa-bars"></i></div>
                    </div>

                    <div className={activeLogin ? 'nav2MobileMenu active' : 'nav2MobileMenu'}>
                        <ul>
                                    <li className='mt-3' style={{listStyle:'none'}}>
                                        <Link to='/'style={{textDecoration:'none',color:'black',fontWeight:'600'}}>Home</Link>
                                    </li>


                                    <li className='mt-3' style={{listStyle:'none'}}>
                                        <Link style={{textDecoration:'none',color:'black',fontWeight:'600'}}>Dest
                                    ination</Link></li>


                                    <li className='mt-3' style={{listStyle:'none'}}>
                                        <Link style={{textDecoration:'none',color:'black',fontWeight:'600'}}>Blog</Link>
                                    </li>


                                    <li className='mt-3' style={{listStyle:'none'}}>
                                        <Link style={{textDecoration:'none',color:'black',fontWeight:'600'}}>Contact</Link>
                                    </li>
                                </ul>
                                <div className='mt-2 mb-3'>
                                {user?.email ? <button onClick={()=> logout()} className='loginButton'>Logout</button> : <button className='loginButton'><Link to='/login' style={{textDecoration:'none',color:'black'}}>Login</Link></button>}
                                </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default CustomNavbarPart2;