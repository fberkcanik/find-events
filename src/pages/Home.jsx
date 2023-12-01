import React from 'react'
import Header from '../components/Header'
import Slider from '../components/Slider'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import SearchBar from '../components/SearchBar'
import PopularEvents from '../components/Home/PopularEvents'

function Home() {
  return (
    <>
    <Header/>
    <div className="h-screen">
     
    <Slider/>
    <SearchBar/>
    <Hero/>
    <PopularEvents/>
    <Footer/>
    </div>
   
   
    </>
  )
}

export default Home