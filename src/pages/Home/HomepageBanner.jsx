import React from 'react'
import {Banner, H1} from './style';
import BannerImage from '../../assets/images/banner.png';

const HomepageBanner = () => {
  return (
    <Banner>
      <img src={BannerImage} alt="banner" />
      <H1>Time is money, money is time</H1>
    </Banner>
  )
}

export default HomepageBanner
