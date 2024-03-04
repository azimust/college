import React from "react";
import './Navigation.css'
import logo from '../../assets/LOGO.png';

const Navigation = () => {
  return (
    <header id="header">
      <div className="header-wrapper">
        <div className="header-container">
          <div>
            <div className="logo-name">
              <div className="logo">
                <a href="index.html" title="">
                  <img src={logo} alt="logo" />
                </a>
              </div>
              <div className="name">
                <a href="index.html" title="">
                  <h5>Колледж ИГУ имени</h5>
                  <h5 className="primary-color">К.Тыныстанова</h5>
                </a>
              </div>
            </div>
          </div>
          <div className="header-links">
            <a
              id="loc_icon"
              href="#"
              data-toggle="popover"
              title="Адрес"
              data-content="г. Каракол, ул.Абдрахманова,130
            IV корпус ИГУ, каб. № 220"
              data-placement="bottom"
            >
              <i className="fa fa-map-marker fa-lg" aria-hidden="true"></i>
            </a>
            <a
              id="phone_icon"
              href="#"
              data-toggle="popover"
              title="Номер телефона"
              data-content="+996 3922 52766"
              data-placement="bottom"
            >
              <i className="fa fa-phone fa-lg" aria-hidden="true"></i>
            </a>
            <a
              id="email_icon"
              href="#"
              data-toggle="popover"
              title="Почта"
              data-content="a_orozbekovich@mail. ru"
              data-placement="bottom"
            >
              <i className="fa fa-envelope fa-lg" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
      <nav>
        <div className="navbar navbar-inverse navbar-custom" role="navigation">
          <div className="container">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target=".navbar-collapse"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
            <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
                <li>
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    О КОЛЛЕДЖЕ <b className="caret"></b>
                  </a>
                  <ul className="dropdown-menu multi-level">
                    <li className="active">
                      <a href="about.html">О КОЛЛЕДЖЕ</a>
                    </li>
                    <li>
                      <a>АДМИНИСТРАЦИЯ</a>
                    </li>
                    <li>
                      <a>НАШИ ДОСТИЖЕНИЯ</a>
                    </li>
                    <li>
                      <a>ЦЕННОСТИ</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    ПЦК <b className="caret"></b>
                  </a>
                  <ul className="dropdown-menu multi-level">
                    <li>
                      <a>
                        ПЦК ЕСТЕСТВЕННО МАТЕМАТИЧЕСКИХ И ТЕХНИЧЕСКИХ ДИСЦИПЛИН
                      </a>
                    </li>
                    <li>
                      <a>ПЦК ОБЩЕОБРАЗОВАТЕЛЬНЫХ ДИСЦИПЛИН</a>
                    </li>
                    <li>
                      <a>ПЦК ОБЩЕГУМАНИТАРНЫХ И ПЕДАГОГИЧЕСКИХ ДИСЦИПЛИН</a>
                    </li>
                    <li>
                      <a>ПЦК СОЦИАЛЬНО-ЭКОНОМИЧЕСКИХ ДИСЦИПЛИН</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    УЧЕБНЫЙ ПРОЦЕСС <b className="caret"></b>
                  </a>
                  <ul className="dropdown-menu multi-level">
                    <li>
                      <a>УЧЕБНЫЙ ПЛАН</a>
                    </li>
                    <li>
                      <a>РАСПИАНИЕ I-II ПОЛУГОДИЯ 2023/2024</a>
                    </li>
                    <li>
                      <a>ПОЛИТИКА ВЫСТАВЛЯЕМЫХ ОЦЕНОК</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    СТУДЕНТУ <b className="caret"></b>
                  </a>
                  <ul className="dropdown-menu multi-level">
                    <li>
                      <a>СТУДЕНЧЕСКАЯ ЖИЗНЬ</a>
                    </li>
                    <li>
                      <a>СТУДЕНЧЕСКИЙ СОЮЗ</a>
                    </li>
                    <li>
                      <a>ЗАОЧНОЕ ОТДЕЛЕНИЕ</a>
                    </li>
                    <li>
                      <a>КОНТРАКТНОЕ ОБУЧЕНИЕ</a>
                    </li>
                    <li>
                      <a>МЕДИЦИНСКОЕ ОБСЛУЖИВАНИЕ</a>
                    </li>
                    <li>
                      <a>ОБЩЕЖИТИЕ</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    АБИТУРИЕНТУ <b className="caret"></b>
                  </a>
                  <ul className="dropdown-menu multi-level">
                    <li>
                      <a>СПЕЦИАЛЬНОСТИ</a>
                    </li>
                    <li>
                      <a>ПРИЕМНАЯ КОМИССИЯ</a>
                    </li>
                    <li>
                      <a>ПРОФОРИЕНТАЦИЯ</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>КОНТАКТЫ</a>
                </li>
                <li>
                  <a href="gallery.html">ГАЛЕРЕЯ</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
