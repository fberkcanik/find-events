import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
 



function Events() {
 
  return (
    <>
      <Header />
      <div className="h-screen pt-16">
        <div className="w-full  bg-red-500 h-18 sm:h-24 text-white sm:px-24 px-4 py-4 justify-center items-center">
          <h1 className="text-2xl font-bold">Tüm Etkinlikler</h1>
          <p className="text-md">{'searchQuery1, searchQuery2, searchQuery3'}</p>
        </div>
        
        </div>

      <Footer />
    </>
  );
}

export default Events;
