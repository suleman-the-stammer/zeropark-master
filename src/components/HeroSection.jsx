import React from 'react';

// css :
import './style/HeroSection.scss';



const HeroSection = ({ title, text, url, logos }) => {
    
    return (
        <section className="hero-section ">
            <video className="background-video" autoPlay muted>
                <source src={url} type="video/mp4" />
            </video>
            <div className="hero-section__content max-width" >
                <div data-aos='fade-in' data-aos-delay='50'>
                    <div><p>{text}</p></div>
                    <div>{title}</div>
                    <div><button className="sign-up-btn">Sign up</button></div>
                    <div className="badge">
                     <img src={logos} alt="" />
                    </div>
                </div>
            </div>

        </section>
    );
};

export default HeroSection;
