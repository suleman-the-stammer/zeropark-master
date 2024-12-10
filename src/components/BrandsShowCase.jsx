import React from 'react';

// Assets | logo |Icons :
import VivintLogo from '../assets/Brands-logo/vivint-logo.svg';
import BassProShopsLogo from '../assets/Brands-logo/logo-bass.svg';
import CabelasLogo from '../assets/Brands-logo/logo-cabelas.svg';
import OttoLogo from '../assets/Brands-logo/logo-otto.svg';
import ParamountLogo from '../assets/Brands-logo/logo-paramount.svg';
import ScheelsLogo from '../assets/Brands-logo/logo-scheels.svg';
import LGLogo from '../assets/Brands-logo/logo-lg.svg';
import eBayLogo from '../assets/Brands-logo/logo-ebay.svg';
import KlarnaLogo from '../assets/Brands-logo/logo-klarna.svg';
import MSNLogo from '../assets/Brands-logo/logo-msn.svg';
import OperaLogo from '../assets/Brands-logo/logo-opera.svg';
import HuaweiLogo from '../assets/Brands-logo/logo-huawei.svg';
import YahooMailLogo from '../assets/Brands-logo/logo-yahoomail.svg';
import ZipLogo from '../assets/Brands-logo/logo-zip.svg';
import AfterpayLogo from '../assets/Brands-logo/logo-afterpay.svg';
import ForbesLogo from '../assets/Brands-logo/logo-forbes.svg';
import wirecutterlogo from '../assets/Brands-logo/logo-wirecutter.svg';
import andmorelogo from '../assets/Brands-logo/logo-andmore.svg';

// css :
import './style/BrandsShowCase.scss';

const BrandsShowcase = () => {
  
  const demandPartners = [
    { name: 'Vivint', logo: VivintLogo },
    { name: 'Bass Pro Shops', logo: BassProShopsLogo },
    { name: 'Cabelas', logo: CabelasLogo },
    { name: 'OTTO', logo: OttoLogo },
    { name: 'Paramount+', logo: ParamountLogo },
    { name: 'Scheels', logo: ScheelsLogo },
    { name: 'LG', logo: LGLogo },
    { name: 'eBay', logo: eBayLogo },
  ];

  const publishingPartners = [
    { name: 'Klarna', logo: KlarnaLogo },
    { name: 'MSN', logo: MSNLogo },
    { name: 'Opera', logo: OperaLogo },
    { name: 'Huawei', logo: HuaweiLogo },
    { name: 'Yahoo Mail', logo: YahooMailLogo },
    { name: 'Zip', logo: ZipLogo },
    { name: 'Afterpay', logo: AfterpayLogo },
    { name: 'Forbes', logo: ForbesLogo },
    { name: 'Wire Cutter', logo: wirecutterlogo },
    { name: 'And Many More', logo: andmorelogo },
  ];

  return (
    <div className="brands-showcase">
      <div className="brand-container max-width">
        <div className="brand-heading">
          <h2 data-aos='fade-up' data-aos-delay='100'>Brands who trust <br /> us already</h2>
          <p data-aos='fade-up' data-aos-delay='300'>See what brands trust our team to deliver beyond their expectations.</p>
        </div>
        <hr />

        <div className="partners-section">
          <h3 data-aos="fade-in" data-aos-delay='100'>Demand partners</h3>
          <div className="partners">
            {demandPartners.map((partner, index) => (
              <div className="partner" key={index} data-aos='fade-right' data-aos-delay='300'>
                <img src={partner.logo} alt={partner.name} />
              </div>
            ))}
          </div>
        </div>

        <hr />
        <div className="partners-section">
          <h3 data-aos="fade-in" data-aos-delay='100'>Publishing partners</h3>
          <div className="partners">
            {publishingPartners.map((partner, index) => (
              <div className="partner" key={index} data-aos='fade-right' data-aos-delay='500'>
                <img src={partner.logo} alt={partner.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandsShowcase;
