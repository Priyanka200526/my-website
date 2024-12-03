import React, { useRef } from "react";
import "./Groceryslider.css";

const Groceryslider = () => {
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
        { id: 1, image: "https://www.distacart.com/cdn/shop/products/NMAoES2rCg.jpg?v=1632450830&width=550" },
        { id: 2, image: "https://www.distacart.com/cdn/shop/products/Amorearth_Shatavari_Ghee-removebg-preview.png?v=1626955294&width=550" },
        { id: 3, image: "https://www.distacart.com/cdn/shop/products/1581756769320_5.jpg?v=1716898396&width=550" },
        { id: 4, image: "https://images.thdstatic.com/productImages/6339847b-03a0-41a2-9249-12b4ab5b4f5f/svn/miracle-gro-plant-food-fertilizer-3020506-64_1000.jpg" },
        { id: 5, image: "https://www.ortery.com/wp-content/uploads/2019/05/Dawn-Soap-og01.jpg" },
        { id: 6, image: "https://www.distacart.com/cdn/shop/products/SriSriTattvaCow_sPureGhee.jpg?v=1622030130&width=550" },
        { id: 8, image: "https://www.distacart.com/cdn/shop/products/Eol0FrVVGZ.jpg?v=1625805309&width=550" },
        { id: 9, image: "https://www.distacart.com/cdn/shop/products/Amorearth_Desi_A2_Gir_Cow_Cultured_Ghee_250_ml-removebg-preview.png?v=1627021739&width=550" },
        { id: 10, image: "https://th.bing.com/th/id/OIP.-RSRi8YfkxotuoFaVNlFqQHaHa?pid=ImgDet&w=191&h=191&c=7" },
        { id: 11, image: "https://www.distacart.com/cdn/shop/products/UIx4E4OAbm.jpg?v=1621351614&width=550" },
    ];
    return (
        <div className="amazon-slider3">
            <button className="scroll-button left" onClick={scrollLeft}>
                &#10094;
            </button>
            <div className="slider-container3" ref={sliderRef}>
                {cards.map((card) => (
                    <div className="card3" key={card.id}>
                        <img src={card.image} alt={card.title} className="card-image3" />
                    
                    </div>
                ))}
            </div>
            <button className="scroll-button right" onClick={scrollRight}>
                &#10095;
            </button>
        </div>
    );
};

export default Groceryslider;