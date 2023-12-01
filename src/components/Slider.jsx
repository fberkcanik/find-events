import {useState} from "react";

function Slider() {

    const  slider = [
        {
            id: 1,
            title: "Slider 1",
            desc: "Slider 1 Description",
            img: "https://picsum.photos/1200/400?random=1"
        },
        {
            id: 2,
            title: "Slider 2",
            desc: "Slider 2 Description",
            img: "https://picsum.photos/1200/400?random=2"
        },
        {
            id: 3,
            title: "Slider 3",
            desc: "Slider 3 Description",
            img: "https://picsum.photos/1200/400?random=3"
        },
        {
            id: 4,
            title: "Slider 4",
            desc: "Slider 4 Description",
            img: "https://picsum.photos/1200/400"
        },
        {
            id: 5,
            title: "Slider 5",
            desc: "Slider 5 Description",
            img: "https://picsum.photos/1200/400"
        },
        {
            id: 6,
            title: "Slider 6",
            desc: "Slider 6 Description",
            img: "https://picsum.photos/1200/400"
        },
        {
            id: 7,
            title: "Slider 7",
            desc: "Slider 7 Description",
            img: "https://picsum.photos/1200/400?random=7"
        },
        {
            id: 8,
            title: "Slider 8",
            desc: "Slider 8 Description",
            img: "https://picsum.photos/1200/400?random=8"
        },
        {
            id: 9,
            title: "Slider 9",
            desc: "Slider 9 Description",
            img: "https://picsum.photos/1200/400"
        },
        {
            id: 10,
            title: "Slider 10",
            desc: "Slider 10 Description",
            img: "https://picsum.photos/1200/400"
        },
        {
            id: 11,
            title: "Slider 11",
            desc: "Slider 11 Description",
            img: "https://picsum.photos/1200/400"
        },
        {
            id: 12,
            title: "Slider 12",
            desc: "Slider 12 Description",
            img: "https://picsum.photos/1200/400"
        },
    ];

    const [current, setCurrent] = useState(0);
    const length = slider.length;
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };
    setTimeout(nextSlide, 5000);
    

  return (
    <>
      <div className="relative h-1/3 sm:h-3/6 z-10 top-14">
        <div className="flex flex-row h-full w-screen">

            {slider.map((slide, index) => {
                return (
                    <div
                        className={index === current ? "slide active" : "slide"}
                        key={index}
                    >
                        {index === current && (
                            <img
                                src={slide.img}
                                alt="slider"
                                className="h-full w-screen object-fill aspect-auto opacity-80"
                            />
                        )}
                    </div>
                );
            }
            )}

        </div>
      </div>
    </>
  );
}

export default Slider;
