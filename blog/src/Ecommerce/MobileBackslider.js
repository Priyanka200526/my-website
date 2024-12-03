import React, { useRef } from "react";
import "./All.css";

const MobileBackslider = () => {
  const sliderRef = useRef(null);

  const scroll = (scrollOffset) => {
    sliderRef.current.scrollTo({
      left: sliderRef.current.scrollLeft + scrollOffset,
      behavior: "smooth",
    });
  };

  const scrollLeft = () => {
    scroll(-520); // Adjust as per your card width
  };

  const scrollRight = () => {
    scroll(520); // Adjust as per your card width
  };

  const cards = [
    { id: 1, title: "Mobile-stand", price: "₹149", discount: "50% Off", rating: "★★★★☆", image: "https://th.bing.com/th/id/OIP.TYaoLC9ezj9iAEMP6XP6ggHaHa?w=1000&h=1000&rs=1&pid=ImgDetMain" },
    { id: 2, title: "Selfie Stik", price: "₹3,599", discount: "30% Off", rating: "★★★☆☆", image: "https://canary.contestimg.wish.com/api/webimage/64310f912c2632ec77bc29c2-large.jpg?cache_buster=cc192b669ea6bcc023c87bfa32531010" },
    { id: 3, title: "Mobile-stand", price: "₹545.00", discount: "20% Off", rating: "★★★★★", image: "https://i5.walmartimages.com/asr/a24689e1-edd1-479c-a1d1-9077d4605eab_1.afdebf796e506c24a912f5986ea02f41.jpeg" },
    { id: 4, title: "Mobile-stand", price: "₹945.00", discount: "15% Off", rating: "★★★★☆", image: "https://www.yankodesign.com/images/design_news/2021/03/phone-accessories/phone_accessories_ds_yanko_design-hero.jpg" },
    { id: 5, title: "Back-cover", price: "₹475.00", discount: "10% Off", rating: "★★★☆☆", image: "https://i.pinimg.com/originals/0b/bd/48/0bbd48c9ea926c3755edcee3023aa8b5.jpg" },
    { id: 6, title: "Headphone", price: "₹24,990", discount: "20% Off", rating: "★★★★☆", image: "https://th.bing.com/th/id/OIP.9vC4nPLSK6bUC2gAlmdJlAHaHa?rs=1&pid=ImgDetMain" },
    { id: 8, title: "Mobile-charger", price: "₹249", discount: "10% Off", rating: "★★★★☆", image: "https://m.media-amazon.com/images/I/6141pUa-eeL.__AC_SX300_SY300_QL70_ML2_.jpg" },
    { id: 9, title: "Back-cover", price: "₹299", discount: "25% Off", rating: "★★★☆☆", image: "https://th.bing.com/th/id/OIP.XATrdYZSx4jema_bAwckngHaED?rs=1&pid=ImgDetMain" },
    { id: 10, title: "Headphone", price: "₹199", discount: "40% Off", rating: "★★★☆☆", image: "https://th.bing.com/th/id/OIP.YBGmi8eCDsGXlWPeO2iSuQHaGd?rs=1&pid=ImgDetMain" },
];
  return (
    <>
   
    <div className="amazon-slider">
      <button className="scroll-button left" onClick={scrollLeft}>
        &#10094;
      </button>
      <div className="slider-container" ref={sliderRef}>
        {cards.map((card) => (
          <div className="card" key={card.id}>
            <img src={card.image} alt={card.title} className="card-image" />
            <div className="elements">
            <h3>{card.title}</h3>
            <p>{card.price}</p>
            <h4>{card.discount}</h4>
            <span>{card.rating}</span>
          </div>
          </div>
        ))}
      </div>
      <button className="scroll-button right" onClick={scrollRight}>
        &#10095;
      </button>
    </div>
    </>
  );
};

export default MobileBackslider;