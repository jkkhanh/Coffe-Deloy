import React from 'react'
import Hero from '../components/Hero'
import Intro from '../components/Intro'
import DiscoverMenu from '../components/DiscoverMenu'
import FeaturedProducts from '../components/FeaturedProducts'
import Question from '../components/Question'




const Home = () => {
  return (
    <div>
      <Hero /> 
      <Intro /> 
      <DiscoverMenu />
      <FeaturedProducts />
      <Question />
    </div>
  )
}

export default Home