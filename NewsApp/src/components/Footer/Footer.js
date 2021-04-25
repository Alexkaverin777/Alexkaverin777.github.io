import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-title">
        <h4 className="block-title__title">Новостник</h4>
        <span className="block-title__subtitle">Single Page Application</span>
      </div>
      <div className="footer-project">
        <span className="footer-project__text">Дипломный проект</span>
      </div>
      <div className="developed">
        <span className="developed__subtitle">Made by</span>
        <h4 className="developed__title">Александр Каверин</h4>
      </div>
    </footer>
  );
};

export default Footer;
