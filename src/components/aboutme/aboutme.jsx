import React from 'react';
import { Container, Row, Col } from 'react-materialize';
import imgUser from '../../images/me.jpg';
import { Parallax } from 'react-scroll-parallax';

const AboutMe = () => (
    <Parallax
        offsetYMin={-0}
        offsetYMax={0}
        className='parallax-about'
    >
        <Container>
            <Row>
                <Col s={12}>
                    <div className="box-photo-me">
                        <img src={imgUser} className="responsive-img" alt="Tainá Renata Fotos" />
                        <div className="box-text-me">
                            <h3>
                                Tainá
                        </h3>
                            <p> Front End Developer<br />
                                Amante dos animais e natureza. Desenvolvedora por profissão e fotógrafa iniciante por hobby ♡<br />
                                Texto ainda em construção... aguarde!
                        </p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </Parallax>
);

export default AboutMe;