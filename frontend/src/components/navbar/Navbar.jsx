import React from "react";
import { Link } from "react-router";
const Navbar = () => {
  return (
    <div>
      <div className="navbar-container">
        <div className="logo"></div>
        <ul className="navlist">
          <div className="navlist-item">
            <Link to="/home">Home</Link>
          </div>

          <div className="navlist-item">
            <Link to="/shop">Shop</Link>
          </div>
          <div className="navlist-item">
            <Link to="promotion">Promotion</Link>
          </div>
          <div className="navlist-item">
            <Link to="/pages">Pages</Link>
          </div>
          <div className="navlist-item">
            <Link to="/blog">Blog</Link>
          </div>
          <div className="navlist-item">
            <Link to="/contact">Contact</Link>
          </div>
          <div className="navlist-item">
            <Link to="/admin">Admin</Link>
          </div>
          <div className="navlist-item">
            <Link to="/wishlist">Wishlist</Link>
          </div>
          <div className="navlist-item">
            <Link to="/basket">Basket</Link>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
