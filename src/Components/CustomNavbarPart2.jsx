import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../img/images/logo.png'
import { Link } from 'react-router-dom';

const CustomNavbarPart2 = () => {
    const [activeLogin,setActiveLogin] = useState(false)
    return (
        <Container>
            <Row>
                <Col>
                    <div style={{position:'relative',display:'flex',justifyContent:'space-between',padding:'8px 0px'}} className='navpart2'>
                        <div><img src={logo} style={{width:'100px'}} alt="" /></div>
                        <div className='customNavMenu2'>
                        <ul style={{display:'flex',gap:'15px'}}>
                                <li style={{listStyle:'none'}}>
                                    <Link style={{textDecoration:'none',color:'black',fontWeight:'600'}}>Home</Link>
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
                            <button className='loginButton'>Login</button>
                        </div>
                        <div onClick={()=>setActiveLogin(!activeLogin)} className='hamburger2 mt-2'><i style={{fontSize:'22px',color:'black'}} className="fa-sharp fa-solid fa-bars"></i></div>
                    </div>

                    <div className={activeLogin ? 'nav2MobileMenu active' : 'nav2MobileMenu'}>
                        <ul>
                                    <li className='mt-3' style={{listStyle:'none'}}>
                                        <Link style={{textDecoration:'none',color:'black',fontWeight:'600'}}>Home</Link>
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
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default CustomNavbarPart2;