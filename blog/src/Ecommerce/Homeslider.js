import React, { useRef } from "react";
import "./All.css";

const Homeslider = () => {
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
    { id: 1, title: "Best Food Chooper", price: "₹895", discount: "50% Off", rating: "★★★★☆", image: "https://cdn.bedsreview.com/Public/images/post/body/20-best-kitchen-products-that-will-make-cooking-easier-1.jpg" },
    { id: 2, title: "Air-Fryer", price: "₹999", discount: "30% Off", rating: "★★★☆☆", image: "https://assets.macysassets.com/dyn_img/creativepages/101-heroQ7100006.jpg" },
    { id: 3, title: "ketli", price: "₹545.00", discount: "20% Off", rating: "★★★★★", image: "https://th.bing.com/th/id/OIP.Aq0enT-i7DWSHml2O20f7gAAAA?rs=1&pid=ImgDetMain" },
    { id: 4, title: "Spoon-Set", price: "₹145.00", discount: "15% Off", rating: "★★★★☆", image: "https://i5.walmartimages.com/asr/3848f085-3b60-410b-a3ea-1c0d90d9ff51.8c259e3e60e0af3880a9a1dd303223f8.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff" },
    { id: 5, title: "Eco-Friendly Product", price: "₹155.00", discount: "10% Off", rating: "★★★☆☆", image: "https://aglowlifestyle.com/wp-content/uploads/2020/12/d-5.png" },
    { id: 6, title: "Home Interior Decor", price: "₹1,990", discount: "20% Off", rating: "★★★★☆", image: "https://th.bing.com/th/id/OIP.mqAlQsP6-GwIMU6-lFSl-AHaER?w=298&h=180&c=7&r=0&o=5&pid=1.7" },
    { id: 8, title: "Seater Sofa Bad", price: "₹20,990", discount: "10% Off", rating: "★★★★☆", image: "https://th.bing.com/th/id/OIP.UFtmIwV22CIW5Kt7auI2nQHaHa?w=1024&h=1024&rs=1&pid=ImgDetMain" },
    { id: 9, title: "Cover Of Shit Cover", price: "₹19,990", discount: "25% Off", rating: "★★★☆☆", image: "https://th.bing.com/th/id/R.eea9608a4cb9930f432db44e569893f1?rik=pMpcdOxa7Mz5Vw&riu=http%3a%2f%2fwww.stagecoachdesigns.com%2fwp-content%2fuploads%2f2015%2f09%2fAccent-Chair-Slipcovers-310x310.jpg&ehk=e3tnG25r51XyoIYYBuNjm5y%2fKRr%2f14%2bdoG61hIsAmvo%3d&risl=&pid=ImgRaw&r=0" },
    { id: 10, title: "Bed-Lamp,Lighting", price: "₹590", discount: "40% Off", rating: "★★★☆☆", image: "https://media.karousell.com/media/photos/products/2024/1/1/bed_lamp_1704090734_f5dc29d0.jpg" },
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

export default Homeslider;