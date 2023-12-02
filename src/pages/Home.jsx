import React from 'react'
import Header from '../components/Header'
import Slider from '../components/Slider'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import SearchBar from '../components/SearchBar'
import PopularEvents from '../components/Home/PopularEvents'
import CategoryRenderer from '../components/Home/CategoryRenderer'
import CallToAction from '../components/Home/CallToAction'

function Home() {
  return (
    <>
    <Header/>
    <div className="h-screen">
     
    <Slider/>
    <SearchBar/>
    <Hero/>
    <PopularEvents/>
    <div className="container">
    <CallToAction/>
    </div>
   
    <Footer/>
    </div>
   
   
    </>
  )
}

export default Home