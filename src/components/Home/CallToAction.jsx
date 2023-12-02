import React from 'react'
import { Link } from 'react-router-dom'
function CallToAction() {
  return (
    <>
    {/* Tailwind ile tasarım renklerine uygun basit bir bilet almaya teşvik alanı */}
    <section className="bg-gray-800  px-5 sm:px-24 w-screen py-24 flex justify-center items-center text-bold">
      <div className=" mx-auto px-6 py-20 w-full">
        <h2 className="text-4xl font-bold mb-2 text-white">
          Yakınında olan etkinlikleri kaçırma! 
        </h2>
        <h3 className="text-2xl mb-8 text-gray-200">
            Hemen biletini al ve eğlencenin tadını çıkar!
        </h3>
        <Link to={"/"} className="font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider bg-red-500 text-white hover:bg-white hover:text-red-500">
          Bilet Al
        </Link>
      </div>
        <div className="hidden lg:block lg:w-1/4 p-5 h-[200px]">
            <img
            className='rounded-2xl bg-white bg-opacity-40'
            src="/img/schedule.svg"
            alt=""
            />
            <p className="text-gray-200 text-center mt-5">Yaklaşan etkinliğini hızlıca bul.</p>
        </div> 

        <i className="hidden lg:block fa fa-arrow-right text-white text-5xl"></i>


        <div className="hidden lg:block lg:w-1/4 p-5 h-[200px]">
            <img
            className='rounded-2xl bg-white bg-opacity-40'
            src="/img/select.svg"
            alt=""
            />
            <p className="text-gray-200 text-center mt-5">İstediğin etkinlikte yerini seç.</p>
        </div>
        <i className="hidden lg:block fa fa-arrow-right text-white text-5xl"></i>
        <div className="hidden lg:block lg:w-1/4 p-5 h-[200px]">
            <img
            className='rounded-2xl bg-white bg-opacity-40'
            src="/img/pay.svg"
            alt=""
            />
            <p className="text-gray-200 text-center mt-5">Biletin için güvenle ödeme yap.</p>
        </div>
        <i className="hidden lg:block fa fa-arrow-right text-white text-5xl"></i>
        <div className="hidden lg:block lg:w-1/4 p-5 h-[200px]  ">
            <img
            className='rounded-2xl bg-white bg-opacity-40'
            src="/img/gallery.svg"
            alt=""
            />
            <p className="text-gray-200 text-center mt-5">Ve, hazırız!</p>
        </div>
    </section>
    </>
  )
}

export default CallToAction