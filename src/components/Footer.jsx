import React from "react";
import MenuItems from "./MenuItems";
import FooterButtons from "./FooterButtons";
import SocialButtons from "./SocialButtons";
function Footer() {
  return (
    <>
      <div className="bottom-0 h-16 fixed bg-red-500 w-full sm:hidden z-20">
        {/* Mobil menü icons */}
        <div className="flex flex-row justify-around items-center h-full">
          <div className="flex flex-col items-center justify-center">
            <i className="fas fa-home text-white text-2xl"></i>
            <p className="text-white text-xs">Anasayfa</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <i className="fas fa-search text-white text-2xl"></i>
            <p className="text-white text-xs">Ara</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <i className="fas fa-plus text-white text-2xl"></i>
            <p className="text-white text-xs">Etkinlik Ekle</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <i className="fas fa-user text-white text-2xl"></i>
            <p className="text-white text-xs">Profil</p>
          </div>
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
