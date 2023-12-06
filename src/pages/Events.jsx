import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FilterBar from "../components/Events/FilterBar";
import { Link } from "react-router-dom";
import SplashScreen from "../components/Splash";
import axios from "axios";

function Events() {
  const [allEvents, setAllEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    axios
      .get("https://api.fullstacksamurai.online/events")
      .then((response) => {
        setAllEvents(response.data);
      })
      .then(() => {
        setIsLoaded(true);
      });
  }, []);
  return (
    <>
      <Header />
      <div className="h-screen pt-16">
        <div className="w-full  bg-red-500 h-18 sm:h-24 text-white sm:px-24 px-4 py-4 justify-center items-center">
          <h1 className="text-2xl font-bold">Tüm Etkinlikler</h1>
          <p className="text-md">

          </p>
        </div>
        <FilterBar />
        <div className="w-full sm:px-24 py-4">
          <div className="grid sm:grid-cols-4 gap-1 sm:gap-4 grid-cols-1">
            <div className="col-span-1 space-y-2">
              <div className="w-full h-full bg-gray-100 p-3 rounded-md">
                {/* additional filters */}
                Additional filters here
              </div>
            </div>
            <div className="col-span-3 space-y-2 h-full">
              <div className="h-full bg-gray-100 rounded-md p-3 overflow-y-hidden mb-24 sm:mb-0 sm:pb-10">
                <div className="flex flex-wrap h-screen gap-3 overflow-y-scroll">
                  {!isLoaded ? (
                    <SplashScreen />
                  ) : (
                    allEvents.map((event) => (
                      <>
                        <div className="sm:w-full h-44 flex flex-row bg-white rounded-md">
                          <div className="h-44 rounded-t-md">
                            <img
                              src={event.coverImg}
                              alt="event"
                              className="w-auto h-full object-cover rounded-t-md"
                            />
                          </div>
                          <div className="w-full h-16 p-3 rounded-b-md">
                            <h1 className="text-xl font-bold">{event.name}</h1>
                            <p className="text-sm text-gray-500">
                              {event.description}
                            </p>
                            <div className="flex space-x-2">
                              {event.tags.map((tag) => (
                                <span className="text-sm text-gray-500">
                                  <i className="fas fa-tag mr-1"></i>
                                  {tag}
                                </span>
                              ))}
                            </div>
                            <div className="flex space-x-2 h-14 items-end">
                              <i className="fas fa-map-marker-alt text-red-500 text-sm"></i>
                              <p className="text-sm text-gray-500">
                                {event.location}
                              </p>

                              <i className="fas fa-calendar-alt text-red-500 text-sm"></i>
                              <p className="text-sm text-gray-500">
                                {event.date}
                              </p>
                              {/* category */}

                              <p className="text-sm text-gray-500">
                                <i className="fas fa-tag text-red-500 text-sm"></i>
                                {event.category}
                              </p>
                            </div>

                            <div className="w-full flex">
                              <div className="flex w-1/2 justify-start items-center">
                                <p className="text-sm font-bold text-red-500">
                                  {event.price} ₺
                                </p>
                              </div>

                              <div className="flex w-1/2 justify-end my-1">
                                <button className="bg-red-500 text-white rounded-full text-sm mr-2 h-8 w-8 justify-center items-center">
                                  <i className="fas fa-heart"></i>
                                </button>
                                <Link to={`/events/${event.id}`} className="flex bg-red-500 text-white rounded-full text-sm  h-8 w-8 justify-center items-center">
                                  <i className="fas fa-arrow-right"></i>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Events;
