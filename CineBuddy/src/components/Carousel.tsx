import React from "react";
import useEmblaCarousel from "embla-carousel-react";

export default function Carousel() {
  const images = [
    {
      id: 1,
      imageUrl:
        "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 2,
      imageUrl:
        "https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 3,
      imageUrl:
        "https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  const [emblaRef] = useEmblaCarousel();
  return (
    <div className="embla   items-center justify-center " ref={emblaRef}>
      <div className="embla__container bg-blue-300 h-[450px]">
        <div className="embla__slide bg-white  w-full   relative">
          <img
            className="w-full h-full object-cover"
            src="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=800"
          />
          <h1 className="absolute bottom-0 left-0 text-white bg-black bg-opacity-50 px-4 py-2">
            fgjhfg
          </h1>
        </div>
        <div className="embla__slide bg-white  w-full   relative">
          <img
            className="w-full h-full object-cover"
            src="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=800"
          />
          <h1 className="absolute bottom-0 left-0 text-white bg-black bg-opacity-50 px-4 py-2">
            fgjhfg
          </h1>
        </div>
        <div className="embla__slide bg-white  w-full   relative">
          <img
            className="w-full h-full object-cover"
            src="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=800"
          />
          <h1 className="absolute bottom-0 left-0 text-white bg-black bg-opacity-50 px-4 py-2">
            fgjhfg
          </h1>
        </div>
      </div>
    </div>
  );
}
