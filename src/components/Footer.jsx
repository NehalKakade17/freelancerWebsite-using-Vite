import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer
    style={{
      backgroundColor: 'black',  // Dark background color
      color: 'white',  // Text color
      padding: '20px 0',  // Padding for top and bottom
      marginBottom: 'auto',  // Pushes footer to the bottom
    }}
  >
      <Container>
        <Row>
          <Col className="text-center">
            <ul className="list-unstyled">
              <li><a href="/about" className="text-white">About Us</a></li>
              <li><a href="/contact" className="text-white">Contact</a></li>
              <li><a href="/privacy" className="text-white">Privacy Policy</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

