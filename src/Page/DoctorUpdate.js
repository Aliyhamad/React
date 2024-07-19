import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './DoctorUpdate.css';

const DoctorUpdate = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [doctor, setDoctor] = useState({
    doctor_name: '',
    doctor_address: '',
    doctor_email: '',
    specialization: '',
    phone_no: '',
    username: '',
    password: '',
  });

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:8080/api/v8/doctor/${id}`)
        .then(response => {
          setDoctor(response.data);
          console.log(response.data);
        })
        .catch(error => {
          console.error('Error fetching doctor data:', error);
        });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDoctor(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      axios.put(`http://localhost:8080/api/v8/doctor/${id}`, doctor)
        .then(response => {
          navigate('/Main/doctor_list');
        })
        .catch(error => {
          console.error('Error updating doctor:', error);
        });
    } else {
      axios.post('http://localhost:8080/api/v8/doctor', doctor)
        .then(response => {
          navigate('/Main/doctor_list');
        })
        .catch(error => {
          console.error('Error adding doctor:', error);
        });
    }
  };

  return (
    <div className="doctor-form-container">
      <h2>{id ? 'Update Doctor' : 'Add Doctor'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="doctor_name">Name:</label>
          <input
            type="text"
            id="doctor_name"
            name="doctor_name"
            value={doctor.doctor_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="doctor_address">Address:</label>
          <input
            type="text"
            id="doctor_address"
            name="doctor_address"
            value={doctor.doctor_address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="doctor_email">Email:</label>
          <input
            type="email"
            id="doctor_email"
            name="doctor_email"
            value={doctor.doctor_email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="specialization">Specialization:</label>
          <input
            type="text"
            id="specialization"
            name="specialization"
            value={doctor.specialization}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="doctor_phone">Phone Number:</label>
          <input
            type="text"
            id="doctor_phone"
            name="phone_no"
            value={doctor.phone_no}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="doctor_phone">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={doctor.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="doctor_phone">Password:</label>
          <input
            type="text"
            id="password"
            name="password"
            value={doctor.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="doctor-form-group">
          <button type="submit" className="btn btn-success">{id ? 'Update' : 'Add'}</button>
          <button type="button" className="btn btn-danger" onClick={() => navigate('/Main/doctor_list')}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default DoctorUpdate;
