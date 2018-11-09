import React, { Component } from 'react';
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
            <section className='parallax-album'>
                <div className="container">
                    <div>
                        {pictures.map(pic =>

                            <div key={pic.media_id} className="col-images">
                                <a href={pic.urlComplete}>
                                    <img src={pic.thumbnail_url} alt={pic.title} className="image-album" />
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        )
    }
}
