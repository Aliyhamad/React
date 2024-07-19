import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const role = localStorage.getItem('storedRole');

  return (
    <div className="topnav">
      <Link className="active" to="Home2">Home</Link>
      <Link to="about">About</Link>
      <Link to="contact">Contact</Link>
      {role !== 'doctor' && <Link to="appointment">Booking</Link>}
      {role !== 'doctor' && <Link to="appointment_only">Check appointment</Link>}
      {/* <Link to="doctor_list_only">Doctor Information</Link> */}
      {role !== 'doctor' && <Link to="patient_list_only">Patient Information</Link>}
      {role !== 'patient' && <Link to="for_doc_appointment">Appointments</Link>}
      
      
      <div className="pembe">
        <a href="/">Log out</a>
      </div>
    </div>
  );
};

export default Navbar;
