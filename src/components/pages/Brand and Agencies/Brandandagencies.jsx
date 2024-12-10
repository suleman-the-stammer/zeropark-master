import React from 'react'
import { useEffect } from 'react'

// Components
import HeroSection from '../../HeroSection'
import Brands from './Brands'
import BrandsConnect from './BrandsConnect'
import AdvertisingSolution from './AdvertisingSolution'
import HeadOfMedia from './HeadOfMedia'
import BrandAdvertising from './BrandAdvertising'
import CustomSlider from '../../CustomSlider'
import BrandSlider from './BrandSlider'
import ScrollTop from '../../../../Hooks/ScrollTop'

// Assets :
import bgvideo from '../../../assets/file2.mp4'

// Reveal Animations
import Aos from "aos";
import 'aos/dist/aos.css';


function Brandandagencies() {
  ScrollTop();


  return (
    <>
      <HeroSection url={bgvideo} title={<h1>Drive efficient sales <br /> to your brand</h1>} text={"🚀 Commerce media solutions... no cookies involved!"} />
      <Brands />
      <BrandsConnect />
      <AdvertisingSolution />
      <HeadOfMedia />
      <BrandSlider />
      <CustomSlider />
      <BrandAdvertising />
    </>
  )
}

export default Brandandagencies