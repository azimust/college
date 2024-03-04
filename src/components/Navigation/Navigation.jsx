import React from "react";
import './Navigation.css'
import logo from '../../assets/LOGO.png';

const Navigation = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__body">
          <div className="header__title">
            <img src={logo} alt="" />
            <h2>Колледж ИГУ <br /> им. Касыма Тыныстанова</h2>
          </div>

          <nav className="header__nav">
            <ul className="nav__list">
              <li className="nav__item">Lorem ipsum dolor</li>
              <li className="nav__item">2</li>
              <li className="nav__item">34</li>
              <li className="nav__item">45</li>
              <li className="nav__item">5</li>
              <li className="nav__item">5</li>
              <li className="nav__item">6</li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
