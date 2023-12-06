import React from 'react'
import Header from '../components/Header'
import Slider from '../components/Slider'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import SearchBar from '../components/SearchBar'
import PopularEvents from '../components/Home/PopularEvents'
import CallToAction from '../components/Home/CallToAction'
import EventsBlock from '../components/Home/EventsBlock'

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
    <EventsBlock/>

    </div>
   
    <Footer/>
    </div>
   
   
    </>
  )
}

export default Home