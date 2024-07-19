import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="topnav">
      <Link className="active" to="Home">Home</Link>
      <Link to="about">About</Link>
      <Link  to ="appointment_list">View appointment</Link>
      <Link to ="doctor_list">Doctors</Link>
      <Link to ="patient_list">Patients</Link>
      <Link to ="contact">Contact</Link>
        <div className="pembe">
            <a href="/">Log out</a>
        </div>
    </div>
    
  );
};

export default Navbar;
