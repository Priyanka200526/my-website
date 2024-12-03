import React from "react";
import BackgroundSlider from './BackgroundSlider';
import './All.css';
import Slider from "./Slider";
import AllSlider from "./AllSlider";
import { Link } from "react-router-dom";
import Cardslider from "./Cardslider";
import Footer from "./Footer";

function All() {
  return (
    <>
      <div className="big-container">
        <BackgroundSlider />
       <Cardslider/>
        <Link to="/BeautyToys">
        <img src="https://th.bing.com/th/id/R.8510d0b8f889b4de62e2fcdca8059d87?rik=EZN3FQcMwzeLIw&riu=http%3a%2f%2fimages.ulta.com%2fis%2fimage%2fUlta%2fwk3717_d_sale_bmsm_makeup_multi%3fscl%3d1&ehk=xenhLOhOFnEgj0H975HuQSL6EDqlApWPvgHmadoc9zM%3d&risl=&pid=ImgRaw&r=0" className="pt"></img>
        </Link>
        <div className='contain1'>
          <div className='sml-container1'>
            <div className='mini-box2'>
              <h2>New deals added everyday</h2>
            </div>
            <div className='emj'>
              <Link to="/Women">
              <img src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/special-sale-ad-template-design-2cd0286a2af3ec0f1a6a98009dc155f7_screen.jpg?ts=1585987167' className='ig2'></img>
              </Link>
            </div>
            <Link to="/Homekitchen">
            <button>Explore now</button>
            </Link>
          </div>

          <div className='sml-container1'>
            <div className='mini-box2'>
              <h2>Minimum 50% off | Home, kitchen & more</h2>
            </div>
            <div className='imgs'>
              <Link to="/Homekitchen">
              <img src='https://i.pinimg.com/originals/c1/9d/05/c19d051b4293b7c932357eb77801512f.jpg' className='ig'></img>
              </Link>
              <Link to="/Homekitchen">
              <img src='https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/ef07524d26dc989fc1449b831693d2e6.jpg?imageView2/2/w/500/q/70/format/webp' className='ig'></img>
              </Link>
            </div>
            <div className='imgs'>
            <Link to="/Homekitchen">
              <img src='https://th.bing.com/th/id/OIP.Uk1TNk46rDsPjrkKtesutQHaHS?w=169&h=180&c=7&r=0&o=5&pid=1.7' className='ig'></img>
              </Link>
              <Link to="/Homekitchen">
              <img src='https://growthdevil.com/wp-content/uploads/2022/07/Home-Decor-Products-1024x1024.jpg' className='ig'></img>
              </Link>
            </div>
            <Link to="/Homekitchen">
            <button>See all Deals</button>
            </Link>
          </div>
          <div className='sml-container1'>
            <div className='mini-box2'>
              <h2>Up to 65% off | Electronics & Accessories</h2>
            </div>
            <div className='emj'>
              <Link to="/Mobile">
              <img src='https://img.freepik.com/premium-photo/futuristic-gadgets-showcase-lineup-sleek-modern-technological-devices_977107-682.jpg' className='ig3'></img>
        
              </Link>
              </div>
            <Link to="/Electronics">
            <button>See all Deals</button>
            </Link>
          </div>
          <div className="two-box" >
            <div className='sml-container2'>
              <div className='mini-box2'>
                <h2>sign in for your best <br></br>experience</h2>
                <Link to="/Ctabutton">
                <button className="bttn">Sign in Securely</button>
                </Link>
              </div>
            </div>
            <div className='sml-container3'>
              <div className='mini-box2'>
              <Link to="/Electronics">
                <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/phone-sale-design-template-18a7ebf6b43288d3dc2d118bf441436b_screen.jpg?ts=1689022825" className="photo"></img>
                </Link>
                <div className="iphone">
                  <p>Apple iphone XR (128GB)-White</p>
                  <span>★★★★☆ 30,876</span>
                  <Link to="/Electronics">
                  <button>Shop now</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Slider />
      <div className="cntain">
        <div className="s-cntain">
          <h2>Fashion's Top Deals
            <i class="fa-solid fa-arrow-right"></i>
          </h2>
          <div className="smi-contain">
            <div className="box-contain">
              <Link to="/Women">
              <img src="https://th.bing.com/th/id/OIP.RJ5SbulfXxMhxd8wmakBRQHaJ4?w=184&h=245&c=7&r=0&o=5&pid=1.7"></img>
              </Link>
              <p>Women's Jeans</p>
              <Link to="/Women">
              <button>Special Offer</button>
              </Link>
            </div>
            <div className="box-contain">
            <Link to="/Women">
              <img src="https://i.pinimg.com/originals/f9/82/db/f982db8b29c53bfb67e9868c0dbe2378.png"></img>
              </Link>
              <p>Women's Top</p>
              <Link to="/Women">
              <button>Specials</button>
              </Link>
            </div>
          </div>
          <br></br>
          <div className="smi-contain">
            <div className="box-contain">
            <Link to="/Women">
              <img src="https://th.bing.com/th/id/OIP.S7o58PHcRcOahgto59V7rgHaJ4?w=184&h=245&c=7&r=0&o=5&pid=1.7"></img>
              </Link>
              <p>kurti Set's</p>
              <Link to="/Women">
              <button>Top Sales</button>
              </Link>
            </div>
            <div className="box-contain">
            <Link to="/Women">
              <img src="https://th.bing.com/th/id/OIP.smJQ_ae6WHLZLS1__PPF7QHaJQ?w=184&h=230&c=7&r=0&o=5&pid=1.7"></img>
              </Link>
              <p>Women's Saree</p>
              <Link to="/Women">
              <button>Best Deals</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="s-cntain">
          <h2>Home Decor Items
            <i class="fa-solid fa-arrow-right"></i>
          </h2>
          <div className="smi-contain">
            <div className="box-contain">
            <Link to="/HomeKitchen">
              <img src="https://th.bing.com/th/id/OIP.lWn8b4uWwBFtLkKoI_JqeAHaHa?w=191&h=193&c=7&r=0&o=5&pid=1.7"></img>
              </Link>
              <p>FeltHouse Home Decor</p>
              <Link to="/HomeKitchen">
              <button>Special Offer</button>
              </Link>
            </div>
            <div className="box-contain">
            <Link to="/HomeKitchen">
              <img src="https://th.bing.com/th/id/OIP.oJDO6vcVb2iK_QthhnbV-wHaHa?w=201&h=200&c=7&r=0&o=5&pid=1.7"></img>
              </Link>
              <p> Candle Holder</p>
              <Link to="/HomeKitchen">
              <button>Specials</button>
              </Link>
            </div>
          </div>
          <br></br>
          <div className="smi-contain">
            <div className="box-contain">
            <Link to="/HomeKitchen">
              <img src="https://th.bing.com/th/id/OIP.VeyMajeso9i0x2XuZFXTHAHaE8?w=302&h=201&c=7&r=0&o=5&pid=1.7"></img>
              </Link>
              <p>Home wall Decor </p>
              <Link to="/HomeKitchen">
              <button>Top Sales</button>
              </Link>
            </div>
            <div className="box-contain">
            <Link to="/HomeKitchen">
              <img src="https://th.bing.com/th/id/OIP.iXF48fWMQGYKQvO7u0rU_AHaEK?w=289&h=180&c=7&r=0&o=5&pid=1.7"></img>
              </Link>
              <p>Candels</p>
              <Link to="/HomeKitchen">
              <button>Best Deals</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="s-cntain1">
        <Link to="/Women">
          <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/fashion-flyers-design-template-c975b45712b913c19a37321bd1b0eba6_screen.jpg?ts=1655714729"></img>
          </Link>
        </div>
      </div>
      <div className="first-elm">
        <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/140/image/e19216051bebca38.jpg?q=20" className="top-img"></img>
        <div className="bn">
        <Link to="/Electronics">
          <img src="https://rukminim2.flixcart.com/fk-p-flap/520/280/image/14f021b8c5eb2b29.jpg?q=20"></img>
          </Link>
          <Link to="/HomeKitchen">
          <img src="https://rukminim2.flixcart.com/fk-p-flap/520/280/image/a7f04e14c7a2b0cb.jpg?q=20"></img>
          </Link>
          <Link to="/HomeKitchen">
          <img src="https://rukminim2.flixcart.com/fk-p-flap/520/280/image/bca2e02ceebc1d33.jpg?q=20"></img>
          </Link>
        </div>
        <div className="bn1">
        <Link to="/Electronics">
          <img src="https://rukminim2.flixcart.com/fk-p-flap/520/280/image/e18c043d4850ea40.png?q=20"></img>
          </Link>
          <Link to="/Men">
          <img src="https://rukminim2.flixcart.com/fk-p-flap/520/280/image/99afb9d82d2bf54c.jpg?q=20"></img>
          </Link>
          <Link to="/Men">
          <img src="https://rukminim2.flixcart.com/fk-p-flap/520/280/image/2823e0a99864d91c.jpg?q=20"></img>
          </Link>
        </div>

      </div>
      <AllSlider />
      <Footer/>
    </>
  )
}
export default All;