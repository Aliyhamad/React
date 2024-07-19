import React from 'react';
import './ForgotPassword.css';

class ForgotPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      newPassword: '',
      confirmPassword: '',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    if (this.state.newPassword !== this.state.confirmPassword) {
      alert("Passwords do not match");
    } else {
      // Submit form
      alert("Form submitted successfully");
      window.location.href = '/'; // Redirect to login page
    }
  };

  render() {
    return (
      <div className="container">
        <div className="card">
          <div className="card-header">
            <b>FORGOT PASSWORD</b>
          </div>
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email address:</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="newPassword">New Password:</label>
                <input
                  type="password"
                  className="form-control"
                  id="newPassword"
                  placeholder="New Password"
                  value={this.state.newPassword}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  value={this.state.confirmPassword}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <center><button type="submit" className="btn btn-primary">Submit</button></center>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ForgotPassword;
