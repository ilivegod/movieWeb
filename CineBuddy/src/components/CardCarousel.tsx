import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router";

interface EmblaCarouselProps {
  slides: Slide[];
}

interface Slide {
  poster_path?: string;
  original_title?: string;
  title?: string;
  description?: string;
  id?: string;
  poster?: string;
}

const CardCarousel: React.FC<EmblaCarouselProps> = ({ slides }) => {
  let navigate = useNavigate();

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 2 },
      "(min-width: 1024px)": { slidesToScroll: 4 },
    },
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const handleCardClick = (id: string) => {
    console.log("id:", id);
  };

  return (
    <div className="relative max-w-screen-xl   ">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-4 gap-6">
          {slides.map((slide, index) => (
            <div
              className="flex-[0_0_100%] min-w-0 pl-4 sm:flex-[0_0_50%] md:flex-[0_0_33.33%] lg:flex-[0_0_25%]"
              key={index}
            >
              <button
                onClick={() => navigate(`/movieDetails/${slide.id}`)}
                className="bg-transparent  shadow-md overflow-hidden "
              >
                <div className=" relative h-44 sm:h-56 md:h-64 lg:h-72 border rounded-xl border-gray-500">
                  <img
                    src={`https://media.themoviedb.org/t/p/w600_and_h900_bestv2/${slide.poster_path}`}
                    alt={slide.original_title}
                    className="object-cover h-full w-full rounded-xl hover:scale-110 hover:cursor-pointer transition-transform duration-300 border-e-slate-50"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-lg font-semibold mb-2 text-white">
                    {slide.title}
                  </h2>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-all duration-300 ease-in-out"
        onClick={scrollPrev}
        disabled={!prevBtnEnabled}
      >
        <ChevronLeft className="w-6 h-6 text-black" />
      </button>
      <button
        className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-all duration-300 ease-in-out"
        onClick={scrollNext}
        disabled={!nextBtnEnabled}
      >
        <ChevronRight className="w-6 h-6 text-black" />
      </button>
    </div>
  );
};

export default CardCarousel;
