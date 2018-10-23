import React from 'react';
import { Container, Row, Col, Parallax } from 'react-materialize';
import imgBanner from '../../images/banner2.JPG';


const Banner = () => (
    <Container>
        <Row>
            <Col m={12} className="center-div">
                <img src={imgBanner} alt='Banner' className='img-banner' />
            </Col>
        </Row>
    </Container>
);

export default Banner;