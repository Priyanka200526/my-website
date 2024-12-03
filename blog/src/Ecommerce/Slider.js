import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Slider.css";

const AmazonSlider = () => {
  const sliderRef = useRef(null);
  const navigate = useNavigate();

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
    { id: 1,  
      image: "https://rukminim2.flixcart.com/fk-p-flap/450/280/image/362aadcbfcab7862.jpeg?q=20",
      path: "/Beautytoys", 
    },
    { id: 2,  
       image: "https://rukminim2.flixcart.com/fk-p-flap/450/280/image/e943fa9bb6933588.jpeg?q=20" ,
       path: "/Mobile",
      },
    { id: 3,   
       image: "https://rukminim2.flixcart.com/fk-p-flap/450/280/image/16a705eb670fa9b4.jpeg?q=20" ,
       path: "/Electronics",
      },
    { id: 4,   
      image: "https://rukminim2.flixcart.com/fk-p-flap/450/280/image/93bb64d92cebe373.jpeg?q=20" ,
      path: "/Men",
    },
    { id: 5,  
       image: "https://rukminim2.flixcart.com/fk-p-flap/450/280/image/4bec26cee4ba8257.jpeg?q=20",
       path: "/Electronics",
      },
    { id: 6,  
        image: "https://rukminim2.flixcart.com/fk-p-flap/450/280/image/fe85abe528972694.jpeg?q=20" ,
        path: "/Women",
      },
    { id: 7,  
      image: "https://rukminim2.flixcart.com/fk-p-flap/450/280/image/59abbb8e3ab53973.jpeg?q=20" ,
      path: "/Grocery",
    },
    { id: 8,   
      image: "https://rukminim2.flixcart.com/fk-p-flap/450/280/image/e3841d1811993b69.jpeg?q=20",
      path: "/Electronics",
    },
    { id: 9,   
      image: "https://rukminim2.flixcart.com/fk-p-flap/450/280/image/1688188ab67e72c2.jpeg?q=20" ,
      path: "/Men",
    },
   
    
];

const handleCardClick = (path) => {
  navigate(path);
};
  return (
    <div className="amazon-slider1">
      <button className="scroll-button left" onClick={scrollLeft}>
        &#10094;
      </button>
      <div className="slider-container1" ref={sliderRef}>
        {cards.map((card) => (
          <div className="card1" key={card.id}>
            <img src={card.image} className="card-image1" 
                  onClick={() => handleCardClick(card.path)}
            />                
          </div>
        ))}
      </div>
      <button className="scroll-button right" onClick={scrollRight}>
        &#10095;
      </button>
    </div>
  );
};

export default AmazonSlider;