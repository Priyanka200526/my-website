import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BackgroundSlider.css";

const BackgroundSlider = () => {
  const navigate = useNavigate();
  const images = [
    {
      url: 'url("https://d16pnh712pyiwa.cloudfront.net/wp-content/uploads/2020/11/Landing-page-banner-scaled.jpg")',
      page: "/Electronics",
    },
    {
      url: 'url("https://www.alltricksworld.com/wp-content/uploads/2020/01/Amazon-Great-Indian-Sale-19th-22nd-JAN.jpg")',
      page: "/BeautyToys",
    },
    {
      url: 'url("https://www.savaari.com/blog/wp-content/uploads/2023/12/Jaipur-to-Udaipur-by-cab.png")',
      page: "/Mobile",
    },
    {
      url: 'url("https://flipshope.com/blog/wp-content/uploads/2024/01/Myntra-Right-to-Fashion-Sale-1536x454.png")',
      page: "/Women",
    },
    {
      url: 'url("https://rukminim1.flixcart.com/flap/2500/2500/image/188203440ea18623.jpg?q=80")',
      page: "/Men",
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 3-second interval

    return () => clearInterval(intervalId);
  }, [images.length]);

  const handleClick = () => {
    navigate(images[currentImage].page); // Navigate to specific page
  };

  return (
    <div
      className="background-slider"
      style={{ backgroundImage: images[currentImage].url }}
      onClick={handleClick}
    >
   
    </div>
  );
};

export default BackgroundSlider;