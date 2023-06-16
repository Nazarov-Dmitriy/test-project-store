import React, { useState } from "react";
import "./Navbar.scss";
import polygon from "../../../assets/icons/polygon.svg";
import logo from "../../../assets/icons/logo.svg";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [menuShow, setMenuShow] = useState(false);
  const navigate = useNavigate();

  function navigateMain() {
    navigate(`/`);
  }

  function showMenu(e: any): void {
    e.target.classList.contains("nav-icon")
      ? e.target.classList.toggle("nav-icon-close")
      : e.target.parentElement.classList.toggle("nav-icon-close");

    setMenuShow(!menuShow);
  }


  return (
    <div className="navbar">
      <div className="nav-icon" onClick={(e) => showMenu(e)}>
        <div></div>
      </div>
      <ul className={menuShow ? "menu_list menu_list_show" : "menu_list"}>
        <Link className="link_development" to="/page-in-development">
          <li className="menu_item">
            Для мужчин
            <span>
              <img src={polygon} alt="menu-icons" />
            </span>
          </li>
        </Link>
        <Link className="link_development" to="/page-in-development">
          <li className="menu_item">
            Для женщин
            <span>
              <img src={polygon} alt="menu-icons" />
            </span>
          </li>
        </Link>

        <Link className="link_development" to="/page-in-development">
          <li className="menu_item">
            Для детей
            <span>
              <img src={polygon} alt="menu-icons" />
            </span>
          </li>
        </Link>
      </ul>
      <div className="menu_logo" onClick={()=>navigateMain()}>
          <span>
            <img className="menu_logo_icons" src={logo} alt="menu-icons" />
          </span>
          <p className="menu_logo_text"> the loop</p>
      </div>
      <ul className={menuShow ? "menu_list menu_list_show" : "menu_list"}>
        <Link className="link_development" to="/page-in-development">
          <li className="menu_item">
            Оплата
            <span>
              <img src={polygon} alt="menu-icons" />
            </span>
          </li>
        </Link>
        <Link className="link_development" to="/page-in-development">
          <li className="menu_item">
            Доставка
            <span>
              <img src={polygon} alt="menu-icons" />
            </span>
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
