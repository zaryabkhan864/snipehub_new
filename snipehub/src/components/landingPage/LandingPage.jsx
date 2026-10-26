import React from 'react'
import Banner from './landingPageComponents/Banner'
import BottomBanner from './landingPageComponents/BottomBanner'
import Footer from './landingPageComponents/Footer'
import MarketOverview from './landingPageComponents/MarketOverview'
import Navbar from './landingPageComponents/Navbar'
import OurFeatures from './landingPageComponents/OurFeatures'
import PortfolioTracking from './landingPageComponents/PortfolioTracking'
import SupportedNFTS from './landingPageComponents/SupportedNFTS'
import TopCollection from './landingPageComponents/TopCollection'

const LandingPage = () => {
  return (
    <React.Fragment>

      <Navbar/>
      <Banner/>
      <SupportedNFTS/>
      <PortfolioTracking/>
      <MarketOverview/>
      <OurFeatures/>
      <TopCollection/>
      <BottomBanner/>
      <Footer/>

      
    </React.Fragment>
  )
}

export default LandingPage