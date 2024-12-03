import React, { useRef } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./All.css";

const Cardslider = () => {
  const sliderRef = useRef(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const scroll = (scrollOffset) => {
    sliderRef.current.scrollTo({
      left: sliderRef.current.scrollLeft + scrollOffset,
      behavior: "smooth",
    });
  };

  const scrollLeft = () => {
    scroll(-520);
  };

  const scrollRight = () => {
    scroll(520); 
  };

  const cards = [
    {
      id: 1,
      title: "Beauty-Products",
      price: "₹19,195",
      discount: "50% Off",
      rating: "★★★★☆",
      image: "https://www.beautyheaven.com.au/wp-content/uploads/2022/07/bh-header-multi-use-products.png",
      path: "/BeautyToys",
    },
    {
      id: 2,
      title: "Samsung camera",
      price: "₹59,999",
      discount: "30% Off",
      rating: "★★★☆☆",
      image: "https://th.bing.com/th/id/OIP.z3k-CXBDyTJsmJRmhsTqMQHaEK?w=318&h=180&c=7&r=0&o=5&pid=1.7",
      path: "/Electronics",
    },
    {
      id: 3,
      title: "Ketli",
      price: "₹545.00",
      discount: "20% Off",
      rating: "★★★★★",
      image: "https://th.bing.com/th/id/OIP.IaGw9foYNuesNy1BSqvrCQHaE7?w=268&h=180&c=7&r=0&o=5&pid=1.7",
      path: "/HomeKitchen",
    },
    {
      id: 4,
      title: "Patanjali-shampoo",
      price: "₹3945.00",
      discount: "15% Off",
      rating: "★★★★☆",
      image: "https://th.bing.com/th/id/OIP.C-Wm9dxWW8W3pTqKiut5oQHaFS?rs=1&pid=ImgDetMain",
      path: "/Beautytoys",
    },
    {
      id: 5,
      title: "Lamp-light",
      price: "₹1475.00",
      discount: "10% Off",
      rating: "★★★☆☆",
      image: "https://th.bing.com/th/id/OIP.vcmIogd1bSw4-PFa9NK9jwHaF7?w=231&h=185&c=7&r=0&o=5&pid=1.7",
      path: "/HomeKitchen",
    },
    {
      id: 6,
      title: "Zara-Bags",
      price: "₹24,990",
      discount: "20% Off",
      rating: "★★★★☆",
      image: "https://th.bing.com/th/id/OIP.8FQo92Emogar0tux3s9fIQHaEo?w=268&h=180&c=7&r=0&o=5&pid=1.7",
      path: "/Women",
    },
    {
      id: 7,
      title: "addidas shoes",
      price: "₹20,990",
      discount: "10% Off",
      rating: "★★★★☆",
      image: "https://th.bing.com/th/id/OIP.Vui1gAtnHmqJTYC5Xi0kMgHaFC?w=303&h=204&c=7&r=0&o=5&pid=1.7",
      path: "/Men",
    },
    {
      id: 8,
      title: "Smasung-Products",
      price: "₹59,990",
      discount: "25% Off",
      rating: "★★★☆☆",
      image: "https://newsroompost.com/wp-content/uploads/2021/08/CSD-Pilot-Project_Leaflet-1.jpg",
      path: "/Mobile",
    },
    {
      id: 9,
      title: "Patanjali-products",
      price: "₹2,990",
      discount: "40% Off",
      rating: "★★★☆☆",
      image: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/best-ramdev-products-patanjali-ayurved.jpg",
      path: "Grocery",
    },
  ];


  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <>
      <div className="amazon-slider">
        <button className="scroll-button left" onClick={scrollLeft}>
          &#10094;
        </button>
        <div className="slider-container" ref={sliderRef}>
          {cards.map((card) => (
            <div className="card" key={card.id}>
              <img
                src={card.image}
                alt={card.title}
                className="card-image"
                onClick={() => handleCardClick(card.path)}
              />
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

export default Cardslider;