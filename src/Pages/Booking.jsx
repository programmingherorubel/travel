import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import { useLoaderData } from 'react-router-dom';
import CustomNavbarPart2 from '../Components/CustomNavbarPart2';

const Booking = () => {
    
    const bookingData = useLoaderData()
    const rooms = bookingData?.rooms
    
    return (
        <Container>
            <CustomNavbarPart2></CustomNavbarPart2> <hr />
            <Row>
                <Col md={6}>
                    <h4>{bookingData.title}</h4>
                    {
                        rooms.map(hotel => <div className="mt-5" key={hotel.title1}>
                            <div style={{display:'flex',justifyContent:'space-between',gap:'10px',alignItems:'center'}}>
                                <div><img src={hotel.sinleroom} className='img-fluid' alt="" /></div>
                                <div>
                                <h5>{hotel.title1}</h5>
                                <p style={{color:'gray'}}>{hotel.description1}</p>
                                <Rating
                                    placeholderRating={hotel.reviw}
                                    emptySymbol={<i class=" text-warning fa-sharp fa-regular fa-star"></i>}
                                    placeholderSymbol={<i class=" text-warning fa-sharp fa-solid fa-star"></i>}
                                    fullSymbol={<i class=" text-warning fa-sharp fa-solid fa-star"></i>}
                                    />({hotel.total})
                                <p><i class="fa-solid fa-dollar-sign"></i>{hotel.price}</p>
                                </div>
                            </div>
                        </div>)
                    }
                </Col>
                <Col md={6}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        aria-hidden="false"
                        tabIndex="0"
                        />
                </Col>
            </Row>
        </Container>
    );
};

export default Booking;