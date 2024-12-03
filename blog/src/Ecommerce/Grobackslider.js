import React, { useEffect, useState } from 'react';
import './Grobackslider.css'; 


const Grobackslider = () => {
  const images = [
    'url("https://www.bigbasket.com/media/uploads/banner_images/hp_bcd_m_bcd_250923_400.jpg?tr=w-1130,q-80")',
    'url("https://www.bigbasket.com/media/uploads/banner_images/hp_m_babycare_250923_400.jpg?tr=w-1130,q-80")',
    'url("https://www.bigbasket.com/media/uploads/banner_images/hp_m_petstore_250923_400.jpg?tr=w-1130,q-80")',
    'url("https://cdn.shopify.com/s/files/1/1857/6931/files/Indian-Spices.jpg?v=1693903064")',
    'url("https://www.bigbasket.com/media/uploads/banner_images/hp_m_health_suppliment_250923_400.jpg?tr=w-1130,q-80")',
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
      className="background-slider"
      style={{ backgroundImage: images[currentImage] }}
    >

    </div>
  
    </>
 
  );
};

export default Grobackslider;