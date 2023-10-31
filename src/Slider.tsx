import React, { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";



import SliderVideo from "./SliderVideo";

interface Slide {
  Contents: { Url: string }[];
  EngagementPostId: string;
}

interface SliderProps {
  slides: any;
}
const Slider: React.FC<SliderProps> = ({ slides }) => {
  const [current, setCurrent] = useState<number>(0);
  const length: number = slides.length;
  console.log(slides[0]);
  const nextSlide = () => {
    setCurrent((current) => (current === length - 1 ? 0 : current + 1));
  };

  const prevSlide = () => {
    setCurrent((current) => (current === 0 ? length - 1 : current - 1));
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider ">
      {slides.map((slide: Slide, index: number) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />

            {index === current && (
              <SliderVideo
                key={index}
                id={slide.EngagementPostId}
                volumeMute={true}
              />
            )}
            <FaArrowAltCircleRight
              className="right-arrow"
              onClick={nextSlide}
            />
          </div>
        );
      })}
    </section>
  );
};

export default Slider;
