import React, { useRef } from "react";
import "./AllSlider.css";

const Electronicsslider = () => {
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
    { id: 1,  image: "https://www.pngmart.com/files/13/Electrical-Items-PNG-Clipart.png" },
    { id: 2,  image: "https://th.bing.com/th/id/OIP.c5cSGiAIOngyMmzmrZYBKwAAAA?pid=ImgDet&w=191&h=104&c=7" },
    { id: 3,  image: "https://th.bing.com/th/id/R.17a6669172a890a46237929e1aff5875?rik=JG%2bOxi%2f5d5vqAg&riu=http%3a%2f%2f2.bp.blogspot.com%2f-F4_ZLcoiKq0%2fTd8whm0Fr6I%2fAAAAAAAAARA%2fr74GepBG_gI%2fw1200-h630-p-k-no-nu%2felectronic%2bproducts%2b1.jpg&ehk=%2bvp0ycy8oA5kuo6NhjtDdr6NIrcOnlAe%2fdiSvLaIkJQ%3d&risl=&pid=ImgRaw&r=0" },
    { id: 4,  image: "https://img.huffingtonpost.com/asset/5ec6e814300000f41f156710.png?ops=scalefit_960_noupscale" },
    { id: 5,  image: "https://th.bing.com/th/id/OIP.I_is1T3tfqJ0MYVQge_xsgHaHa?w=176&h=180&c=7&r=0&o=5&pid=1.7" },
    { id: 6,  image: "https://imgaz.staticbg.com/thumb/large/oaupload/ser1/banggood/images/94/21/a243bf1c-e83b-414b-8ff2-4ae821c5e40c.jpg" },
    { id: 8, image: "https://i.pinimg.com/originals/78/49/0e/78490e6fcf8801297dade97d0c234b14.jpg" },
    { id: 9, image: "https://th.bing.com/th/id/OIP.6RUQt2t-gwRmijRmZjsWtAHaHa?rs=1&pid=ImgDetMain" },
    { id: 10, image: "https://th.bing.com/th/id/OIP.WTAVyAE7GUuhYGSYA7f7NAHaHa?w=1000&h=1000&rs=1&pid=ImgDetMain" },
];
  return (
    <div className="amazon-slider3">
      <button className="scroll-button left" onClick={scrollLeft}>
        &#10094;
      </button>
      <div className="slider-container3" ref={sliderRef}>
        {cards.map((card) => (
          <div className="card3" key={card.id}>
            <img src={card.image} alt={card.title} className="card-image3" />
           
          </div>
        ))}
      </div>
      <button className="scroll-button right" onClick={scrollRight}>
        &#10095;
      </button>
    </div>
  );
};

export default Electronicsslider;