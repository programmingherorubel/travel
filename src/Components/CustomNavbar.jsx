import React, { useState,useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import logo from '../img/images/whitelogo.png';
import { AuthContext } from '../Provider/AuthProvider';


const CustomNavbar = () => {
    const [activenav,setActivenav] = useState(false)
    const {user,logout} = useContext(AuthContext)
    
    return (
        <Container>
            <Row>
                <Col>
                    <div className='customnavbar'>
                        <div className='logo'><img src={logo} alt="" /></div>
                        <div className='searchContainer'>
                            <input type="text"className='search form-control' style={{background:'transparent',color:'white'}} placeholder='Search Your Destination' />
                        </div>
                        <div className='navmenu'>
                            <ul style={{display:'flex',gap:'15px'}}>
                                <li style={{listStyle:'none'}}>
                                    <Link style={{textDecoration:'none',color:'white',fontWeight:'600'}}>Home</Link>
                                </li>


                                <li style={{listStyle:'none'}}>
                                    <Link style={{textDecoration:'none',color:'white',fontWeight:'600'}}>Dest
                                ination</Link></li>


                                <li style={{listStyle:'none'}}>
                                    <Link style={{textDecoration:'none',color:'white',fontWeight:'600'}}>Blog</Link>
                                </li>


                                <li style={{listStyle:'none'}}>
                                    <Link style={{textDecoration:'none',color:'white',fontWeight:'600'}}>Contact</Link>
                                </li>
                            </ul>
                        </div>
                        {user ? <div  className='login'><button onClick={()=> logout()}> Logout </button></div> : <div className='login'><button> <Link style={{textDecoration:"none",color:"black"}} to='/login'>Login</Link> </button></div>}
                        <div onClick={()=>setActivenav(!activenav)} className='hamburger'><i style={{fontSize:'22px',color:'white'}} className="fa-sharp fa-solid fa-bars"></i></div>
                        <div className={activenav ?  "moibileMenu active": "moibileMenu"}>
                        <ul>
                                <li style={{listStyle:'none'}}>
                                    <Link style={{textDecoration:'none',color:'white',fontWeight:'600'}}>Home</Link>
                                </li>


                                <li style={{listStyle:'none'}}>
                                    <Link style={{textDecoration:'none',color:'white',fontWeight:'600'}}>Dest
                                ination</Link></li>


                                <li style={{listStyle:'none'}}>
                                    <Link style={{textDecoration:'none',color:'white',fontWeight:'600'}}>Blog</Link>
                                </li>


                                <li style={{listStyle:'none'}}>
                                    <Link style={{textDecoration:'none',color:'white',fontWeight:'600'}}>Contact</Link>
                                </li>
                            </ul>
                            <div className='py-3'>
                            <input type="text"className='py-2 search form-control' style={{background:'transparent',color:'white'}} placeholder='Search Your Destination' />
                            </div>
                            {user ? <div  className='login'><button onClick={()=> logout()}> Logout </button></div> : <div className='login'><button> <Link style={{textDecoration:"none",color:"black"}} to='/login'>Login</Link> </button></div>}
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default CustomNavbar;