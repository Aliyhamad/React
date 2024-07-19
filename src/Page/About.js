import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about">
      <h1>About Us</h1>
      <h3>Welcome to the SUZA Tunguu Doctor Appointment Online System!</h3>
      <p>
        At SUZA Tunguu, we are dedicated to revolutionizing the way patients connect 
        with healthcare providers. Our online appointment system is designed to make scheduling 
        medical appointments convenient, efficient, and accessible to everyone, from the comfort of their own homes.
      </p>
      <p class= "mission"><b>Our Mission</b></p>
      <p>
        Our mission is to enhance healthcare and simplify the appointment process. 
        We aim to provide a seamless and user-friendly platform that connects patients with qualified doctors, reducing the 
        hassle and time typically associated with booking medical appointments.
      </p>
      <p class= "vission"><b>Our Vision</b></p>
      <p>
        Our vision is a future where accessing healthcare is seamless and stress-free. By continually improving our 
        system and integrating new features, we strive to meet the evolving needs of patients and healthcare providers. 
        Our goal is to set a new standard in the healthcare industry, making quality medical care more accessible to everyone.
      </p>
      <p>
        Thank you for choosing the SUZA Tunguu Doctor Appointment Online System. We are committed to providing you with the best 
        healthcare appointment experience possible. For any inquiries or support, please contact our customer service team.
      </p>
      <b>
        <p className="highlight">
          Together, let’s make healthcare better and more accessible for all.
        </p>
      </b>
    </div>
  );
}

export default About;
