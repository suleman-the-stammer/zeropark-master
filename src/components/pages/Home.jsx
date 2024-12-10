// Home.jsx
import React from 'react'
import { useEffect } from 'react'

// Components :
import Navbar from '../Navbar'
import Brands from '../Brands'
import HeroSection from '../HeroSection'
import ContactUs from '../ContactUs'
import Footer from '../Footer'
import BrandsShowcase from '../BrandsShowCase'
import AffiliateNetworks from '../AffiliateNetworks'
import TransparencyOfDemand from '../TransparencyofDemand'
import CommerceMedia from '../Growth'
import Testimonials from '../Testimonials'
import SliderComponent from '../BussinessBenifits'
import SocialBrand from '../SocialBrand'
import CustomSlider from '../CustomSlider'
import videoBg from '../../assets/file.mp4';
import logo from '../../assets/g2-badge.webp'
import ScrollTop from '../../../Hooks/ScrollTop'

// Reveal Animations
import Aos from "aos";
import 'aos/dist/aos.css';


function Home() {
  ScrollTop();



  return (
    <>

      <HeroSection url={videoBg} title={<h1>Drive incremental <br />  performance <br /> to your brand</h1>} text={"🚀 Cookieless advertising solutions"} logos={logo} />
      <Brands />
      <SocialBrand />
      <CommerceMedia />
      <TransparencyOfDemand />
      <BrandsShowcase />
      <AffiliateNetworks />
      <Testimonials />
      <CustomSlider />
      <SliderComponent />
      <ContactUs />


    </>
  )
}

export default Home