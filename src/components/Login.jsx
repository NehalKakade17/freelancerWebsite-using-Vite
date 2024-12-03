import { useState } from "react";
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  // State for form data
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Handle form data change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validation function
  const validateForm = () => {
    const newErrors = {};

    // Email validation (required and valid email format)
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    // Password validation (required)
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const users = JSON.parse(localStorage.getItem('users')) || [];

      // Find the user with matching credentials
      const user = users.find(
        (user) => user.email === formData.email && user.password === formData.password
      );

      if (user) {
        // If user is found, navigate to home page
        setMessage('Login successful!');
        onLogin();
        setTimeout(() => {
          navigate('/'); // Redirect after 2 seconds
        }, 2000);
      } else {
        setMessage('Invalid credentials');
      }
    }
  };

  return (
    <Container
    className="d-flex justify-content-center"
      style={{ minHeight: '100vh' }}>
         <div className="w-100" style={{ maxWidth: '400px' }}>
      <h2 className="my-4 text-center">Log In</h2>

      {/* Login Form */}
      <Form onSubmit={handleSubmit}>
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
          Log In
        </Button>
      </Form>

      {/* Message display */}
      {message && (
        <Row className="mt-4">
          <Col className="text-center">
            <p className={message === 'Login successful!' ? 'text-success' : 'text-danger'}>
              {message}
            </p>
          </Col>
        </Row>
      )}

      {/* Toggle between Login and Sign-Up */}
      <Row className="mt-4">
        <Col className="text-center">
          <span>
            Don't have an account?{' '}
            <Link to="/signup" style={{ textDecoration: 'none' }}>
              Sign Up
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

export default Login;

