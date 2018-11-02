import React, { Component } from 'react';
import { Container, Row, Col } from 'react-materialize';
import { Parallax } from 'react-scroll-parallax';
const urlInstaEmbed = 'https://api.instagram.com/oembed/?url=http://instagr.am/p/';
let linkPhotoOrigin = 'https://www.instagram.com/p/';
let pictures = [];
let urlsPictures = ['BoFbjh4lpcR', 'BjYcpZilbn_', 'BmrnJJKlYgT', 'Bm9UIi1FidK', 'BjKm7Q9FckE', 'Bi7J0N-l5b1'];

export default class Album extends Component {
    constructor() {
        super();
        this.state = {
            pictures: [],
            linkPhoto: []
        };
    }

    componentDidMount() {
        urlsPictures.forEach((param) => {
            fetch(urlInstaEmbed + param)
                .then(results => {
                    return results.json();
                }).then(data => {
                    let urlComplete = linkPhotoOrigin + param;
                    pictures.push(Object.assign(data, { urlComplete }));
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

                            <Col s={4} key={pic.media_id} className="col-images">
                                <a href={pic.urlComplete}>
                                    <img src={pic.thumbnail_url} alt={pic.title} className="image-album" />
                                </a>
                            </Col>
                        )}
                    </Row>
                </Container>
            </Parallax>
        )
    }
}
