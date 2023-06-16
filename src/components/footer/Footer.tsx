import React from "react";
import "./Footer.scss";
import logo from "../../assets/icons/logo.svg";
import vk from "../../assets/icons/icons-vk.svg";
import facebook from "../../assets/icons/icons-facebook.svg";
import instagram from "../../assets/icons/icons-instagram.svg";


function Footer() {
  return (
    <div className="footer">
      <div className="footer_wrap">
        <div className="footer_container">
          <div className="footer_section_company">
            <div className="footer_section_company_logo">
              <img
                className="footer_section_company_img"
                src={logo}
                alt="logo_images"
              />
              <p className="footer_section_company_title">the loop</p>
            </div>
            <p className="footer_main_discription">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              faucibus egestas elit, at eleifend elit ornare ut.
            </p>
          </div>
          <div className="footer_section_link">
            <div className="footer_section_navbar">
              <h3 className="footer_section_title">Основные ссылки</h3>
              <ul className="footer_section_list">
                <li className="footer_section_item">
                  <a href="/">О компании</a>
                </li>
                <li className="footer_section_item">
                  <a href="/">Каталог</a>
                </li>
                <li className="footer_section_item">
                  <a href="/">Доставка</a>
                </li>
                <li className="footer_section_item">
                  <a href="/">Оплата</a>
                </li>
              </ul>
            </div>
            <div className="footer_section_category">
              <h3 className="footer_section_title">Категории</h3>
              <ul className="footer_section_list">
                <li className="footer_section_item">
                  <a href="/">Мужская одежда</a>
                </li>
                <li className="footer_section_item">
                  <a href="/">Женская одежда</a>
                </li>
                <li className="footer_section_item">
                  <a href="/">Детская одежда</a>
                </li>
                <li className="footer_section_item">
                  <a href="/">Для животных</a>
                </li>
              </ul>
            </div>
            <div className="footer_section_useful_link">
              <h3 className="footer_section_title">ПОЛЕЗНЫЕ ССЫЛКИ</h3>
              <ul className="footer_section_list">
                <li className="footer_section_item">
                  <a href="/">Таблица размеров</a>
                </li>
                <li className="footer_section_item">
                  <a href="/">Блог о моде</a>
                </li>
                <li className="footer_section_item">
                  <a href="/">Наша миссия</a>
                </li>
              </ul>
            </div>
            <div className="footer_section_social">
              <h3 className="footer_section_title">СОЦ СЕТИ</h3>
              <ul className="footer_section_list">
                <li className="footer_section_item">
                  <a className="footer_social_link" href="/">
                    <img
                      className="footer_social_icons"
                      src={vk}
                      alt="social_icons"
                    />
                    VK.com
                  </a>
                </li>
                <li className="footer_section_item">
                  <a className="footer_social_link" href="/"> 
                    <img
                      className="footer_social_icons"
                      src={facebook}
                      alt="social_icons"
                    />
                    Facebook
                  </a>
                </li>
                <li className="footer_section_item">
                  <a className="footer_social_link" href="/">
                    <img
                      className="footer_social_icons"
                      src={instagram}
                      alt="social_icons"
                    />
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_copyright">
        <p>Copyright © 2019. Все права защищены</p>
        <p>Политика приватности</p>
      </div>
    </div>
  );
}

export default Footer;
