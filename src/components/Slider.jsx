import { useEffect, useState } from "react";
import Splash from "./Splash";
import axios from "axios";


function Slider() {
   const [slider, setslider] = useState([])
   
   useEffect(() => {
    axios.get("https://api.fullstacksamurai.online/events").then((res) => {

      setslider(res.data);
    }
    );
  }, [])
  const [current, setCurrent] = useState(0);
  const length = slider.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  setTimeout(nextSlide, 7000);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading ? (
        <>
         <Splash />
        </>
      ) : null}
      <div className="relative h-1/3 sm:h-4/6 z-10 top-14">
        <div className="flex flex-row h-full w-screen">
          {slider.map((slide, index) => {
            return (
              <div
                className={index === current ? "slide active" : "slide"}
                key={index}
              >
                {index === current && (
                  <img
                    onLoad={() => setIsLoading(false)}
                    src={slide.sliderImg}
                    alt="slider"
                    className="h-full w-screen object-fill aspect-auto opacity-80"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Slider;
