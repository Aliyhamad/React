import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AppointmentOnly.css';

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8080/api/v7/appointment')
      .then(response => {
        setAppointments(response.data);
        console.log("data is here", response.data);
      })
      .catch(error => {
        console.error('Error fetching appointment data:', error);
      });
  }, []);

  const handleUpdateAppointment = (id) => {
    navigate(`/layout/appointmentUpdate/${id}`);
  };

  const handleDeleteAppointment = (id) => {
    axios.delete(`http://localhost:8080/api/v7/appointment/${id}`)
      .then(response => {
        setAppointments(appointments.filter(appointment => appointment.id !== id));
      })
      .catch(error => {
        console.error('Error deleting appointment:', error);
      });
  };

  return (
    <div className="appointment-table-container">
      <h2>Appointment List</h2>
      <table id="appointmentTable" className="appointment-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Disease</th>
            <th>Doctor</th>
            <th>Date</th>
            <th>Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map(appointment => (
            <tr key={appointment.id}>
              <td>{appointment.id}</td>
              <td>{appointment.disease}</td>
              <td>{appointment.selection_doctor}</td>
              <td>{appointment.app_date}</td>
              <td>{appointment.app_time}</td>
              <td>
                <button onClick={() => handleUpdateAppointment(appointment.id)}>Update</button>
                <button className="delete" onClick={() => handleDeleteAppointment(appointment.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentList;
