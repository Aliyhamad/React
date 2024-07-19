import React, { useState, useEffect } from 'react';
import './Appointment.css';
import axios from 'axios';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    app_date: '',
    app_time: '08:00',
    disease: '',
    selection_doctor: 'Dr. Aliy H. Rashid',
  });

  const [message, setMessage] = useState('');
  const [doctorTimes, setDoctorTimes] = useState({});

  // Fetching doctor's available times on doctor change or date change
  useEffect(() => {
    const fetchDoctorTimes = async () => {
      if (formData.selection_doctor && formData.app_date) {
        try {
          const response = await axios.get(`http://localhost:8080/api/v7/doctor/${formData.selection_doctor}/available-times?date=${formData.app_date}`);
          setDoctorTimes(response.data);
        } catch (error) {
          console.error('Error fetching doctor times:', error);
        }
      }
    };

    fetchDoctorTimes();
  }, [formData.selection_doctor, formData.app_date]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const doctorTime = doctorTimes[formData.app_time];

    // Check if the selected time is already booked for the selected doctor
    if (doctorTime) {
      setMessage('This time is already booked for the chosen doctor. Please choose a different time.');
    } else {
      setMessage('');
      
      const payload = {
        app_date: formData.app_date,
        app_time: formData.app_time,
        disease: formData.disease,
        selection_doctor: formData.selection_doctor,
      };

      try {
        const response = await axios.post('http://localhost:8080/api/v7/appointment', payload);
        console.log('Response:', response.data);
        alert('Appointment booked successfully!');
        setFormData({
          app_date: '',
          app_time: '08:00',
          disease: '',
          selection_doctor: 'Dr. Aliy H. Rashid',
        });
        // Redirect to main/appointment
        window.location.href = '/layout/appointment';
      } catch (error) {
        console.error('Error creating appointment:', error);
        alert('Failed to book appointment. Please try again.');
      }
    }
  };

  return (
    <div className="appointment">
      <h2>Appointment Form</h2>
      <form id="appointmentForm" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="disease">Enter Disease:</label>
          <input
            type="text"
            id="disease"
            name="disease"
            className="input-disease"
            value={formData.disease}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="selection_doctor">Select Doctor:</label>
          <select
            id="selection_doctor"
            name="selection_doctor"
            className="select-doctor"
            value={formData.selection_doctor}
            onChange={handleChange}
            required
          >
            <option value="Dr. Aliy H. Rashid">Dr. Aliy H. Rashid</option>
            <option value="Dr. Abuubakar H. Rashid">Dr. Abuubakar H. Rashid</option>
            <option value="Dr. Salim H. Rashid">Dr. Salim H. Rashid</option>
            <option value="Dr. Rashid H. Rashid">Dr. Rashid H. Rashid</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="app_date">Select Date of Appointment:</label>
          <input
            type="date"
            id="app_date"
            name="app_date"
            className="input-app_date"
            value={formData.app_date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="app_time">Select Time:</label>
          <select
            id="app_time"
            name="app_time"
            className="select-app_time"
            value={formData.app_time}
            onChange={handleChange}
            required
          >
            <option value="08:00">08:00 AM</option>
            <option value="09:00">09:00 AM</option>
            <option value="10:00">10:00 AM</option>
            <option value="11:00">11:00 AM</option>
            <option value="12:00">12:00 PM</option>
            <option value="13:00">01:00 PM</option>
            <option value="14:00">02:00 PM</option>
          </select>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
      <p id="message">{message}</p>
    </div>
  );
};

export default AppointmentForm;
