import React, { useEffect, useState } from 'react';
import './MenBackground.css';


const WomenBackground = () => {
  const images = [
    'url("https://m.media-amazon.com/images/G/31/img24/Fashion/Symbol/2024/AFMFA/Hero/Wedding_must-have_for_her_1500x400_1._CB580579572_.png")',
    'url("https://m.media-amazon.com/images/G/31/img24/Fashion/AF/Flip/Springsummerflip/CMLheros/PC/5._CB580691776_.jpg")',
    'url("https://m.media-amazon.com/images/G/31/img24/Fashion/AF/Flip/Springsummerflip/CMLheros/PC/7._CB580691776_.jpg")',
    'url("https://m.media-amazon.com/images/G/31/img24/Fashion/AF/Flip/Springsummerflip/CMLheros/PC/9._CB580691776_.jpg")',
    'url("https://m.media-amazon.com/images/G/31/Symbol/2024/BXGY/11th/Variant_3_3000x900._SX3000_QL85_FMpng_.png")',
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

export default WomenBackground;