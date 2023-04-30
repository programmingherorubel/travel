import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import logo from '../img/images/whitelogo.png';
const CustomNavbar = () => {
    const [activenav,setActivenav] = useState(false)
    let settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 3,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              initialSlide: 2,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
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
                        <div className='login'><button> Login </button></div>
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
                            <div className='py-2'><button className='loginButton'> Login </button></div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default CustomNavbar;