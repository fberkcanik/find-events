import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "mapbox-gl/dist/mapbox-gl.css";

import Map, {
  MapProvider,
  Marker,
  GeolocateControl,
  NavigationControl,
  useMap,
  Popup,
} from "react-map-gl";

function Locations() {
  /* show info popup */
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <Header />
      <div className="h-screen pt-16">
        <div className="w-full  bg-red-500 h-18 sm:h-24 text-white sm:px-24 px-4 py-4 justify-center items-center">
          <h1 className="text-2xl font-bold">Konumlara Göre Etkinlikler</h1>
          <p className="text-md">Özgürce arayın.</p>
        </div>
        {/* Info about searching on the map filter */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-10 my-4">
          <div className="flex flex-col justify-center items-center">
            <i className="fas fa-map-marker-alt text-red-500 text-2xl"></i>
            {/* Search query for free city input */}
            <input
              type="text"
              className="border-2 border-gray-300 rounded-lg p-1 w-full px-3 sm:w-48"
              placeholder="Örn: İstanbul"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <i className="fas fa-calendar-alt text-red-500 text-2xl"></i>

            {/* Date Range Picker */}
            <input
              type="date"
              className="border-2 border-gray-300 rounded-lg p-1 w-full sm:w-48"
            />
          </div>

          <div className="flex flex-row space-x-6 justify-center items-center border bg-red-500 text-white w-[90%] sm:w-48 sm:p-3 rounded-md font-bold py-3">
            <i className="fas fa-search mx-2 text-2xl"></i>
            Arama Yap
          </div>
        </div>
        <MapProvider>
          <Map
            mapboxAccessToken="pk.eyJ1IjoiZmJlcmtjYW5payIsImEiOiJjbHBpbW5tdXcwMHpsMmlvN29ncG1vOGloIn0.ul3j49flDp0cZggyLtagiA"
            initialViewState={{
              longitude: 28.97953,
              latitude: 41.015137,
              zoom: 11,
            }}
            className="w-full h-full"
            mapStyle="mapbox://styles/mapbox/light-v9"
          >
            <Marker
              latitude={40.989386}
              longitude={29.0313386}
              onClick={() => setShowPopup(true)}
            >
              <div className="bg-red-500 w-12 h-12 rounded-full flex justify-center items-center">
                {showPopup && (
                  <Popup
                    latitude={40.989386}
                    longitude={29.0313386}
                    closeButton={true}
                    closeOnClick={false}
                    anchor="top"
                    onClose={() => setShowPopup(false)}
                  >
                    <div className="flex flex-col justify-center items-center">
                      <p className="text-xs font-bold">Beykoz Sahili</p>
                      <p className="text-xs font-light">İstanbul</p>
                    </div>
                  </Popup>
                )}
                <i className="fas fa-map-marker-alt text-white text-2xl"></i>
              </div>
            </Marker>
            <Marker latitude={41.015137} longitude={28.97953}>
              <div className="bg-red-500 w-12 h-12 rounded-full flex justify-center items-center">
                <i className="fas fa-map-marker-alt text-white text-2xl"></i>
              </div>
            </Marker>
            <GeolocateControl />
            <NavigationControl />
          </Map>
        </MapProvider>
      </div>
      <Footer />
    </>
  );
}

export default Locations;
