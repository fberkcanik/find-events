import React from "react";

function SearchBar() {
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="mt-16 w-full h-[220px] flex justify-center items-center sm:w-[90%] z-10 sm:h-24 bg-white sm:border border-red-500 sm:mt-[16px] sm:rounded-md p-2 bg-opacity-90 mx-4 ">
          <div className="flex space-y-2 sm:space-y-0 h-full w-full flex-col sm:flex-row justify-center items-center sm:w-11/12 sm:h-14 bg-gray-100 sm:rounded-lg sm:space-x-1 ">
            <input
              className=" w-full p-2 sm:w-3/4 h-full bg-transparent outline-none text-gray-800 text-sm font-semibold border border-red-400 sm:rounded-s-lg"
              type="text"
              placeholder="mekan, etkinlik, sanatçı ara"
            />
            {/* Mobilde burası gizli */}
            <div className="flex  w-full h-full text-sm text-center">
            <select className="w-full h-full sm:h-full  bg-transparent border border-red-400" id="">
                <option value="">Tüm Kategoriler</option>
                <option value="">Konser</option>
                <option value="">Spor</option>
                <option value="">Sanat</option>

            </select>
            {/* Konum */}
            <select className="w-full h-full bg-transparent border border-red-400" id="">
                <option value="">Tüm Yerlerde</option>
                <option value="">Online</option>
                <option value="">İstanbul</option>
                <option value="">Ankara</option>
                <option value="">İzmir</option>
            </select>

            <select className="w-full h-full bg-transparent border border-red-400 " id="">
                <option value="">Tüm Tarihler</option>
                <option value="">Bugün</option>
                <option value="">Yarın</option>
                <option value="">Bu Hafta</option>
                <option value="">Bu Ay</option>
            </select>
            </div>


           
            <button className="w-full sm:w-1/4 h-full bg-red-500 text-white sm:rounded-e-lg">
              <i className="fas fa-search text-xl"></i>
            </button>
          </div>
        </div>
      </div>
      {/* sliderın üstüne oturan bir arama kutusu */}
    </>
  );
}

export default SearchBar;
