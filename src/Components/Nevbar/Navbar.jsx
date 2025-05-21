import React, { useState } from "react";
import "./Navbar.css";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { FaBarsStaggered } from "react-icons/fa6";
import { LiaTimesSolid } from "react-icons/lia";

const Navbar = ({ theme, setTheme }) => {
  const [active, setActive] = useState("Home");
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <nav>
      <div className="Container nav-area">
        <div className="nav-logo">
          <h2>Car Rental</h2>
        </div>
        <ul className={`nav-menu ${menu ? "" : "hide-menu"}`}>
          {["Home", "About", "Cars", "Services", "Booking", "Contact"].map(
            (item) => (
              <li
                key={item}
                onClick={() => setActive(item)}
                className={active === item ? "active" : ""}
              >
                <a href={`#${item.toLowerCase()}`}>{item}</a>
              </li>
            )
          )}
        </ul>

        <div className="dark-light-mode ">
          {theme === "dark" ? (
            <MdLightMode onClick={() => setTheme("light")} />
          ) : (
            <MdDarkMode onClick={() => setTheme("dark")} />
          )}
        </div>
        <div className="menu-bar" onClick={toggleMenu}>
          {menu ? <LiaTimesSolid /> : <FaBarsStaggered />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
