import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card } from "flowbite-react";
import { Avatar } from "flowbite-react";
import { useNavigate } from "react-router-dom";

interface YtCarouselProps {
  slides: Slide[];
}

interface Slide {
  image?: string;
  original_title?: string;
  name?: string;
  character?: string;
  id?: string;
  poster?: string;
}

const CastCarousel: React.FC<YtCarouselProps> = ({ slides }) => {
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
            <div>
              <Avatar img={slide.image} alt={slide.name} rounded size="xl" />
              <h5 className="text-2xl font-bold tracking-tight text-gray-100 dark:text-white">
                {slide.name}
              </h5>
              <h5 className="text-2xl font-bold tracking-tight text-gray-100 dark:text-white">
                {slide.character}
              </h5>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CastCarousel;
