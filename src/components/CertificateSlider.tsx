import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { useState } from "react";

interface SliderProps {
  images: string[];
}

function CertificateSlider({ images }: SliderProps){
  const [currentImage, setCurrentImage] = useState(0);

  const nextSlide = () => {
    setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
  };

  const prevSlide = () => {
    setCurrentImage((prevImage) => (prevImage === 0 ? images.length - 1 : prevImage - 1));
  };

  return (
    <div className="slider">
        <BsChevronCompactLeft onClick={prevSlide} className="slider-button prev-button"/>
      <img src={images[currentImage]} alt="Slider Image" className="slider-image" />
        <BsChevronCompactRight onClick={nextSlide} className="slider-button next-button"/>
    </div>
  );
};

export default CertificateSlider;