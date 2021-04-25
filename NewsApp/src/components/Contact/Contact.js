import React from "react";
import "./contact.scss";

const Contact = () => {
  return (
    <main className="main">
      <div className="contact-wrapper">
        <div className="block-data">
          <h2 className="block-data__number">
            <a href="tel:+380951116726">+38 (095) 1116726</a>
          </h2>
          <div className="block-data__name line-blue">Александр Каверин</div>
          <div className="block-data__mail">
            <a href="mailto:kaverin125@gmail.com">kaverin125@gmail.com</a>
          </div>
          <div className="block-data__skills">JavaScript разработчик</div>
          <p className="block-data__skills-subtitle">
            ES5, ES6, <span>React</span>
          </p>
        </div>
        <div className="block-img">
          <img src="img-contact/Rectangle 9.png" alt="картинка контакта" />
        </div>
      </div>
    </main>
  );
};

export default Contact;
