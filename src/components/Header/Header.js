import "./Header.css";
import logo from "../../images/logo-min.svg";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { useEffect, useState } from "react";

export default function Header(props) {
  return (
    <header className="header">
      <img src={logo} alt="Логотип сайта" className="header_logo"></img>
      
      <nav className="header-navigation">
        <ul className="header-navigation-list">
          <li className="header-navigation-link">
            <a href="#how-it-work" className="header-navigation-link">
              Как это работает
            </a>
          </li>
          <li className="header-navigation-link">
            <a href="#thirdBlock" className="header-navigation-link">
              3-й блок
            </a>
          </li>
          <li className="header-navigation-link">
            <a href="#3" className="header-navigation-link">
              Вопросы и ответы
            </a>
          </li>
          <li className="header-navigation-link">
            <a href="#4" className="header-navigation-link">
              Форма
            </a>
          </li>
        </ul>
      </nav>
      <BurgerMenu />
    </header>
  );
}
