import React, { useRef } from "react";
import "./Website.css";
import Beautybackground from "./Beautybackground";
import Footer from "./Footer";

const BeautyToys = () => {
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
    { id: 1, image: "https://images-static.nykaa.com/uploads/eef0c01c-0d5c-4a6a-9843-35e4d2c17271.gif" },
    { id: 2, image: "https://images-static.nykaa.com/creatives/9de4848e-edda-4bc5-ba98-77af0f8695a7/default.jpg?tr=cm-pad_resize,w-600" },
    { id: 3, image: "https://images-static.nykaa.com/creatives/0f332a78-607f-4a16-b77c-e4a829100841/default.jpg?tr=cm-pad_resize,w-600" },
    { id: 4, image: "https://images-static.nykaa.com/creatives/9bb1a965-1e22-421b-bd61-db2f01f53561/default.jpg?tr=cm-pad_resize,w-600" },
    { id: 5, image: "https://images-static.nykaa.com/creatives/8a056b8a-3b80-4293-985d-bf47865c14f1/default.jpg?tr=cm-pad_resize,w-600" },
    { id: 6, image: "https://images-static.nykaa.com/creatives/00cbbec9-ce10-4f1a-a4a9-afdbf00fdcab/default.jpg?tr=cm-pad_resize,w-600" },
    { id: 7, image: "https://images-static.nykaa.com/creatives/8096f9bb-8ac3-4a22-8c2d-582ba9f42a7e/default.jpg?tr=cm-pad_resize,w-600" },
    { id: 8, image: "https://images-static.nykaa.com/creatives/5fb63f59-a3b4-43ec-98b2-9c1c439a7fb2/default.jpg?tr=cm-pad_resize,w-600" },
    { id: 10, image: "https://images-static.nykaa.com/creatives/cb3bc219-e97e-491c-8786-29be8a0f16b0/default.jpg?tr=cm-pad_resize,w-600" },
    { id: 11, image: "https://images-static.nykaa.com/uploads/3552fb4b-3e96-43c1-aa4a-d33adfca8a09.jpg?tr=cm-pad_resize,w-600" },

  ];
  return (
    <>
      <Beautybackground />
      <div className="amazon-slider3">
        <button className="scroll-button left" onClick={scrollLeft}>
          &#10094;
        </button>
        <div className="slider-container3" ref={sliderRef}>
          {cards.map((card) => (
            <div className="card7" key={card.id}>
              <img src={card.image} alt={card.title} className="card-image7" />
            </div>
          ))}
        </div>
        <button className="scroll-button right" onClick={scrollRight}>
          &#10095;
        </button>
      </div>
      <div className="beauty-img">
        <img src="https://images-static.nykaa.com/uploads/bc659164-1815-43c3-8f0a-027fc317ed33.gif"></img>
      </div>
      <div className="beauty-img2">
        <img src="https://images-static.nykaa.com/uploads/dd133d2a-9b0e-411d-ab27-f189fab8cfa0.jpg?tr=cm-pad_resize,w-1200"></img>
      </div>
      <div className="beauty-container">
        <h2>Best In Makeup</h2>
        <div className="beauty-boxes">
          <img src="https://m.media-amazon.com/images/G/31/img24/Beauty/Jupiter/Makeup_TB-_Maybelline._SX564_QL85_FMpng_.png"></img>
          <img src="https://m.media-amazon.com/images/G/31/img24/Beauty/Jupiter/Makeup_TB-_Lakme._SX564_QL85_FMpng_.png"></img>
          <img src="https://m.media-amazon.com/images/G/31/img24/Beauty/Jupiter/Makeup_TB-_Sugar_Cosmetics._SX564_QL85_FMpng_.png"></img>
          <img src="https://m.media-amazon.com/images/G/31/img24/Beauty/Jupiter/Makeup_TB-_Swiss_Beauty._SX564_QL85_FMpng_.png"></img>
          <img src="https://m.media-amazon.com/images/G/31/img24/Beauty/Jupiter/Makeup_TB-_Renee._SX564_QL85_FMpng_.png"></img>
          <img src="https://m.media-amazon.com/images/G/31/img24/Beauty/Jupiter/Makeup_TB-_Renee._SX564_QL85_FMpng_.png"></img>
        </div>
      </div>
      <div className="cntain">
        <div className="s-cntain">
          <h2>Hair Serum 20% Discount

          </h2>
          <div className="smi-contain">
            <div className="box-contain">
              <img src="https://th.bing.com/th/id/OIP.4BIY87qbRrgC4-gVVKIakwHaHa?w=205&h=204&c=7&r=0&o=5&pid=1.7"></img>
              <p>&#8377;540..00</p>
              <button>Special Offer</button>
            </div>
            <div className="box-contain">
              <img src="https://th.bing.com/th/id/OIP.izqIkIWtJs3AbfDpeoBkOwHaHa?w=182&h=183&c=7&r=0&o=5&pid=1.7"></img>
              <p>&#8377;940..00</p>
              <button>Specials</button>
            </div>
          </div>
          <br></br>
          <div className="smi-contain">
            <div className="box-contain">
              <img src="https://th.bing.com/th/id/OIP.JjoER7O6Ay7azQnATyR0sQAAAA?w=303&h=199&c=7&r=0&o=5&pid=1.7"></img>
              <p>&#8377;789..00</p>
              <button>Top Sales</button>
            </div>
            <div className="box-contain">
              <img src="https://th.bing.com/th/id/OIP.VHnVj0Wo7lKbuX8Yg98J1gHaHa?w=213&h=213&c=7&r=0&o=5&pid=1.7"></img>
              <p>&#8377;440..00</p>
              <button>Best Deals</button>
            </div>
          </div>
        </div>

        <div className="s-cntain">
          <h2>Leading Brands
          </h2>
          <div className="smi-contain">
            <div className="box-contain">
              <img src="https://th.bing.com/th/id/OIP.xPngUA3xo5HjCO7cMm8doQHaHa?w=182&h=182&c=7&r=0&o=5&pid=1.7"></img>
              <p>GOLD</p>
              <button>Special Offer</button>
            </div>
            <div className="box-contain">
              <img src="https://i.pinimg.com/originals/51/f3/22/51f3223285e9bea8c2b37a44fa808123.jpg"></img>
              <p> DOVE</p>
              <button>Specials</button>
            </div>
          </div>
          <br></br>
          <div className="smi-contain">
            <div className="box-contain">
              <img src="https://i.pinimg.com/originals/0e/f1/01/0ef101c361935490be890026e2c669d1.jpg"></img>
              <p>CLINIQUE</p>
              <button>Top Sales</button>
            </div>
            <div className="box-contain">
              <img src="https://m.media-amazon.com/images/I/517cjtnwoyL._SL1200_.jpg"></img>
              <p>LATUS</p>
              <button>Best Deals</button>
            </div>
          </div>
        </div>

        <div className="s-cntain1">
          <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/beauty-%26-cosmetics-flyer-design-template-45e2bbdc531abf22534962a02a34b023_screen.jpg?ts=1681892027"></img>
        </div>
      </div>
      <div className="beauty-emj">
        <img src="https://images-static.nykaa.com/uploads/3f1944e4-a1ec-4991-98d2-b9bb0de2c95e.gif"></img>
      </div>
      <div className="beauty-pic">
        <img src="https://th.bing.com/th/id/OIP.3wXZEJCIAY-kO3gX04sBZAHaE7?w=303&h=202&c=7&r=0&o=5&pid=1.7"></img>
        <img src="https://th.bing.com/th/id/OIP.CcCJOuu44DzdsJZTFAcPZAHaE7?w=244&h=180&c=7&r=0&o=5&pid=1.7"></img>
        <img src="https://th.bing.com/th/id/OIP.M6Rwy1xxp99DnXX36H2zkgHaEK?w=276&h=180&c=7&r=0&o=5&pid=1.7"></img>
      </div>
      <Footer/>
    </>
  );
};

export default BeautyToys;