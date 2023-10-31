import React, { useState } from "react";

import {
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
  FaTimes,
  FaVolumeMute,
  FaVolumeUp,
} from "react-icons/fa";
import SliderVideo from "./SliderVideo";
import "./modal.css";
interface ModalProps {
  slides: Slide[];
  feed: any;
  closeModal: () => void;
}

interface Slide {
  Contents: { Url: string }[];
  EngagementPostId: string;
}

const Modal: React.FC<ModalProps> = ({ slides, feed, closeModal }) => {
  // <div className="modal">
  //   <div className="modal-content">
  //     <button className="close-button" onClick={closeModal}>
  //       Close
  //     </button>
  //     <Video feed={feed} index={0} />{" "}
  //     {/* You can customize the video display in the modal */}
  //   </div>
  // </div>
  const [current, setCurrent] = useState<number>(feed);
  const [volumeMute, setVolumeMute] = useState(false);
  console.log(volumeMute);
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
  const muteVolume = () => {
    setVolumeMute(!volumeMute);
  };
  return (
    <section>
      {slides.map((slide: Slide, index: number) => {
        return (
          <div className="">
            <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              <button className="close-button" onClick={closeModal}>
                <FaTimes />
              </button>

              <button className="speaker-button" onClick={muteVolume}>
                {volumeMute ? <FaVolumeUp /> : <FaVolumeMute />}
              </button>

              {index === current && (
                <>
                  <SliderVideo
                    key={index}
                    volumeMute={volumeMute}
                    id={slide.EngagementPostId}
                  />
                  <div className="BuyButton">Buy</div>
                </>
              )}
            </div>
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

export default Modal;
