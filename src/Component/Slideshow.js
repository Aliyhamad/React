import React, { useEffect, useState } from 'react';
import img01 from './../assets/images/doctor1.jpg';
import img02 from './../assets/images/doctor2.jpg';
import img03 from './../assets/images/doctor3.png';
import img04 from './../assets/images/doctor4.jpg';
import './Slideshow.css';

const Slideshow = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const slides = [
    { src: img01, alt: 'Doctor 1', text: '1 / 4' },
    { src: img02, alt: 'Doctor 2', text: '2 / 4' },
    { src: img03, alt: 'Doctor 3', text: '3 / 4' },
    { src: img04, alt: 'Doctor 4', text: '4 / 4' },
  ];

  const plusSlides = (n) => {
    setSlideIndex((prevIndex) => (prevIndex + n - 1 + slides.length) % slides.length + 1);
  };

  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="slideshow-container">
      <h1>WELCOME TO TUNGUU DOCTOR APPOINTMENT SYSTEM</h1>
      {slides.map((slide, index) => (
        <div className={`mySlides fade ${slideIndex === index + 1 ? 'active' : ''}`} key={index}>
          <div className="numbertext">{slide.text}</div>
          <img 
            src={slide.src} 
            alt={slide.alt} 
            style={{ 
              width: isMobile ? '100%' : '1020px', 
              height: isMobile ? 'auto' : '330px' 
            }} 
          />
        </div>
      ))}
      <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
      <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
      <div style={{ textAlign: 'center' }}>
        {slides.map((_, index) => (
          <span
            className={`dot ${slideIndex === index + 1 ? 'active' : ''}`}
            onClick={() => currentSlide(index + 1)}
            key={index}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
