import React from 'react';

// React Slick Slider :
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Assets | Logo | Icons :
import icon1 from '../assets/icons/ico-1.svg'
import icon2 from '../assets/icons/ico-2.svg'
import icon3 from '../assets/icons/ico-3.svg'
import icon4 from '../assets/icons/ico-4.svg'
import icon5 from '../assets/icons/ico-5.svg'
import icon6 from '../assets/icons/ico-6.svg'
import icon7 from '../assets/icons/ico-7.svg'
import icon8 from '../assets/icons/ico-8.svg'
import icon9 from '../assets/icons/ico-9.svg'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

// css :
import './style/BussinessBenifits.scss'


const Card = ({ icon, title, description }) => {
    return (
        <div className="card">
            <div className="icon">{icon}</div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, top: '0%', right: '0%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            onClick={onClick}
        >
            <FaArrowRight size={30} color='#000' />

        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, top: '0%', right: '4%', left: 'unset', zIndex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            onClick={onClick}
        >

            <FaArrowLeft size={30} color='#000' />
        </div>
    );
}


const SliderComponent = () => {
    
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,

        responsive: [
            {

                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,

                },
            },
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="slider">
            <div className="slider__container max-width">
                <h2 data-aos='fade-up' data-aos-delay='100'>Partner with Zeropark and let your business benefit from</h2>
                <Slider {...settings}>

                    <Card
                        icon={<img src={icon1} />}
                        title="User Privacy"
                        description="We don't collect user data or use third-party cookie tracking."
                        data-aos='fade-up'
                        data-aos-delay='100'
                    />

                    <Card
                        icon={<img src={icon2} />}
                        title="Brand Safety"
                        description="Full control over audience interactions with your brand or platform."
                        data-aos='fade-up'
                        data-aos-delay='200'
                    />
                    <Card
                        icon={<img src={icon3} />}
                        title="Compliance Monitoring"
                        description="In-house team monitoring of supply quality and working with trusted partners."
                        data-aos='fade-up'
                        data-aos-delay='300'
                    />
                    <Card
                        icon={<img src={icon4} />}
                        title="Self-serve Platform"
                        description="A powerful management platform at your fingertips."
                    />
                    <Card
                        icon={<img src={icon5} />}
                        title="
                        Robust reporting"
                        description="
                        We provide state-of-the-art reporting tools and capabilities."
                    />
                    <Card
                        icon={<img src={icon6} />}
                        title="
                        Data transparency"
                        description="
                        Our partners have full control over their campaigns' performance."
                    />
                    <Card
                        icon={<img src={icon7} />}
                        title="
                        Budget management"
                        description="
                        Our ad tech experts are here to help your brand deliver against advertising benchmarks."
                    />
                    <Card
                        icon={<img src={icon8} />}
                        title="
                        Media Planning"
                        description="
                        Our ad tech experts are here to help your brand deliver against advertising benchmarks."
                    />
                    <Card
                        icon={<img src={icon9} />}
                        title="Bespoke Support"
                        description="Every business is different, that’s why we offer tailored solutions depending on your needs."
                    />
                </Slider>
            </div>
        </div>
    );
};

export default SliderComponent;
