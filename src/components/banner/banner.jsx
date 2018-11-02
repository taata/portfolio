import React from 'react';
import { Parallax } from 'react-scroll-parallax';

const Banner = () => (
    <Parallax
        offsetYMin={-0}
        offsetYMax={0}
        className='parallax-banner'
    >
        <div className="title-banner">
            <h3> Tainá Renata Fotos</h3>
        </div>
    </Parallax>

);

export default Banner;