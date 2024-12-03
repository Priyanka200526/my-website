import React, { useRef } from "react";
import "./Electronicsslider2.css";

const Electronicsslider2 = () => {
  const sliderRef = useRef(null);

  const scroll = (scrollOffset) => {
    sliderRef.current.scrollTo({
      left: sliderRef.current.scrollLeft + scrollOffset,
      behavior: "smooth",
    });
  };

  const scrollLeft = () => {
    scroll(-820); // Adjust as per your card width
  };

  const scrollRight = () => {
    scroll(820); // Adjust as per your card width
  };

  const cards = [
    { id: 1,  image: "https://m.media-amazon.com/images/G/31/img21/desktop/newlaunches/lenovo_elp._SS900_QL85_.jpg" },
    { id: 2,  image: "https://m.media-amazon.com/images/G/31/img21/desktop/newlaunches/updated/978X900._SS900_QL85_.jpg" },
    { id: 3,  image: "https://m.media-amazon.com/images/G/31/img23/ggd/may/zebronics_comp_300._SS900_QL85_.jpg" },
    { id: 4,  image: "https://m.media-amazon.com/images/G/31/img23/hyperx/IN_CloudIII_Launch_Shop_Now_978900._SS900_QL85_.jpg" },
    { id: 5,  image: "https://m.media-amazon.com/images/G/31/img22/Electronics/Page/Devices/New/Launch/Churro_X-cat_banner_978x900._SS900_QL85_.jpg" },
    { id: 6,  image: "https://m.media-amazon.com/images/G/31/img22/Electronics/Page/PS5/Launch/Ingress/978x900_PS5_Banner._SS900_QL85_.jpg" },
    { id: 7, image: "https://m.media-amazon.com/images/G/31/img21/Qubo/Camera/978._SS900_QL85_.jpg" },
    { id: 8, image: "https://m.media-amazon.com/images/G/31/img21/ELP/PRINTERS/HP_Smart_Tank__Consumer_offer_Banner_589_978x900._SS900_QL85_FMpng_.png" },
    { id: 9, image: "https://m.media-amazon.com/images/G/31/img23/PCA/NW/978-x-900_2._SS900_QL85_.jpg" },
    { id: 10, image: "https://m.media-amazon.com/images/G/31/camera/mfine/iasda/boya/boya978x900._SS900_QL85_FMpng_.png" },
    { id: 11, image: "https://m.media-amazon.com/images/G/31/camera/musicalinstruments/final/udpated/USB-Microphone_970x900._SS900_QL85_.jpg" },
    { id: 12, image: "https://m.media-amazon.com/images/G/31/img23/PCA/NW/978-x-900._SS900_QL85_.jpg" },
];
  return (
    <div className="amazon-slider3">
      <button className="scroll-button left" onClick={scrollLeft}>
        &#10094;
      </button>
      <div className="slider-container3" ref={sliderRef}>
        {cards.map((card) => (
          <div className="card5" key={card.id}>
            <img src={card.image} alt={card.title} className="card-image5" />
          </div>
        ))}
      </div>
      <button className="scroll-button right" onClick={scrollRight}>
        &#10095;
      </button>
    </div>
  );
};

export default Electronicsslider2;