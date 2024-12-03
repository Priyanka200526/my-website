import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./AllSlider.css";

const AllSlider = () => {
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
    { id: 1,  image: "https://dimg.dillards.com/is/image/DillardsZoom/zoom/nadri-chiara-crystal-y-necklace/00000000_zi_d3a9c209-5c29-4ef4-acea-9e3be86415f9.jpg" , path: "/Women",},
    { id: 2,  image: "https://zeecart.in/media/catalog/category/b2b.jpg" ,path: "/Grocery",},
    { id: 3,  image: "https://i5.walmartimages.com/asr/23cbc7c9-2352-4416-ac19-c2acc26ee421.b5edff022bf166870158cb17333feeff.jpeg",path: "/Men", },
    { id: 4,  image: "https://images.woodenstreet.de/image/data/Muren/kids-foldable-study-table-set-green/MI-3.jpg",path: "/HomeKitchen", },
    { id: 5,  image: "https://th.bing.com/th/id/OIP.LJppu1jTnuTqI18-yNa-KAHaE7?rs=1&pid=ImgDetMain", path: "/Men",},
    { id: 6,  image: "https://www.madrasshoppe.com/6765-home_default/jee-main-complete-physics-nk-bajaj.jpg",path: "/Men", },
    { id: 8, image: "https://th.bing.com/th/id/OIP.NtGtIojh9bg4nlqwhQlxhgHaHa?rs=1&pid=ImgDetMain",path: "/Women", },
    { id: 9, image: "https://newsroompost.com/wp-content/uploads/2021/08/CSD-Pilot-Project_Leaflet-1.jpg",path: "/Electronics", },
    { id: 10, image: "https://png.pngtree.com/png-clipart/20230417/original/pngtree-headphones-electronics-accessories-transparent-png-image_9062516.png",path: "/Electronics",  },
];
const handleCardClick = (path) => {
  navigate(path);
};

  return (
    <div className="amazon-slider3">
      <button className="scroll-button left" onClick={scrollLeft}>
        &#10094;
      </button>
      <div className="slider-container3" ref={sliderRef}>
        {cards.map((card) => (
          <div className="card3" key={card.id}>
            <img src={card.image} alt={card.title} className="card-image3"
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

export default AllSlider;