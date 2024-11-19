import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function CustomCarousel() {
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

  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  return (
    <div className="embla   items-center justify-center " ref={emblaRef}>
      <div className="embla__container bg-blue-300 h-[450px]">
        {images.map((image) => (
          <div className="embla__slide bg-white  w-full   relative">
            <img
              className="w-full h-full object-cover"
              src={image.imageUrl}
              alt="movie poster"
            />
            <h1 className="absolute bottom-0 left-0 text-white bg-black bg-opacity-50 px-4 py-2">
              fgjhfg
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}
