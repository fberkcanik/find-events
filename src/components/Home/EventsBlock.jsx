import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function EventsBlock(eventType) {
 const events = [];
  return (
    <>
      <div className="flex flex-row mb-5 mt-5 sm:px-24 px-5 justify-between items-center ">
        <h1 className="text-3xl font-bold">eventType Etkinlikler</h1>
        {/* link to all */}
        <Link to={"/"} className="text-sm font-semibold text-red-500">
          {" "}
          Tümünü Gör
          <i className="fas fa-arrow-right mx-1"></i>
        </Link>
      </div>
      <div className="w-[100%] flex justify-center px-5 sm:px-24 mb-10">
        {/* Manual card responsive */}
        <div className="flex flex-col sm:flex-row justify-center md:flex-col lg:flex-row items-center space-y-5 sm:space-y-0 sm:space-x-5 w-full">
          {events.slice(0, 5).map((event) => (
            <div className="w-full sm:w-[300px] h-[300px] sm:h-[250px] md:w-full bg-white rounded-md shadow-md flex flex-col justify-center items-center">
              <img
                className="w-full h-[200px] sm:h-[150px] object-cover rounded-md"
                src={event.coverImg}
                alt=""
              />
              <div className="flex flex-col justify-center items-center w-full h-full">
                <h1 className="text-sm font-semibold text-gray-800">
                  {event.name}
                </h1>
                {/* Desc, location with icon, time with icon */}
                <p className="text-xs text-gray-500">{event.description}</p>
                <div className="flex w-full flex-col m-2 justify-between sm:flex-row sm:justify-around">
                  <p className="text-xs text-gray-500">
                    <i className="fas fa-map-marker-alt mx-2 text-red-500"></i>
                    {event.location}
                  </p>
                  <p className="text-xs text-gray-500">
                    <i className="fas fa-clock mx-2 text-red-500"></i>
                    {event.date}
                  </p>
                </div>
             
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default EventsBlock;
