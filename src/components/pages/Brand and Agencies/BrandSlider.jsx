import React from 'react';

// Swiper Slider :
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';

// css :
import './style/BrandSlider.scss'

// Assets | Icons | Logo :
import slide1 from '../../../assets/BrandSlider/slide-media-services@2x.webp'
import slide2 from '../../../assets/BrandSlider/slide-proprietary-tech@2x.webp'
import slide3 from '../../../assets/BrandSlider/slide-future-proof-solutions@2x.webp'
import slide4 from '../../../assets/BrandSlider/slide-expertise@2x.webp'
import slide5 from '../../../assets/BrandSlider/slide-real-time-reporting@2x.webp'
import slide6 from '../../../assets/BrandSlider/slide-brand-safety@2x.webp'

const BrandSlider = () => {
  return (
    <div style={{ width: '100%', position: 'relative', marginBottom: '7rem' }}>
      <div className="slide__container ">
        <div className="heading max-width " data-aos='fade-up'>
          <h2>Inspired by change. <br /> Powered by technology.</h2>
          <h3>Zeropark offers much more than just clicks.</h3>
        </div>
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          direction="horizontal"
          slidesPerView={3.5}
          spaceBetween={30}
          loop={true}
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 1.2,
              spaceBetween: 20,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 1.5,
              spaceBetween: 25,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2.5,
              spaceBetween: 30,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 3.5,
              spaceBetween: 30,
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div style={styles.slide} data-aos='fade-up' data-aos-delay='100'>
              <img src={slide1} alt="Icon 1" style={styles.icon} />
              <div style={styles.text}><h3>360° media <br /> services</h3>
                <p>From dedicated campaign management teams, through data reporting, budget optimization, media planning, and traffic compliance monitoring  — we provide our clients with a full range of services that best suit your business needs.</p></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={styles.slide} data-aos='fade-up' data-aos-delay='200'>
              <img src={slide2} alt="Icon 2" style={styles.icon} />
              <div style={styles.text}><h3>Proprietary <br /> technology</h3>
                <p>Zeropark ensures that our partners can benefit from sustainable growth opportunities with cookieless engagements that brands and agencies can rely on when designing long-term omnichannel marketing strategies.</p></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={styles.slide} data-aos='fade-up' data-aos-delay='300'>
              <img src={slide3} alt="Icon 3" style={styles.icon} />
              <div style={styles.text}><h3>Future-proof <br /> solutions</h3>
                <p>Zeropark ensures that our partners can benefit from sustainable growth opportunities with cookieless engagements that brands and agencies can rely on when designing long-term omnichannel marketing strategies.</p></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={styles.slide} data-aos='fade-up' data-aos-delay='400'>
              <img src={slide4} alt="Icon 4" style={styles.icon} />
              <div style={styles.text}><h3>Ad tech <br /> expertise</h3>
                <p>The Zeropark team, a proud member of the Team Internet Group, comprises ad tech experts with 20+ years of experience in the industry. We’re here to help your brand deliver against advertising benchmarks so that you can focus on scaling your business.</p></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={styles.slide} data-aos='fade-up' data-aos-delay='500'>
              <img src={slide5} alt="Icon 5" style={styles.icon} />
              <div style={styles.text}><h3>Brand safety and <br /> transparency</h3>
                <p>Our solutions do not rely on 3rd party cookies. Zeropark partners have full control over how and where their brand is featured, while dedicated teams continuously monitor traffic quality to ensure our supply comes from trusted sources only.</p></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={styles.slide} data-aos='fade-up' data-aos-delay='600'>
              <img src={slide6} alt="Icon 6" style={styles.icon} />
              <div style={styles.text}><h3>Real-Time  <br /> Reporting</h3>
                <p>Benefit from access to real-time data and robust reporting capabilities tailored to your brand’s needs. Our in-house tracking solution lets brands power their campaigns with automated optimization and deliver against ROAS with no cookies involved.</p></div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="button">
          <div className="swiper-button-next custom-next"></div>
          <div className="swiper-button-prev custom-prev"></div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  slide: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    borderRadius: '10px',
    height: '650px'
  },
  icon: {
    marginBottom: '20px',
  },
  text: {
    padding: '12px',
    fontSize: '1.125rem',
    lineHeight: '1.75rem'
  }
};

export default BrandSlider;
