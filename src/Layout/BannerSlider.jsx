import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";


const BannerSlider = () => {
    const fkdata = useLoaderData()
    const [contentData,setContentData] = useState(fkdata[0])

    const onClickHandeler = (id)=>{
      const findingData = fkdata.find(data => data.id === id )
      setContentData(findingData)
    }



    let settings = {
      dots: true,
          arrows:false,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 3,
          centerPadding: '60px',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              initialSlide: 3,
              infinite: true,
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
              slidesToScroll: 1,
              initialSlide: 1
            }
          }
        ]
      };

      const content = fkdata.map(singleData => <div key={singleData.id} onClick={()=>onClickHandeler(singleData.id)} style={{position:'relative'}}>
        <img src={singleData.img}  className='img-fluid' style={{width:"90%"}} alt="" />
        <h5 style={{color:'white',position:'absolute',zIndex:'200',top:'80%',padding:'5px'}}>{singleData.title.toLocaleUpperCase()}</h5>
      </div>)
     
    return (
        <>
        <Container>
            <Row>
              <Col md={6} className='mt-5'>
                <h1 style={{color:'white',fontSize:'60px'}} className='bannerTitle'>{contentData.title.toLocaleUpperCase()}</h1>
                <p style={{color:'gray'}}>{contentData.description}</p>
                <button className='loginButton'>
                  <Link to={`/travel/${contentData.id}`} style={{textDecoration:'none',color:'black'}}>Booking <i class="fa-solid fa-arrow-right"></i></Link>
                </button>
              </Col>
              <Col md={6} className='mt-5'>
                  <Slider {...settings}>
                    {
                      content
                    }
                  </Slider>
                </Col>
            </Row>
        </Container>
        </>
    );
};

export default BannerSlider;