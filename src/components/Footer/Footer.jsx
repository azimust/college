import React from "react";
import './Footer.css';
import logo from '../../assets/LOGO.png';

const Footer = () => {
  return (
    <footer>
      <div class="footer-wrapper">
        <span class="logo">
          <img src={logo} alt="" />
        </span>
        <div class="row">
          <div class="col-sm-4 address">
            <strong>Адрес : </strong>г. Каракол, ул.Абдрахманова,130 IV корпус
            ИГУ, каб. № 220
          </div>
          <div class="col-sm-4 links">
            <div>
              <a>Новости</a>
              <i class="seperator"></i>
              <a>Объявление</a>
              <i class="seperator"></i>
              <a>События</a>
            </div>
            <div>
              <a href="#">Главная</a>
              <i class="seperator"></i>
              <a>Студенту</a>
              <i class="seperator"></i>
              <a>Абитуриенту</a>
            </div>
            <div>
              <a>ПЦК</a>
              <i class="seperator"></i>
              <a>Миссия Колледжа</a>
              <i class="seperator"></i>
              <a>Учебный процесс</a>
            </div>
          </div>
          <div class="col-sm-4 footer-social">
            <a href="#!">
              <i class="fa fa-facebook" aria-hidden="true" title="Facebook"></i>
            </a>
            <a href="#!">
              <i
                class="fa fa-instagram"
                aria-hidden="true"
                title="Instagram"
              ></i>
            </a>
            <a href="#!">
              <i class="fa fa-whatsapp" aria-hidden="true" title="Whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
