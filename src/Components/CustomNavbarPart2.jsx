import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../img/images/logo.png'

const CustomNavbarPart2 = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <div style={{position:'relative'}} className='navpart2'>
                        <div><img src={logo} style={{width:'100px'}} alt="" /></div>
                        <div></div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default CustomNavbarPart2;