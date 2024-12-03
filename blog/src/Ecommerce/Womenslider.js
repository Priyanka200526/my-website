import React, { useRef } from "react";
import "./Womenslider.css";

const Womenslider = () => {
    const sliderRef = useRef(null);
  
    const scroll = (scrollOffset) => {
      sliderRef.current.scrollTo({
        left: sliderRef.current.scrollLeft + scrollOffset,
        behavior: "smooth",
      });
    };
  
    const scrollLeft = () => {
      scroll(-620); // Adjust as per your card width
    };
  
    const scrollRight = () => {
      scroll(620); // Adjust as per your card width
    };
  
    const cards = [
      { id: 1,  image: "https://m.media-amazon.com/images/G/31/img24/Fashion/AF/Flip/Springsummerflip/CMLheros/Halos/4v2._CB580691678_.png" },
      { id: 2,  image: "https://m.media-amazon.com/images/G/31/img24/Fashion/AF/Flip/Springsummerflip/CMLheros/Halos/9._CB580484771_.png" },
      { id: 3,  image: "https://m.media-amazon.com/images/G/31/img24/Fashion/AF/Flip/Springsummerflip/CMLheros/Halos/6_v1._CB580697957_.png" },
      { id: 4,  image: "https://m.media-amazon.com/images/G/31/img24/Fashion/AF/Flip/Springsummerflip/CMLheros/Halos/8._CB580484771_.png" },
      { id: 5,  image: "https://m.media-amazon.com/images/G/31/img24/Fashion/AF/Flip/Springsummerflip/CMLheros/Halos/5._CB580484771_.png" },
      { id: 6,  image: "https://m.media-amazon.com/images/G/31/img24/Fashion/AF/Flip/Springsummerflip/CMLheros/Halos/13._CB580484771_.png" },
      { id: 8, image: "https://m.media-amazon.com/images/G/31/img24/Fashion/AF/Flip/Springsummerflip/CMLheros/Halos/7._CB580484771_.png" },
      { id: 9, image: "https://m.media-amazon.com/images/G/31/img24/Fashion/AF/Flip/Springsummerflip/CMLheros/Halos/11._CB580484771_.png" },
      { id: 10, image: "https://m.media-amazon.com/images/G/31/img24/Fashion/AF/Flip/Springsummerflip/CMLheros/Halos/12._CB580484771_.png" },
  ];
    return (
      <div className="amazon-slider4">
        <button className="scroll-button left" onClick={scrollLeft}>
          &#10094;
        </button>
        <div className="slider-container4" ref={sliderRef}>
          {cards.map((card) => (
            <div className="card6" key={card.id}>
              <img src={card.image} alt={card.title} className="card-image6" />
            </div>
          ))}
        </div>
        <button className="scroll-button right" onClick={scrollRight}>
          &#10095;
        </button>
      </div>
  );
};

export default Womenslider;