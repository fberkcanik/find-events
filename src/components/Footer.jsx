import React, {useContext, useState} from "react";
import MenuItems from "./MenuItems";
import FooterButtons from "./FooterButtons";
import SocialButtons from "./SocialButtons";
import { Link } from "react-router-dom";
import { FavContext } from "../context/FavoriteContext";

function Footer() {
  const [favs, setFavs] = useContext(FavContext);
  return (
    <>
      <div className="bottom-0 h-16 fixed bg-red-500 w-full sm:hidden z-20">
        {/* Mobil menü icons */}
        <div className="flex flex-row justify-around items-center h-full">
          <Link to={'/'} className="flex flex-col items-center justify-center">
            <i className="fas fa-home text-white text-2xl"></i>
            <p className="text-white text-xs">Anasayfa</p>
          </Link>
          <Link to={'/events'} className="flex flex-col items-center justify-center">
            <i className="fas fa-ticket text-white text-2xl"></i>
            <p className="text-white text-xs">Etkinlikler</p>
          </Link>
          <Link to={'locations'} className="flex flex-col items-center justify-center">
            <i className="fas fa-location text-white text-2xl"></i>
            <p className="text-white text-xs">Lokasyonlar</p>
          </Link>
          <Link to={'/favorites'} className="flex flex-col items-center justify-center">
            <i className="fas fa-heart text-white text-2xl"></i>
            <p className="text-white text-xs">Favorilerim ({favs.length}) </p>
          </Link>
        </div>
      </div>
      <div className="hidden sm:flex z-50">
        <div className="flex flex-row items-center justify-center w-full h-20 bg-red-500">
          <h1 className="text-2xl font-bold bg-transparent flex flex-col text-white">
            findEvents
            <small className="text-xs font-extralight">Aradığın eğlence.</small>
          </h1>

          {/* border */}
          <div className="h-10 w-px bg-white mx-5"></div>
          <ul className="flex flex-row space-x-2">
            <MenuItems />
          </ul>
          <div className="h-10 w-px bg-white mx-5"></div>
          <FooterButtons />
          <div className="h-10 w-px bg-white mx-5"></div>
            <div className="flex flex-row items-center justify-center space-x-10">
            <SocialButtons />
            </div>
        </div>
      </div>

      {/* Footer Elements */}
    </>
  );
}

export default Footer;
