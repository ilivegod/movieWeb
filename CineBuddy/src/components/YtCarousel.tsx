import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card } from "flowbite-react";
import { useNavigate } from "react-router-dom";

interface YtCarouselProps {
  slides: Slide[];
}

interface Slide {
  poster_path?: string;
  name?: string;
  title?: string;
  description?: string;
  id?: string;
  poster?: string;
}

const YtCarousel: React.FC<YtCarouselProps> = ({ slides }) => {
  let navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div className="">
      <div className="">
        <Slider {...settings}>
          {slides.map((slide) => (
            <div key={slide.id}>
              <Card
                className="max-w-sm"
                renderImage={() => (
                  <img
                    width={500}
                    height={500}
                    src={`https://media.themoviedb.org/t/p/w600_and_h900_bestv2/${slide.poster_path}`}
                    alt={slide.title}
                  />
                )}
              ></Card>
              <h5 className="text-2xl font-bold tracking-tight text-gray-100 dark:text-white">
                {slide.title}
              </h5>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default YtCarousel;
