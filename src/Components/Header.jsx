import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CustomNavbar from './CustomNavbar';

const Header = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <CustomNavbar></CustomNavbar>
                </Col>
            </Row>
        </Container>
    );
};

export default Header;