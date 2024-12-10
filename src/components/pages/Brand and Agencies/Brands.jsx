import React from 'react'

// Assets | Icons | Logo :
import nike from '../../../assets/Brands-logo/nike.svg'
import wayfair from '../../../assets/Brands-logo/wayfair.svg'
import walmart from '../../../assets/Brands-logo/walmart.svg'
import samsung from '../../../assets/Brands-logo/samsung.svg'
import adidas from '../../../assets/Brands-logo/adidas.svg'
import target from '../../../assets/Brands-logo/target.svg'
import aboutyou from '../../../assets/Brands-logo/aboutyou.svg'

// css :
import '../../style/Brands.scss'

function Brands() {
    return (
        <div className="brand" data-aos="fade-in" data-aos-delay='100'>
            <div className='brand__container max-width'>
                <div className="brand__logo"><img src={nike} alt="" /></div>
                <div className="brand__logo"><img src={wayfair} alt="" /></div>
                <div className="brand__logo"><img src={walmart} alt="" /></div>
                <div className="brand__logo"><img src={samsung} alt="" /></div>
                <div className="brand__logo"><img src={adidas} alt="" /></div>
                <div className="brand__logo"><img src={target} alt="" /></div>
                <div className="brand__logo"><img src={aboutyou} alt="" /></div>
            </div>


        </div>
    )
}

export default Brands