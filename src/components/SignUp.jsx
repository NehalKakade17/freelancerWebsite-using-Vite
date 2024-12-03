import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  // State for form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const validateForm = () => {
    const newErrors = {};

    // Name validation (required)
    if (!formData.name) {
        newErrors.name = 'Name is required';
      } else if (!/^[a-zA-Z\s]*$/.test(formData.name)) {
        newErrors.name = 'Name cannot contain numbers or special characters';
      }else if (formData.name.length < 2) {
        newErrors.name = 'Name must be at least 2 characters long';
      }

    // Email validation (required and valid email format)
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    // Password validation (required and minimum length of 6 characters)
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; // Return true if no errors
  };
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  // Handle form data change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
        existingUsers.push(formData);
        localStorage.setItem('users', JSON.stringify(existingUsers));
        setMessage('Sign-up successful! Please log in.');
  
        // Simulate sign-up logic and redirect to login after successful sign-up
        setTimeout(() => {
          navigate('/login');
        }, 2000); // Wait for 2 seconds before redirecting
      } 
  };

  return (
    <Container
    className="d-flex justify-content-center"
      style={{ minHeight: '100vh' }}>
        <div className="w-100" style={{ maxWidth: '400px' }}>
      <h2 className="my-4">Sign Up</h2>

      {/* Sign-Up Form */}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            isInvalid={!!errors.name}
            style={{ width: '400px' }}
          />
          <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formEmail" className="mt-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            isInvalid={!!errors.email}
            style={{ width: '400px' }}
          />
           <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formPassword" className="mt-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            isInvalid={!!errors.password}
            style={{ width: '400px' }}
          />
          <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Sign Up
        </Button>
      </Form>

      {/* Toggle between Sign-Up and Login */}
      {message && (
        <Row className="mt-4">
          <Col className="text-center">
            <p className="text-success">{message}</p>
          </Col>
        </Row>
      )}

      {/* Link to Login page */}
      <Row className="mt-4">
        <Col className="text-center">
          <span>
            Already have an account?{' '}
            <Link to="/Login" style={{ textDecoration: 'none' }}>
              Log In
            </Link>
          </span>
        </Col>
      </Row>

      {/* Link back to Home */}
      <div className="mt-3 text-center">
        <Link to="/">Back to Home</Link>
      </div>
      </div>
    </Container>
  );
};

export default SignUp;



