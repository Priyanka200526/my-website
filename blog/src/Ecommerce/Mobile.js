import MobileBackslider from "./MobileBackslider";
import Footer from "./Footer";
import './Website.css';
function Mobile() {
    return (
        <>
            <div className="mobileback">
                <img src="https://sathya.in/Media/Default/Uploaded/March/AM.web.jpg"></img>
            </div>
            <div className="Mobile-container">          
               <h2> Best Deals &#8377;10,000 - &#8377;15,000</h2>
                <div className="mobile-small">
                <img src="https://rukminim1.flixcart.com/flap/375/534/image/9c90327cf28dc6d3.jpg"></img>
                <img src="https://rukminim1.flixcart.com/flap/375/534/image/a27e4c416fca1b6c.jpg"></img>
                <img src="https://rukminim1.flixcart.com/flap/375/534/image/045da0d11c6eafd9.jpg?q=90"></img>
                <img src="https://rukminim1.flixcart.com/flap/375/534/image/273c264cb042247c.jpg"></img>
                </div>                
            </div>
          <div className="mobile-tp">
            <div className="phone">
                <img src="https://ae01.alicdn.com/kf/Hae45b3cc62904e81bceb0a98078fb06cr/Global-Version-Xiaomi-Redmi-Mobile-Phone-Stock-Clearance-Limited-quantity-First-Buy-first-served-smartphone-2.jpg"></img>
            </div>
            <div className="phone1">
                <img src="https://funender.com/wp-content/uploads/2020/10/Smartphones-in-2020.jpg"></img>
            </div>
          </div>
          <MobileBackslider/>
      

          <div className="cntain">
        <div className="s-cntain">
          <h2>Apples Mobile Phone

          </h2>
          <div className="smi-contain">
            <div className="box-contain">
              <img src="https://i5.walmartimages.com/asr/4b82505c-9988-4bde-b2fb-e899a8aa345a.115ed912d260407419bccf8f859442b0.jpeg"></img>
              <p>&#8377;54,000</p>
              <button>Special Offer</button>
            </div>
            <div className="box-contain">
              <img src="https://dvf83rt16ac4w.cloudfront.net/upload/product/20231231_1703997040_380184.jpeg"></img>
              <p>&#8377;94,000</p>
              <button>Specials</button>
            </div>
          </div>
          <br></br>
          <div className="smi-contain">
            <div className="box-contain">
            <img src="https://brain-images-ssl.cdn.dixons.com/1/4/10168741/u_10168741.jpg"></img>
              
              <p>&#8377;78,900</p>
              <button>Top Sales</button>
            </div>
            <div className="box-contain">
            <img src="https://www.bdstall.com/asset/product-image/giant_118765.jpg"></img>
              <p>&#8377;44,4000</p>
              <button>Best Deals</button>
            </div>
          </div>
        </div>

        <div className="s-cntain">
          <h2>Sumsung Brands
          </h2>
          <div className="smi-contain">
            <div className="box-contain">
              <img src="https://i5.walmartimages.com.mx/mg/gm/3pp/asr/cf05c8fd-9177-4f88-a194-7a5f660bed7f.0ab64f758e0eb6af421e43bcb4682ea8.png?odnHeight=2000&odnWidth=2000&odnBg=ffffff"></img>
              <p>44,999</p>
              <button>Special Offer</button> 
            </div>
            <div className="box-contain">
              <img src="https://th.bing.com/th/id/OIP.O-gRqcByJK1mGi5PGsL57AHaHa?rs=1&pid=ImgDetMain"></img>
              <p> 35,990</p>
              <button>Specials</button>
            </div>
          </div>
          <br></br>
          <div className="smi-contain">
            <div className="box-contain">
              <img src="https://th.bing.com/th/id/OIP.ML-Whoqck2OOJlHKS-yaSgAAAA?w=400&h=400&rs=1&pid=ImgDetMain"></img>
              <p>22,990</p>
              <button>Top Sales</button>
            </div>
            <div className="box-contain">
              <img src="https://th.bing.com/th/id/OIP.Yr-TVgQ1AOF3p1nw-j1bywHaE8?rs=1&pid=ImgDetMain"></img>
              <p>30,999</p>
              <button>Best Deals</button>
            </div>
          </div>
        </div>

        <div className="s-cntain1">
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Wireless/Honor/HonorGala/Ingress/UpdatedIngress/D9757416_IN_WLM_Honor_Gala_April2019_c-tile_670x700._CB467537223_.jpg"></img>
        </div>
      </div>
      <Footer/>
          
        </>
    )
}
export default Mobile;