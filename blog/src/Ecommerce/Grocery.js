import Groceryslider from './Groceryslider';
import Footer from "./Footer";
import './Website.css';
function Grocery() {
  return (
    <>
      <img src='https://cdn.shopify.com/s/files/1/0544/0431/7363/files/Desktop-Banners1_2000x.jpg?v=1615412140 ' className='gm'></img>
      <Groceryslider />
      <div>
        <h2>Snacks Store</h2>
        <div className='four-pic'>
          <img src='https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/09ece9f7-7ac9-4d1e-afbb-f8ac572add38/hp_sbf_m_biscuits-&-namkeens_480_250923.jpg?tr=w-480,q-80'></img>
          <img src='https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/09ece9f7-7ac9-4d1e-afbb-f8ac572add38/hp_sbf_m_breakfast-cereals_480_250923.jpg?tr=w-480,q-80'></img>
          <img src='https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/09ece9f7-7ac9-4d1e-afbb-f8ac572add38/hp_sbf_m_pasta-sauces-&-more_480_270723.jpg?tr=w-480,q-80'></img>
          <img src='https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/09ece9f7-7ac9-4d1e-afbb-f8ac572add38/hp_sbf_m_sweet-cravings_480_250923.jpg?tr=w-480,q-80'></img>
        </div>
      </div>
      <div >
        <h2>Beverages</h2>
        <div className='six-pic'>
          <img src='https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/e4a9856b-dc3f-4927-a5a1-8edfe8d7dc38/hp_bev_m_health-drinks-&-supplements_480_250923.jpg?tr=w-480,q-80'></img>
          <img src='https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/e4a9856b-dc3f-4927-a5a1-8edfe8d7dc38/hp_bev_m_tea-&-coffee_480_250923.jpg?tr=w-480,q-80'></img>
          <img src='https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/e4a9856b-dc3f-4927-a5a1-8edfe8d7dc38/hp_bev_m_flavoured-&-soya-milk_480_250923.jpg?tr=w-480,q-80'></img>
          <img src='https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/e4a9856b-dc3f-4927-a5a1-8edfe8d7dc38/hp_bev_m_juices_480_250923.jpg?tr=w-480,q-80'></img>
          <img src='https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/e4a9856b-dc3f-4927-a5a1-8edfe8d7dc38/hp_bev_m_energy-drinks_480_250923.jpg?tr=w-480,q-80'></img>
          <img src='https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/e4a9856b-dc3f-4927-a5a1-8edfe8d7dc38/hp_bev_m_soft-drinks-&-more_480_250923.jpg?tr=w-480,q-80'></img>
        </div>
      </div>
      <div>
        <h2>Fruits and Vegetables</h2>
        <div className='four-pic'>
          <img src='https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/41a0810e-1fc3-46e4-9d2c-7d9e79e0aa29/hp_f&v_m_fresh-vegetables_480_250923.jpg?tr=w-480,q-80'></img>
          <img src='https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/41a0810e-1fc3-46e4-9d2c-7d9e79e0aa29/hp_f&v_m_fresh-fruits_480_250923.jpg?tr=w-480,q-80'></img>
          <img src='https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/41a0810e-1fc3-46e4-9d2c-7d9e79e0aa29/hp_f&v_m_cuts-&-exotics_480_250923.jpg?tr=w-480,q-80'></img>
          <img src='https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/41a0810e-1fc3-46e4-9d2c-7d9e79e0aa29/hp_f&v_m_herbs-&-seasoning_480_250923.jpg?tr=w-480,q-80'></img>
        </div>
      </div>
      <div  className='Grocery-container'>
        <div className='Grocery-card'>
          <div className='Gro-img-card'>
          <img src='https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/3f999e7f-788a-4e58-b250-bd6ce3368587_425x425.jpg'></img>
          </div> 
          <p>Tea Culture Of The World Green Tea</p>
          <p>1 pc</p>
          <div className='para-i'>
            <div className='span-p'>
          <span> MRP &#8377;199</span>
          <p>
            <i class="fa-solid fa-cart-shopping"></i>
            ADD</p>
        </div>
        </div>
        </div>
        <div className='Grocery-card'>
          <div className='Gro-img-card'>
        <img src='https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/0a7c9be9-85bf-46c8-9860-f80e43fc663c_425x425.jpg'></img>
        </div>
        <p>Big Sams Frozen Prawns Large 250G</p>
        <p>1 pc</p>
        <div className='para-i'>
        <div className='span-p'>
          <span> MRP &#8377;259</span>
          <p>
            <i class="fa-solid fa-cart-shopping"></i>
            ADD</p>
        </div>
        </div>
        </div>
        <div className='Grocery-card'>
          <div className='Gro-img-card'>
        <img src='https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/509d04c0-7686-4d71-bcbb-da5f139d3961_425x425.jpg'></img>
        </div>
        <p>Nutorus Cheese Gouda Black 200G</p>
        <p>1 pc</p>
        <div className='para-i'>
        <div className='span-p'>
          <span> MRP &#8377;249</span>
          <p>
            <i class="fa-solid fa-cart-shopping"></i>
            ADD</p>
        </div>
        </div>
        </div>
        <div className='Grocery-card'>
          <div className='Gro-img-card'>
        <img src='https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/1f543638-129d-43d3-b484-b79abc6768a1_425x425.jpg'></img>
        </div>
        <p>Haagen Dazs Ice-Cream mango & Raspberry</p>
        <p>1 pc</p>
        <div className='para-i'>
        <div className='span-p'>
          <span> MRP &#8377;299</span>
          <p>
            <i class="fa-solid fa-cart-shopping"></i>
            ADD</p>
        </div>
        </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}
export default Grocery;