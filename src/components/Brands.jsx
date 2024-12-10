import React from 'react'

// Assets | Icons | Logo :
import bass from '../assets/Brands-logo/logo-bass.svg'
import otto from '../assets/Brands-logo/logo-otto.svg'
import paramount from '../assets/Brands-logo/logo-paramount.svg'
import ebay from '../assets/Brands-logo/logo-ebay.svg'
import wayfair from '../assets/Brands-logo/logo-wayfair.svg'
import sams from '../assets/Brands-logo/logo-sams.svg'
import macys from '../assets/Brands-logo/logo-macys.svg'

// css :
import './style/Brands.scss'

function Brands() {
    
    return (
        <div className="brand" data-aos="fade-in" data-aos-delay='200'>
            <div className='brand__container max-width'>
                <div className="brand__logo"><img src={bass} alt="" /></div>
                <div className="brand__logo"><img src={otto} alt="" /></div>
                <div className="brand__logo"><img src={paramount} alt="" /></div>
                <div className="brand__logo"><img src={ebay} alt="" /></div>
                <div className="brand__logo"><img src={wayfair} alt="" /></div>
                <div className="brand__logo"><img src={sams} alt="" /></div>
                <div className="brand__logo"><img src={macys} alt="" /></div>
            </div>


        </div>
    )
}

export default Brands