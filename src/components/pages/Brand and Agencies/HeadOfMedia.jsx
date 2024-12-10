import React from 'react'

// Ant Design :
import { Rate } from 'antd'

// css :
import './style/HeadOfMedia.scss'

// Assets | Icons | Logo :
import Avatar from '../../../assets/avatar-amit.webp'


function HeadOfMedia() {
  return (
    <div className='headofmedia'>
      <div className="headofmedia__container max-width">
        <div className="headofmedia__box">
          <div className='avatar' data-aos='fade-up'><img src={Avatar} alt="" /><span>Amit Liss</span></div>
          <div data-aos='fade-up' data-aos-delay='200'><p>Head of Media at Intango</p></div>
          <div data-aos='fade-up'  data-aos-delay='300'><Rate defaultValue={5} disabled style={{ color: '#47fac6' }} /></div>
          <div data-aos='fade-up'  data-aos-delay='400'><p>“Zeropark has proven to be an outstanding solution for driving sales, even against our demanding performance benchmarks. We are continuously able to achieve impressive conversion rates and most importantly, a scalable ROAS.”</p></div>
        </div>
      </div>
    </div>
  )
}

export default HeadOfMedia