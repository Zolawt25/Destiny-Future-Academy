import React from 'react'
import Hero from '../components/Hero'
import Overview from '../components/Overview'
import Expireance from '../components/Expireance'
import Footer from '../components/Footer'
import NewsAndEvents from '../components/NewsAndEvents'







const HomePage = () => {
  return (
    <div>
      <Hero/>
      <br /><br /><br/>
      <Overview/>
      <br /><br /><br />
      <NewsAndEvents/>
      <br /><br /><br />
      <Expireance/>
      <br /><br />
      <Footer/>
    </div>
  )
}

export default HomePage
