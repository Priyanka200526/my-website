import React, { useEffect, useState } from 'react';
import './MenBackground.css';


const Beautybackground = () => {
  const images = [
    'url("https://m.media-amazon.com/images/G/31/img24/Beauty/BAU/Unrec/Headers/PC/BXGY_pc._SX3000_QL85_FMpng_.png")',
    'url("https://m.media-amazon.com/images/G/31/img24/Beauty/BAU/Unrec/Headers/PC/SNS_pc._SX3000_QL85_FMpng_.png")',
    'url("https://m.media-amazon.com/images/G/31/img24/Beauty/BAU/Unrec/Headers/PC/199_unrec_header_pc._SX3000_QL85_FMpng_.png")',
    'url("https://m.media-amazon.com/images/G/31/img24/Beauty/BAU/Unrec/Headers/PC/Coupons_pc._SX3000_QL85_FMpng_.png")',
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [images.length]);

  return (<>
  
    <div
      className="background-slider1"
      style={{ backgroundImage: images[currentImage] }}
    >

    </div>
  
    </>
 
  );
};

export default Beautybackground;