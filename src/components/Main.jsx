import cardBtn from "@i/card.svg";
import accountImg from "@i/signUp.svg";
import { useState, useContext } from "react";
import Cart from "../pages/cart/Cart";
import { ShopContext } from "../context/shop-context";
function Header() {
  const [cart, setCart] = useState(false);
  const toggleCart = () => {setCart(!cart)};
  const { getTotalItemsInCart } = useContext(ShopContext);
  const totalItemsInCart = getTotalItemsInCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  return (
    <nav className="nav">
      <div className="nav__content">
        <h1 className="logo">Panto</h1>
        <ul className="nav__list">
          <li>
            <a href="#furniture" className="nav__link">
              Furniture
            </a>
          </li>
          <li>
            <a href="#shop" className="nav__link">
              Shop
            </a>
          </li>
          <li>
            <a href="#about" className="nav__link">
              About Us
            </a>
          </li>
          <li>
            <a href="#contact" className="nav__link">
              Contact Us
            </a>
          </li>
        </ul>
        <ul className="nav__menu">
          <div className="menu">
            <div className={`menu__icon ${menuOpen ? "open" : ""}`} onClick={() => toggleMenu()}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className={`menu__links ${menuOpen ? "open" : ""}`}>
              <li>
                <a href="#furniture" className="nav__link">
                  Furniture
                </a>
              </li>
              <li>
                <a href="#shop" className="nav__link">
                  Shop
                </a>
              </li>
              <li>
                <a href="#about" className="nav__link">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="nav__link">
                  Contact Us
                </a>
              </li>
            </div>
          </div>
        </ul>
        <div className="nav__buttons">
          <button>
            <img src={accountImg} alt="" />
          </button>
          <button onClick={toggleCart} className="cart-btn">
            <img src={cardBtn} alt="" />
            {totalItemsInCart > 0 && (
              <span className="cart-count">{totalItemsInCart}</span>
            )}
          </button>
        </div>
      </div>
      <Cart open={cart} toggleCart={toggleCart} />
    </nav>
  );
}

export default Header;
