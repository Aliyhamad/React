import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './For_patient_app_update.css';

const AppointmentForm = () => {
    const [appointment, setAppointment] = useState({
        app_date: '',
        app_time: '',
        disease: '',
        selection_doctor: 'Dr. Aliy H. Rashid',
    });
    const navigate = useNavigate();
    const { id } = useParams();
    const isAddMode = !id;

    useEffect(() => {
        if (!isAddMode) {
            axios.get(`http://localhost:8080/api/v7/appointment/${id}`)
                .then(response => {
                    const appointmentData = response.data;
                    setAppointment({
                        app_date: appointmentData.app_date,
                        app_time: appointmentData.app_time,
                        disease: appointmentData.disease,
                        selection_doctor: appointmentData.selection_doctor,
                    });
                })
                .catch(error => console.error('Error fetching appointment:', error));
        }
    }, [isAddMode, id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAppointment(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            ...appointment,
        };

        try {
            if (isAddMode) {
                await axios.post('http://localhost:8080/api/v7/appointment', payload);
            } else {
                await axios.put(`http://localhost:8080/api/v7/appointment/${id}`, payload);
            }
            navigate('/Main/appointment_list');
        } catch (error) {
            console.error(`Error ${isAddMode ? 'adding' : 'updating'} appointment:`, error.response);
        }
    };

    const handleCancel = () => {
        navigate('/Main/appointment_list');
    };

    return (
        <form className="appointment-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="app_date">Date</label>
                <input
                    type="date"
                    id="app_date"
                    name="app_date"
                    value={appointment.app_date}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="app_time">Time</label>
                <input
                    type="time"
                    id="app_time"
                    name="app_time"
                    value={appointment.app_time}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="disease">Disease</label>
                <input
                    type="text"
                    id="disease"
                    name="disease"
                    value={appointment.disease}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="selection_doctor">Doctor</label>
                <select
                    id="selection_doctor"
                    name="selection_doctor"
                    value={appointment.selection_doctor}
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
                <button type="submit" className="save-button">{isAddMode ? 'Add' : 'Update'}</button>
                <button type="button" className="cancel-button" onClick={handleCancel}>Cancel</button>
            </div>
        </form>
    );
};

export default AppointmentForm;
