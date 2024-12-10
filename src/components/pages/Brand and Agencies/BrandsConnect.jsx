import React from 'react'

// css :
import './style/Brandsconnect.scss'

// Assets | Icons | Logo :
import icon1 from '../../../assets/icons/ico-capture.svg'
import icon2 from '../../../assets/icons/ico-omnichannel.svg'
import icon3 from '../../../assets/icons/ico-cookies.svg'

function BrandsConnect() {
    return (
        <div className='brandconnect'>
            <div className="brandconnect__container max-width">
                <div className='heading' data-aos='fade-up' data-aos-delay='100'> <h2>We help brands connect with consumers <br />when they're most likely to convert.</h2> <p>You help customers discover brands and products they love when and where it matters the most.</p></div>
                <div className='brandconnect__box'>
                    <div className='text' data-aos='fade-up' data-aos-delay='200'><p style={{fontWeight:'700'}}>The current state of online commerce requires brands to answer every customer interaction, no matter how fleeting.</p><p data-aos='fade-up' data-aos-delay='300'>That’s why creating shoppable moments that help streamline the consumer journey from inspiration to purchase is what seamless customer experience is all about.</p></div>
                    <div className="icons">
                        <div className="icon" data-aos='fade-up' data-aos-delay='300'><img src={icon1} alt="" data-aos='fade-in' data-aos-delay='600' /><span>Capturing customers at key touchpoints</span></div>
                        <div className="icon" data-aos='fade-up' data-aos-delay='400'><img src={icon2} alt="" data-aos='fade-in' data-aos-delay='700' /><span>Seamless experience</span></div>
                        <div className="icon" data-aos='fade-up' data-aos-delay='500'><img src={icon3} alt="" data-aos='fade-in' data-aos-delay='800' /> <span>No cookies involved</span></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BrandsConnect