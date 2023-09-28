import "./BurgerMenu.css";
import logoBlack from "../../images/Logo_black.svg";
import arrowIcon from "../../images/arrowIcon.png";
import React, { useEffect, useState } from "react";

export default function BurgerMenu(props) {
  const [checked, setChecked] = useState(false);

  const toggleMenu = () => {
    setChecked(!checked);
  };

  return (
    <div className="burger-menu">
      <input
        id="menu-toggle"
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <label
        className="menu-btn"
        htmlFor="menu-toggle"
        id="burger-menu-checkbox"
      >
        <span></span>
      </label>

      <ul className="menubox">
        <label
          className="menu-btn"
          htmlFor="menu-toggle"
          id="burger-menu-checkbox"
        >
          <span></span>
        </label>
        <img src={logoBlack} alt="Логотип сайта" className="menu-logo"></img>
        <li>
          <a className="menu-item" href="#how-it-work" onClick={toggleMenu}>
            Как это работает
            {<img
                src={arrowIcon}
                alt="icon"
                className="menu-item-arrow-icon"
              />}
          </a>
        </li>
        <li>
          <a className="menu-item" href="#thirdBlock" onClick={toggleMenu}>
            3-й блок
            {<img
                src={arrowIcon}
                alt="icon"
                className="menu-item-arrow-icon"
              />}
          </a>
        </li>
        <li>
          <a className="menu-item" href="#3" onClick={toggleMenu}>
            Вопросы и ответы
            {<img
                src={arrowIcon}
                alt="icon"
                className="menu-item-arrow-icon"
              />}
          </a>
        </li>
        <li>
          <a className="menu-item" href="#4" onClick={toggleMenu}>
            Форма
            {<img
                src={arrowIcon}
                alt="icon"
                className="menu-item-arrow-icon"
              />}
          </a>
        </li>
      </ul>
    </div>
  );
}
