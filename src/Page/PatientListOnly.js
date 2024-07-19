import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './PatientList.css';

const PatientTable = () => {
    const [patients, setPatients] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchPatients();
    }, []);

    const fetchPatients = () => {
        axios.get('http://localhost:8080/api/v9/patient')
            .then(response => {
                setPatients(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error fetching patient data:', error);
            });
    };

    return (
        <div className="patient-table-container">
            <h2>Patient List</h2>
            <table id="patientTable" className="patient-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Course</th>
                        <th>Username</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {patients.map(patient => (
                        <tr key={patient.id}>
                            <td>{patient.id}</td>
                            <td>{patient.patient_name}</td>
                            <td>{patient.patient_email}</td>
                            <td>{patient.phone_number}</td>
                            <td>{patient.patient_course}</td>
                            <td>{patient.username}</td>
                            <td>{patient.password}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PatientTable;
