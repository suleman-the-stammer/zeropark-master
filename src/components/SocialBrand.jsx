import React, { useEffect } from 'react';

// Assets | Icons | logo :
import banner from '../assets/banners/Screenshot 2024-08-05 183719.png'
import banner2 from '../assets/banners/all-logos-mobile.svg'

// css :
import './style/SocialBrand.scss'


const SocialBrand = () => {

    return (
        <div className="social">
            <div className="social__container max-width" >
                <div className="header" >
                    <h1 data-aos="fade-up"
                        data-aos-delay="100"
                    >Solutions made to deliver growth.</h1>
                    <h2 data-aos="fade-up"
                        data-aos-delay="200"
                    >No cookies involved.</h2>
                    <p data-aos="fade-up">
                        Zeropark is a global ad exchange commerce media platform with
                        incremental advertising opportunities for brands and businesses
                        looking to connect with consumers.
                    </p>
                    <p data-aos="fade-up" >
                        With advertising delivered during key moments of the modern customer
                        journey, we enable top efficiency in campaigns while maximizing
                        monetization potential for publishers.
                    </p>
                </div>
                <div className="image-container" data-aos='fade-in' data-aos-delay='500'>
                    <img className='dekstop-view' src={banner} alt="Description of the image" />
                    <img className='mobile-view' src={banner2} alt="Description of the image" />
                </div>
            </div>
        </div>
    );
};

export default SocialBrand;
