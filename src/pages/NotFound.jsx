import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <Header />
      <div className="h-screen">
        <div className="flex flex-col justify-center items-center h-full text-center">
          <h1 className="text-3xl font-bold text-gray-700">404</h1>
          <p className="text-gray-500">Aradığınız sayfa bulunamadı. Lütfen tekrar deneyin.</p>
          <Link to={'/'} className="bg-red-500 text-white px-4 py-2 rounded-md mt-5"><i className="fas fa-arrow-left"></i> Anasayfaya Dön</Link>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default NotFound;
