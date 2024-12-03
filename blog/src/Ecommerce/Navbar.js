import React from "react";
import './Website.css';
import { Link } from "react-router-dom";

function Navbar() {

    return (
        <>
            <div className="big-contain">
                <div className="container1">
                    <div className="topnav">
                        <div className="navbar-content">
                            <img src="https://th.bing.com/th/id/OIP.CPJi-_vraiFJ6koJS1PXzAHaFw?w=259&h=200&c=7&r=0&o=5&pid=1.7" className="logo"></img>
                            <div className="search-bar">
                                <input type="text" placeholder="Search for products, brands and more" />
                                <button type="submit" className="search-button">
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                </button>

                            </div>
                            <div className="nav-details">
                                <div >
                                    <i class="fa-solid fa-user"></i>
                                    <Link to="/Loginpage" className="no-underline">
                                        Login
                                    </Link>
                                    <i class="fa-solid fa-caret-down"></i>
                                </div>
                                <div>
                                    <i class="fa-solid fa-cart-shopping"></i>
                                    <span >
                                        Cart
                                    </span>
                                </div>
                                <div className="btn">
                                    <Link to="/Joinbutton">
                                        <button>Join Now</button>
                                    </Link>
                                </div>

                            </div>
                            <div className="icns">
                                <i class="fa-solid fa-bars"></i>
                            </div>
                        </div>

                    </div>

                </div>

                <hr />
                <div className="links">
                    <Link to={"/Men"}>Men</Link>
                    <Link to={"/Women"}>Women</Link>
                    <Link to={"/Electronics"}>Electronics</Link>
                    <Link to={"/Beautytoys"}>Beauty</Link>
                    <Link to={"/Grocery"}>Grocery & Fresh</Link>
                    <Link to={"/HomeKitchen"}>Home & Kitchen</Link>
                    <Link to={"/Mobile"}>Mobile & Accessories</Link>
                </div>
                <hr />
            </div>
        </>

    )
}
export default Navbar;