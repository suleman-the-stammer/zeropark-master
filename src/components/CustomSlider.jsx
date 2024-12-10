import React from 'react';

// Swiper Slider :
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

// Assets | Icons | Logos :
import NavigationLogo from '../assets/icons/next-icon.svg'
import arrow from '../assets/banners/arrow@2x.webp'
import slide1 from '../assets/banners/panels@2x.webp'
import slide2 from '../assets/banners/img@2.webp'
import slide3 from '../assets/banners/img@3x.webp'
import slide4 from '../assets/banners/img@4x .webp'
import slide5 from '../assets/banners/img@5x.webp'
import slide6 from '../assets/banners/img@6x.webp'
import slide7 from '../assets/banners/img@7x.webp'
import lines from '../assets/banners/lines2.svg'


// css :
import './style/CustomSlider.scss'; 


const CustomSlider = () => {
  
  return (
    <div className="swiper-container">
      <div className="container  max-width">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: (index, className) => `<span class="${className}"></span>`,
          }}
          spaceBetween={50}
          slidesPerView={1}
        >
          <SwiperSlide>
            <div className="slide-content"  style={{backgroundColor:'unset !important'}}><div className="slid1"><div className="text"><h2>Access Zeeropark <br /> Commerce Media Placement Categgories</h2> <div ><button>Login to panel</button></div></div><div className="banner"><img src={slide1} alt="" data-aos='fade-right' data-aos-delay='100' /> <img src={arrow} alt="" className="arrow" data-aos='fade-right' data-aos-delay='300' /></div></div></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content"><div className="flex"><div className='text'><p>Get an early insights ebook on</p><h2>2024 Consumer Trends & Commerce Media Shopping Journey</h2> <div ><button>Learn more</button></div></div>
              <div className='img-box' data-aos='fade-right' data-aos-delay='200'><img src={slide2} alt="" /></div></div></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content"><div className="flex"><div className='text'><p>DISCOVER OUR INSIDER INSIGHTS ON</p><h2>Black Friday, Cyber Monday &  the Q4 Holiday Shopping Season! 2023 edition</h2><div ><button>Learn more</button></div></div>
              <div className='img-box' data-aos='fade-right' data-aos-delay='200'><img src={slide3} alt="" /></div></div></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content custome"><div className="slide2"><div className="text"><h2>The answer to all your  <br /> Commerce Media question in one place</h2> <div ><button>visit the Zeropark blog</button></div></div><div className="banner" data-aos='fade-right' data-aos-delay='300'><img src={slide4} alt="" /> <img src={lines} alt="" className='lines' /> </div></div></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content"><div className="flex"><div className='text'><h2>Join The Signal newsletter</h2><p>& get the latest updates on...</p><div ><button>Subcribe</button></div></div>
              <div className='img-box' data-aos='fade-right' data-aos-delay='200'><img src={slide5} alt="" /></div></div></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content"><div className="flex"><div className='text'><p>DOWNLOAD YOUR COPY OF</p><h2>2023 Consumer trends</h2><p>& Zeropark's BFCM '22 data report</p><div ><button>Learn more</button></div></div>
              <div className='img-box' data-aos='fade-right' data-aos-delay='200'><img src={slide6} alt="" /></div></div></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content"><div className="flex"><div className='text'><p>STY CONNECTED, INFORMED & INSPIRED</p><h2>Meet the Zeropark team during...</h2><div ><div className="events"><p>📍 Industry events</p><p>🌇 Business conferences</p><p>🌎 Digital marketing shows</p><p>🫱🏻‍🫲🏾 Community meet-ups</p></div><button>see more</button></div></div>
              <div className='img-box' data-aos='fade-right' data-aos-delay='200'><img src={slide7} alt="" /></div></div></div>
          </SwiperSlide>
        </Swiper>
        <div className="swiper-button-prev custom-prev"> <img src={NavigationLogo} alt="" /></div>
        <div className="swiper-button-next custom-next"><img src={NavigationLogo} alt="" /></div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};

export default CustomSlider;
