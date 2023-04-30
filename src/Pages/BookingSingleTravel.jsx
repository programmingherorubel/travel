import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../Components/Header';
import { useLoaderData } from 'react-router-dom';

const BookingSingleTravel = () => {
    const bookinginfo = useLoaderData()
    
    return (
        <Container fluid >
            <Container>
                <Row>
                <Col md={7} className='mt-5'>
                <h1 style={{color:'white',fontSize:'60px'}} className='bannerTitle'>{bookinginfo.title.toLocaleUpperCase()}</h1>
                <p style={{color:'gray'}}>{bookinginfo.description}</p>
              </Col>
                    <Col md={5} className='mt-5'>
                        <div>
                            <form  className='mt-5 p-3' style={{background:'white'}}>
                                <div>
                                    <p style={{color:'gray'}} className='px-3 py-1'>Origin</p>
                                    <input type="text" style={{background:'#F2F2F2'}} value='Dhaka' disabled className='form-control' />
                                </div>
                                <div>
                                    <p style={{color:'gray'}} className='mt-3'>Origin</p>
                                    <input type="text" value={bookinginfo.title} disabled className='form-control' />
                                </div>
                                <div style={{display:'flex',justifyContent:'space-between'}}>
                                    <div>
                                        <p>From</p>
                                        <input type="date" className='form-control' />
                                    </div>
                                    <div>
                                        <p>To</p>
                                        <input type="date" className='form-control' />
                                    </div>
                                </div>
                                    <button type='submit' className='bookingButton mt-4 w-100'>Booking</button>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default BookingSingleTravel;