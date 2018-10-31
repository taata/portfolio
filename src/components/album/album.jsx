import React, { Component } from 'react';
import { Container, Row, Col } from 'react-materialize';
import { Parallax } from 'react-scroll-parallax';
const urlInstaEmbed = 'https://api.instagram.com/oembed/?url=http://instagr.am/p/';
let linkPhotoOrigin = 'https://www.instagram.com/p/';
const taken = '/?taken-by=tainarenatafotos';
let pictures = [];
let urlsPictures = ['BpkrRH_Bc0_', 'BpXzSmTl9mp', 'BpS6taAlz4O', 'Bm9UIi1FidK', 'BmmYsIsFLNb', 'Bi7J0N-l5b1'];

export default class Album extends Component {
    constructor() {
        super();
        this.state = {
            pictures: [],
        };
    }

    componentDidMount() {
        urlsPictures.forEach((param) => {
            fetch(urlInstaEmbed + param)
                .then(results => {
                    return results.json();
                }).then(data => {
                    pictures.push(data.thumbnail_url);
                    console.log('pictures: ', pictures);
                    this.setState({ pictures })
                });
        })
    }

    render() {
        const { pictures } = this.state;
        return (
            <Parallax
                offsetYMin={-0}
                offsetYMax={0}
                className='parallax-album'
            >
                <Container>
                    <Row>
                        {pictures.map(pic =>

                            <Col s={6}>
                                <a href={linkPhotoOrigin}>
                                    <img src={pic} alt={pic} className="image-album" />
                                </a>
                            </Col>
                        )}
                    </Row>
                </Container>
            </Parallax>
        )
    }
}
