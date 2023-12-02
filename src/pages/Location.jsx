import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "mapbox-gl/dist/mapbox-gl.css";

import Map, { MapProvider, Marker, GeolocateControl,NavigationControl, useMap } from "react-map-gl";



function Locations() {
 
  return (
    <>
      <Header />
      <div className="h-screen pt-16">
        {/* map const render */}
        <MapProvider>
        <Map  
          mapboxAccessToken="pk.eyJ1IjoiZmJlcmtjYW5payIsImEiOiJjbHBpbW5tdXcwMHpsMmlvN29ncG1vOGloIn0.ul3j49flDp0cZggyLtagiA"
          initialViewState={{
            longitude: 28.97953,
            latitude: 41.015137,
            zoom: 12,
          }}
          className="w-full h-full"
          mapStyle="mapbox://styles/mapbox/navigation-day-v1"
        >
           
          <Marker latitude={40.989386} longitude={29.0313386}>
            <div className="bg-red-500 w-12 h-12 rounded-full flex justify-center items-center">
              <i className="fas fa-map-marker-alt text-white text-2xl"></i>
             
            </div>
          </Marker>
          <Marker   latitude={41.015137} longitude={28.97953}>
            <div className="bg-red-500 w-12 h-12 rounded-full flex justify-center items-center">
              <i className="fas fa-map-marker-alt text-white text-2xl"></i>
            </div>
          </Marker>
          <GeolocateControl/>
          <NavigationControl />
         
        </Map>
        </MapProvider>
      </div>
      <Footer />
    </>
  );
}

export default Locations;
