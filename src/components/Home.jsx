import React, { useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import video from './video.mp4';

const Home = () => {
  // Create separate hover state for each card
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseEnter = (cardId) => {
    setHoveredCard(cardId);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <main>
      {/* Hero Section */}
      <section
        className="hero text-white text-center py-5 position-relative"
        style={{
          height: '100vh',
          position: 'relative',
          backgroundColor: 'white',
        }}
      >
        <video
          autoPlay
          loop
          muted
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            background: 'rgba(0,0,0,0.5)',
            zIndex: '-1',
          }}
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Floating text */}
        <Container className="hero-content position-absolute top-50 start-50 translate-middle">
          <h1 className="display-4">Welcome to FreelancerApp</h1>
          <p className="lead">Find top freelancers for your projects or explore exciting opportunities today!</p>
        </Container>
      </section>

      {/* About Us Section */}
      <section className="about-us py-5">
        <Container>
          <Row>
            <Col md={6}>
              <h2>About Us</h2>
              <p>We help connect clients with freelancers to build amazing projects...</p>

              {/* About Us Card with Hover Zoom Effect */}
              <Card
                className="zoom-card"
                style={{
                  cursor: 'pointer',
                  border: 'none',
                }}
                onMouseEnter={() => handleMouseEnter('aboutUs')}
                onMouseLeave={handleMouseLeave}
              >
                <div style={{ overflow: 'hidden', position: 'relative' }}>
                  <Card.Img
                    variant="top"
                    src="https://images.unsplash.com/photo-1597239451147-f163967b8581?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA4fHxmcmVlbGFuY2V8ZW58MHx8MHx8fDA%3D"
                    alt="About Us"
                    style={{
                      objectFit: 'cover',
                      height: '500px',
                      width: '100%',
                      transition: 'transform 0.3s ease', // Apply transition for smooth zoom effect
                      transform: hoveredCard === 'aboutUs' ? 'scale(1.1)' : 'scale(1)', // Zoom effect on hover
                    }}
                  />
                </div>
                <Card.Body>
                  <Card.Title>Our Mission</Card.Title>
                  <Card.Text>
                    We are committed to providing the best platform to connect freelancers with clients.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6}>
              <h2>Why Choose Us?</h2>
              <p>Our platform offers a wide variety of freelancers...</p>

              {/* Why Choose Us Card with Hover Zoom Effect */}
              <Card
                className="zoom-card"
                style={{
                  cursor: 'pointer',
                  border: 'none',
                }}
                onMouseEnter={() => handleMouseEnter('whyChooseUs')}
                onMouseLeave={handleMouseLeave}
              >
                <div style={{ overflow: 'hidden', position: 'relative' }}>
                  <Card.Img
                    variant="top"
                    src="https://plus.unsplash.com/premium_photo-1664199486328-e5d95cab0fcd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY1fHxmcmVlbGFuY2V8ZW58MHx8MHx8fDA%3D"
                    alt="Why Choose Us"
                    style={{
                      objectFit: 'cover',
                      height: '500px',
                      width: '100%',
                      transition: 'transform 0.3s ease', // Apply transition for smooth zoom effect
                      transform: hoveredCard === 'whyChooseUs' ? 'scale(1.1)' : 'scale(1)', // Zoom effect on hover
                    }}
                  />
                </div>
                <Card.Body>
                  <Card.Title>Our Value</Card.Title>
                  <Card.Text>
                    With FreelancerApp, you get access to a growing pool of talented freelancers.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Freelancing Courses Section */}
      <section className="freelancing-courses py-5 bg-light">
        <Container>
          <h2 className="text-center mb-4">Freelancing Courses</h2>
          <Row>
            {/* Web Designer Course Card */}
            <Col md={4}>
              <Card
                className="zoom-card"
                style={{
                  cursor: 'pointer',
                  border: 'none',
                }}
                onMouseEnter={() => handleMouseEnter('webDesigner')}
                onMouseLeave={handleMouseLeave}
              >
                <div style={{ overflow: 'hidden', position: 'relative' }}>
                  <Card.Img
                    variant="top"
                    src="https://media.licdn.com/dms/image/D4E12AQF9i-Uq5XisAw/article-cover_image-shrink_720_1280/0/1709227147692?e=2147483647&v=beta&t=ql2osBEf-AqFVU2DN-S9wA2MRryUdMgR2gXoQTjmxLw"
                    alt="Web Designer"
                    style={{
                      objectFit: 'cover',
                      height: '500px',
                      width: '100%',
                      transition: 'transform 0.3s ease', // Apply transition for smooth zoom effect
                      transform: hoveredCard === 'webDesigner' ? 'scale(1.1)' : 'scale(1)', // Zoom effect on hover
                    }}
                  />
                </div>
                <Card.Body>
                  <Card.Title>Web Designer</Card.Title>
                  <Card.Text>
                    Learn the latest techniques in web design and create stunning websites.
                  </Card.Text>
                  <Link to="/web-design-course">
                    <Button variant="primary">Discover Now</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>

            {/* Graphic Designer Course Card */}
            <Col md={4}>
              <Card
                className="zoom-card"
                style={{
                  cursor: 'pointer',
                  border: 'none',
                }}
                onMouseEnter={() => handleMouseEnter('graphicDesigner')}
                onMouseLeave={handleMouseLeave}
              >
                <div style={{ overflow: 'hidden', position: 'relative' }}>
                  <Card.Img
                    variant="top"
                    src="https://media.licdn.com/dms/image/v2/D4D12AQGPYtrVaXp5LQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1706194480448?e=2147483647&v=beta&t=l6i131XBKoxUKRGoL8V50JztOSv88pROJVhKbLRx668"
                    alt="Graphic Designer"
                    style={{
                      objectFit: 'cover',
                      height: '500px',
                      width: '100%',
                      transition: 'transform 0.3s ease', // Apply transition for smooth zoom effect
                      transform: hoveredCard === 'graphicDesigner' ? 'scale(1.1)' : 'scale(1)', // Zoom effect on hover
                    }}
                  />
                </div>
                <Card.Body>
                  <Card.Title>Graphic Designer</Card.Title>
                  <Card.Text>
                    Master the art of graphic design, including logo creation, branding, and digital design.
                  </Card.Text>
                  <Link to="/graphic-design-course">
                    <Button variant="primary">Discover Now</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>

            {/* 3D Artist Course Card */}
            <Col md={4}>
              <Card
                className="zoom-card"
                style={{
                  cursor: 'pointer',
                  border: 'none',
                }}
                onMouseEnter={() => handleMouseEnter('threeDArtist')}
                onMouseLeave={handleMouseLeave}
              >
                <div style={{ overflow: 'hidden', position: 'relative' }}>
                  <Card.Img
                    variant="top"
                    src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/298012302/original/cbde16c874888119a557a250de6c768502ced899/create-realistic-3d-art-for-you-using-midjourney-ai.png"
                    alt="3D Artist"
                    style={{
                      objectFit: 'cover',
                      height: '500px',
                      width: '100%',
                      transition: 'transform 0.3s ease', // Apply transition for smooth zoom effect
                      transform: hoveredCard === 'threeDArtist' ? 'scale(1.1)' : 'scale(1)', // Zoom effect on hover
                    }}
                  />
                </div>
                <Card.Body>
                  <Card.Title>3D Artist</Card.Title>
                  <Card.Text>
                    Learn how to create immersive 3D models and animations.
                  </Card.Text>
                  <Link to="/3d-artist-course">
                    <Button variant="primary">Discover Now</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action (Sign Up) */}
      <section className="py-5 text-center">
        <Container>
          <h3>New to FreelancerApp? Sign Up Now!</h3>
          <Link to="/signup">
            <Button variant="primary">Sign Up</Button>
          </Link>
        </Container>
      </section>
    </main>
  );
};

export default Home;
