import React, { useEffect, useState } from 'react';
import './MenBackground.css';


const MenBackground = () => {
  const images = [
    'url("https://th.bing.com/th/id/R.f0796d8f18616f1eb8705f259ec6e376?rik=qaCNdNrCyg5rZA&riu=http%3a%2f%2fsylvi.in%2fcdn%2fshop%2farticles%2fExplore_Unique_Diwali_Gifts_for_Men_Online_-_Explore_Sylvi_Iconic_Imperial_Rig_One_O_One_Watches.webp%3fv%3d1697707030&ehk=gul5MPplkjsaPFVZWpk2oUpHQ39qvY0rf%2fqNpb%2bbM3U%3d&risl=&pid=ImgRaw&r=0")',
    'url("https://m.media-amazon.com/images/G/31/img24/Fashion/AF/SS24/Flip/WomensHero/PC/T-shirts-polos_5._CB580669581_.png")',
    'url("https://m.media-amazon.com/images/G/31/img24/Fashion/AF/SS24/Flip/WomensHero/PC/Fab-offers-on-casual-shirts_0._CB580669580_.png")',
    'url("https://m.media-amazon.com/images/G/31/img24/Fashion/AF/SS24/Flip/WomensHero/PC/Colorboost-sneakers_10._CB580669580_.png")',
    'url("https://m.media-amazon.com/images/G/31/img24/Fashion/AF/SS24/Flip/WomensHero/PC/Bags-trolleys_1._CB580669580_.png")',
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
    <div className='background-card'>
    <div  className='rows-card'>
       <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img24/Fashion/AF/BAU/Winterflip/Bank/ICICI__IDFC_bank.png'></img> 
       <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img24/Fashion/BAU/Bank/July/CBCC-Prime.png'></img> 
        </div>
    </div>
    <div className='background-card1'>
    <div className='row-card'>
     
        <div>
        <img src='https://m.media-amazon.com/images/G/31/img24/Fashion/AF/flip/SS24/MensSBC/V2/Casual__Denim_Wear._SY530_QL85_FMpng_.png'></img>
        </div> 
        <div>
            <img src='https://m.media-amazon.com/images/G/31/img24/Fashion/AF/flip/SS24/MensSBC/V2/Formal_Wear._SY530_QL85_FMpng_.png'></img>
        </div>
        <div>
            <img src='https://m.media-amazon.com/images/G/31/img24/Fashion/AF/flip/SS24/MensSBC/V2/Footwear._SY530_QL85_FMpng_.png'></img>
        </div>
        <div>
            <img src='https://m.media-amazon.com/images/G/31/img24/Fashion/AF/flip/SS24/MensSBC/V2/Backpacks__Wallets._SY530_QL85_FMpng_.png'></img>
        </div>
        <div>
            <img src='https://m.media-amazon.com/images/G/31/img24/Fashion/AF/flip/SS24/MensSBC/V2/Sunglasses__Frames._SY530_QL85_FMpng_.png'></img>
        </div>
    </div>
  </div>
    </>
 
  );
};

export default MenBackground;