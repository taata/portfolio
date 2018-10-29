import React, { Component } from 'react';
import { Container, Row, Col } from 'react-materialize';
import { Parallax } from 'react-scroll-parallax';
const urlInstaEmbed = 'https://api.instagram.com/oembed/?url=http://instagr.am/p/';
let linkPhotoOrigin = 'https://www.instagram.com/p/';
const taken = '/?taken-by=tainarenatafotos';
let linkPicture = '';

export default class Album extends Component {
    constructor() {
        super();
        this.state = {
            picture: [],
        };
    }

    componentDidMount() {
        fetch(`${urlInstaEmbed}BpXzSmTl9mp`)
            .then(results => {
                return results.json();
            }).then(data => {
                let picture = data.thumbnail_url;
                linkPicture = linkPhotoOrigin + 'BpXzSmTl9mp' + taken;
                this.setState({ picture, linkPicture })
            });
    }


    render() {
        return (
            <Parallax
                offsetYMin={-0}
                offsetYMax={0}
                className='parallax-album'
            >
                <Container>
                    <Row>
                        <Col s={6}>
                            <a href={linkPicture}>
                                <img src={this.state.picture} alt={linkPicture} className="image-album" />
                            </a>
                        </Col>
                    </Row>
                </Container>
            </Parallax>
        )
    }
}
