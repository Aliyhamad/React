import React from 'react';
import axios from 'axios';
import './PatientAccount.css';
import { Navigate } from 'react-router-dom';

class PatientAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      terms: false,
      course: '',
      phoneNumber: '',
      username: ''
    };
  }

  handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;
    this.setState({ [id]: val });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword, terms, course, phoneNumber, username } = this.state;

    // Form validation checks
    if (name === "" || email === "" || password === "" || confirmPassword === "" || !terms || course === "" || phoneNumber === "" || username === "") {
      alert("Please fill out all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Prepare data for POST request
    const formData = {
      patient_name: name,
      patient_email: email,
      phone_number: phoneNumber,
      patient_course: course,
      username: username,
      password: password
    };

    // Send POST request using Axios
    axios.post('http://localhost:8080/api/v9/patient', formData)
      .then(response => {
        alert("Form submitted successfully!");
        // Optionally handle success response
        console.log(response.data);
        // Redirect or perform additional actions here
        window.location.href = '/';
      })
      .catch(error => {
        alert("Failed to submit form. Please try again later.");
        console.error('Error:', error);
      });
  };

  render() {
    const { name, email, password, confirmPassword, terms, course, phoneNumber, username } = this.state;

    return (
      <div className="create_container">
        <h2 className="text-uppercase text-center mb-5">Create Patient Account</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col form-group mb-4">
              <label className="form-label" htmlFor="name">Full Name:</label>
              <input type="text" id="name" className="form-control form-control-lg" value={name} onChange={this.handleChange} />
            </div>
            <div className="col form-group mb-4">
              <label className="form-label" htmlFor="email">Your Email:</label>
              <input type="email" id="email" className="form-control form-control-lg" value={email} onChange={this.handleChange} />
            </div>
          </div>
          <div className="row">
            <div className="col form-group mb-4">
              <label className="form-label" htmlFor="phoneNumber">Phone Number:</label>
              <input type="text" id="phoneNumber" className="form-control form-control-lg" value={phoneNumber} onChange={this.handleChange} />
            </div>
            <div className="col form-group mb-4">
              <label className="form-label" htmlFor="course">Course:</label>
              <input type="text" id="course" className="form-control form-control-lg" value={course} onChange={this.handleChange} />
            </div>
          </div>
          <div className="row">
            <div className="col form-group mb-4">
              <label className="form-label" htmlFor="username">Username:</label>
              <input type="text" id="username" className="form-control form-control-lg" value={username} onChange={this.handleChange} />
            </div>
            <div className="col form-group mb-4">
              <label className="form-label" htmlFor="password">Password:</label>
              <input type="password" id="password" className="form-control form-control-lg" value={password} onChange={this.handleChange} />
            </div>
          </div>
          <div className="row">
            <div className="col form-group mb-4">
              <label className="form-label" htmlFor="confirmPassword">Confirm your password:</label>
              <input type="password" id="confirmPassword" className="form-control form-control-lg" value={confirmPassword} onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-check mb-4">
            <input className="form-check-input me-2" type="checkbox" id="terms" checked={terms} onChange={this.handleChange} />
            <label className="form-check-label" htmlFor="terms">I agree to all statements in the terms</label>
          </div><br />
          <div className="form-group d-grid">
            <center><button type="submit" className="btn btn-success btn-lg gradient-custom-4 text-body">Register</button></center>
          </div>
        </form>
      </div>
    );
  }
}

export default PatientAccount;
