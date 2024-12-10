import React from 'react'

// css :
import './style/BrandAdvertising.scss'

// Assets | Icons | Logo :
import icon1 from '../../../assets/icons/icon-deliver.svg'
import icon2 from '../../../assets/icons/icon-drive2.svg'
import icon3 from '../../../assets/icons/icon-unlock.svg'
import icon4 from '../../../assets/icons/icon-benefit.svg'

function BrandAdvertising() {
    return (
        <div className='BrandAdvertising'>
            <div className="BrandAdvertising__container max-width">
                <div className="BrandAdvertising__box">
                    <div className='text'>
                        <h2 data-aos='fade-up'>Future-proof your brand advertising with Zeropark</h2>
                        <button data-aos='fade-up' data-aos-delay='200'>Sign up</button>
                    </div>
                    <div className='icons'>
                        <div className='icon' data-aos='fade-up' data-aos-delay='100'><img src={icon1} alt="" /><div><strong>Drive incremental and efficient performance</strong><br /><span>by targeting real, high-intent shoppers at key moments of the modern customer journey.</span></div> </div>


                        <div className='icon' data-aos='fade-up' data-aos-delay='200'><img src={icon2} alt="" /><div><strong>Unlock new streams of customers</strong><br /><span>by creating shoppable moments that engage people on the platforms they go to.</span></div> </div>


                        <div className='icon' data-aos='fade-up' data-aos-delay='300'><img src={icon3} alt="" /> <div><strong>Deliver scalable and sustainable growth</strong><br /><span>to your brand with future-proof and cookieless commerce media solutions.</span></div></div>


                        <div className='icon' data-aos='fade-up' data-aos-delay='400'><img src={icon4} alt="" /> <div><strong>Benefit from full data transparency and brand safety</strong><br /><span>by working with premium publishing partners and robust reporting.</span></div></div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default BrandAdvertising