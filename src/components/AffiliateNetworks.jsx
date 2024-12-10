import React from 'react';

// Assets | logo | Icons :
import Awin from '../assets/Brands-logo/logo-awin.svg'
import Amitad from '../assets/Brands-logo/logo-amitad.svg'
import Impact from '../assets/Brands-logo/logo-impact.svg'
import Rakuten from '../assets/Brands-logo/logo-rakuten.svg'
import Avantlink from '../assets/Brands-logo/logo-avantlink.svg'
import Andmore from '../assets/Brands-logo/logo-andmore.svg'

// css :
import './style/AffiliateNetworks.scss';


const AffiliateNetworks = () => {
    
    return (
        <div className="affiliate-networks">
            <div className="affiliate-networks-container max-width">
                <h1 data-aos='fade-up' data-aos-delay='100'>Partnering up with Affiliate Networks</h1>
                <p data-aos='fade-up' data-aos-delay='200'>
                    Benefit from Zeropark Commerce Media lasting partnerships with globally trusted affiliate <br /> networks that mean:
                </p>
                <button className="signup-button btn" data-aos='fade-up' data-aos-delay='300'>Sign up</button>
                <div className="benefits" data-aos='slide-right' data-aos-delay='100'>
                    <div className="benefit">
                        <i className="icon icon-performance"></i>
                        <p> <strong>Unparalleled performance</strong> <span>for brand representatives, media buyers and affiliate marketers</span> </p>
                    </div>
                    <div className="vertical-line"></div>
                    <div className="benefit">
                        <i className="icon icon-freedom"></i>
                        <p> <strong>Full freedom</strong> <span>of placement configuration in your campaigns</span> </p>
                    </div>
                    <div className="vertical-line"></div>
                    <div className="benefit">
                        <i className="icon icon-teams"></i>
                        <p> <strong>Experienced teams</strong> <span>ready to support your advertising ventures</span></p>
                    </div>
                </div>
                <div className="networks" >
                    <div className="network" data-aos='fade-up' data-aos-delay='100'><img src={Awin} alt="" /></div>
                    <div className="network" data-aos='fade-up' data-aos-delay='200'><img src={Amitad} alt="" /></div>
                    <div className="network" data-aos='fade-up' data-aos-delay='300'><img src={Impact} alt="" /></div>
                    <div className="network" data-aos='fade-up' data-aos-delay='400'><img src={Rakuten} alt="" /></div>
                    <div className="network" data-aos='fade-up' data-aos-delay='500'><img src={Avantlink} alt="" /></div>
                    <div className="network" data-aos='fade-up' data-aos-delay='600'><img style={{ filter: 'grayscale(1) invert(1)' }} src={Andmore} alt="" /></div>
                </div>
            </div>
        </div>
    );
}

export default AffiliateNetworks;
