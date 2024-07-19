// ContactUs.js
import React from 'react';
import './Contact.css';
import contact_img1 from './../assets/images/phone.jpg';
import contact_img2 from './../assets/images/facebook.jpg';
import contact_img3 from './../assets/images/Instagram.jpg';
import contact_img4 from './../assets/images/telegram.png';
import contact_img5 from './../assets/images/whatsap.jpg';
import contact_img6 from './../assets/images/email.jpg';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p><b>For any inquiries or support, please contact our customer service team</b></p>
      <ul className="contact-list">
        <li>
          <img src={contact_img1} alt="Phone Icon" />
          <a href="tel:+255778753638">+255 778 753 638</a>&nbsp;/&nbsp;<a href="tel:+255622323069">+255 622 323 069</a>
        </li>
        <li>
          <img src={contact_img2}alt="Facebook Icon" />
          <a href="https://www.facebook.com/aliyhamad">Aliy Hamad</a>
        </li>
        <li>
          <img src={contact_img3} alt="Instagram Icon" />
          <a href="https://www.instagram.com/aliyhamad0773/">@aliyhamad0773</a>
        </li>
        <li>
          <img src={contact_img6} alt="Email Icon" />
          <a href="aliyhamad0773@gmail.com">aliyhamad0773@gmail.com</a>
        </li>
        <li>
          <img src={contact_img4}alt="Telegram Icon" />
          <a href="https://t.me/aliyhamad">Aliy Hamad</a>
        </li>
        <li>
          <img src={contact_img5}alt="WhatsApp Icon" />
          <a href="https://wa.me/255622323069?text=Hello,%20I'm%20interested%20in%20your%20services!">0622 323 069</a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
