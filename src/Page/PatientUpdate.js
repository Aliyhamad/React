import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './PatientUpdate.css';

const PatientUpdate = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [patient, setPatient] = useState({
    patient_name: '',
    patient_email: '',
    phone_number: '',
    patient_course: '',
    patient_password: '',
    username: ''
  });

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:8080/api/v9/patient/${id}`)
        .then(response => {
          setPatient(response.data);
          console.log(response.data);
        })
        .catch(error => {
          console.error('Error fetching patient data:', error);
        });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatient(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      axios.put(`http://localhost:8080/api/v9/patient/${id}`, patient)
        .then(response => {
          navigate('/Main/patient_list');
        })
        .catch(error => {
          console.error('Error updating patient:', error);
        });
    } else {
      axios.post('http://localhost:8080/api/v9/patient', patient)
        .then(response => {
          navigate('/Main/patient_list');
        })
        .catch(error => {
          console.error('Error adding patient:', error);
        });
    }
  };

  return (
    <div className="patient-form-container">
      <h2>{id ? 'Update Patient' : 'Add Patient'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="patient_name">Name:</label>
          <input
            type="text"
            id="patient_name"
            name="patient_name"
            value={patient.patient_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="patient_email">Email:</label>
          <input
            type="email"
            id="patient_email"
            name="patient_email"
            value={patient.patient_email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone_number">Phone Number:</label>
          <input
            type="text"
            id="phone_number"
            name="phone_number"
            value={patient.phone_number}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="patient_course">Course:</label>
          <input
            type="text"
            id="patient_course"
            name="patient_course"
            value={patient.patient_course}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="text"
            id="password"
            name="password"
            value={patient.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={patient.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="patient-group-update">
          <button type="submit" className="btn btn-success">{id ? 'Update' : 'Add'}</button>
          <button type="button" className="btn btn-danger" onClick={() => navigate('/Main/patient_list')}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default PatientUpdate;
