import React from 'react';

// css :
import '../../style/TransparencyOfDemand.scss';

// Assets | Icons | Logo :
import discover from '../../../assets/banners/discover-img2.webp'

const AdvertisingSolution = () => {
  return (
    <div className="transparency-section">
      <div className="transparency-container max-width">


        <div className="content" style={{ paddingLeft: 'unset' }} data-aos='slide-right'>

          <h2>Discover incremental advertising solutions.</h2>
          <p>
            With visitors evolving into buyers within seconds, major search engines are no longer the default starting point for customer journeys. It’s the micro-moments that reshape how people shop.
          </p>
          <p>
            And while we’re all looking to do things easier, faster, and better, Zeropark answers the changing needs of brands, retailers, and shoppers.
          </p>
          <button>Contact us</button>

        </div>
        <div className="image-container" style={{ gridRowStart: 'unset !important', gridColumnStart: '7' }} data-aos='fade-left'>
          <img src={discover} alt="Transparency" />
        </div>
       </div>
    </div>
  );
}

export default AdvertisingSolution;
