import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './DoctorListOnly.css';

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = () => {
    setIsLoading(true);
    axios.get('http://localhost:8080/api/v8/doctor')
      .then(response => {
        setDoctors(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching doctor data:', error);
        setIsLoading(false);
      });
  };

  return (
    <div className="doctor-table-container">
      <h2>Doctor List</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <table id="doctorTable" className="doctor-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Address</th>
              <th>Email</th>
              <th>Specialization</th>
              <th>Phone Number</th>
              <th>Username</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map(doctor => (
              <tr key={doctor.id}>
                <td>{doctor.id}</td>
                <td>{doctor.doctor_name}</td>
                <td>{doctor.doctor_address}</td>
                <td>{doctor.doctor_email}</td>
                <td>{doctor.specialization}</td>
                <td>{doctor.phone_no}</td>
                <td>{doctor.username}</td>
                <td>{doctor.password}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <style>
      </style>
    </div>
  );
};

export default DoctorList;
