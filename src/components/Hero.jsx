import React from "react";

function Hero() {
  return (
    <>
      <div className="bg-gray-100 sm:my-[-56px] pt-10 sm:mb-8 ">
        <div className="dark:bg-transparent">
          <div className="mx-auto flex flex-col items-center py-12 sm:py-24">
            <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col mb-5 sm:mb-10">
              <h1 className="text-4xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center text-gray-800   font-black leading-10">
                En heyecan verici
                <span className="text-red-500"> etkinlikleri </span>
                keşfet ve unutulmaz anılar biriktir!
              </h1>
              <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-600  font-normal text-center text-xl">
                FindEvents ile hayatınızı renklendirmek artık çok daha kolay.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-10 mx-10">
              <div className="flex flex-col items-center justify-center space-y-2">
                <i className="fas fa-search text-red-500 text-3xl"></i>
                <h1 className="text-gray-800 font-bold text-xl">
                  Etkinlik Ara
                </h1>
                <p className="text-gray-600 text-center">
                  Türkiye'deki en güncel etkinlikleri ara.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2">
                <i className="fas fa-plus text-red-500 text-3xl"></i>
                <h1 className="text-gray-800 font-bold text-xl">
                  Etkinlik Ekle
                </h1>
                <p className="text-gray-600 text-center">
                  Kendi etkinliğini oluştur ve insanlara duyur.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2">
                <i className="fas fa-calendar-alt text-red-500 text-3xl"></i>
                <h1 className="text-gray-800 font-bold text-xl">
                  Etkinlik Takvimi
                </h1>
                <p className="text-gray-600 text-center">
                  Etkinliklerini takip et ve kaçırma.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2">
                <i className="fas fa-user text-red-500 text-3xl"></i>
                <h1 className="text-gray-800 font-bold text-xl">Profilin</h1>
                <p className="text-gray-600 text-center">
                  Profilini oluştur ve etkinliklerini yönet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
