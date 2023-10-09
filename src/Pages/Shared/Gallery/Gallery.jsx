import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";

const Gallery = () => {
  const [images, setImages] = useState();
  useEffect(() => {
    fetch("/gallery.json")
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div>
      <h1 className="text-3xl text-center">Gallery</h1>
      <Slider  {...settings}>
        {images &&
          images.map((image) => (
            <div key={image.id} className="flex items-center justify-center">
              <img src={image.url} className="w-fit rounded-md mx-auto" alt={`Image ${image.id}`} />
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default Gallery;
