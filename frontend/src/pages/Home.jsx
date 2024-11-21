import React from 'react'
import Hero from '../components/Hero'
import Intro from '../components/Intro'
import DiscoverMenu from '../components/DiscoverMenu'
import FeaturedProducts from '../components/FeaturedProducts'
import Question from '../components/Question'
import Reviews from './../components/Reviews';




const Home = () => {
  return (
    <div>
      <Hero /> 
      <Intro /> 
      <DiscoverMenu />
      <FeaturedProducts />
      <Question />
      <Reviews />
    </div>
  )
}

export default Home