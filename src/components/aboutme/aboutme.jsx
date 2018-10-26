import React from 'react';
import { Container, Row, Col } from 'react-materialize';
import imgUser from '../../images/me.jpg';

const AboutMe = () => (
    <Container>
        <Row>
            <Col s={12}>
                <div className="box-photo-me">
                    <img src={imgUser} className="responsive-img" />
                    <div className="box-text-me">
                        <h3>
                            Tainá
                        </h3>
                        <p> Front End Developer<br />
                            Amante dos animais e natureza. Desenvolvedora por profissão e fotógrafa iniciante por hobby ♡
                        </p>
                    </div>
                </div>
            </Col>
        </Row>

    </Container>
);

export default AboutMe;