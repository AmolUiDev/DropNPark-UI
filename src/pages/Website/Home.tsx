import React, { useState } from "react";
import { Button, Container, Row, Col, Carousel } from "react-bootstrap";
import { Link } from 'react-router-dom';
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import FAQ from '../../components/faq'
import Location from '../../img/location.svg';
import call from '../../img/call.svg';
import time from '../../img/time.svg';
import email from '../../img/envelope.svg';
import service1 from '../../img/srvc1.svg';
import service2 from '../../img/srvc2.svg';
import service3 from '../../img/srvc3.svg';
import service4 from '../../img/srvc4.svg';
import service5 from '../../img/srvc5.svg';
import service6 from '../../img/srvc6.svg';
import achive from '../../img/achivement-img.jpg';


const services = [
  {
    img: service1,
    title: "Luggage Assistance",
    description:
      "Help with loading and unloading luggage, including fragile or heavy items.",
  },
  {
    img: service2,
    title: "Car Wash & Detailing",
    description:
      "Exterior wash or full detailing while you’re away. Quick interior cleaning available.",
  },
  {
    img: service3,
    title: "Fuel Top-Up",
    description:
      "Fill up the tank before returning your car. Options for full or minimum fuel levels.",
  },
  {
    img: service4,
    title: "EV Charging",
    description:
      "Electric vehicle charging available for EVs while parked at our facility.",
  },
  {
    img: service5,
    title: "Car Maintenance Checks",
    description:
      "Basic checks like tire pressure, oil level, and windshield washer fluid.",
  },
  {
    img: service6,
    title: "Premium Membership",
    description:
      "Frequent traveler perks with discounted rates, priority valet, and free add-ons.",
  },
];

interface Testimonial {
  name: string;
  role: string;
  feedback: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Chen",
    role: "Business Traveler",
    feedback:
      "Absolutely seamless! Saved me 45 minutes compared to the usual parking shuttle. My car was spotless when I returned.",
    image: "https://i.pravatar.cc/100?img=1",
  },
  {
    name: "Michael Lee",
    role: "Corporate Executive",
    feedback:
      "Exceptional valet service! Fast, friendly, and super convenient. Highly recommend it for frequent travelers.",
    image: "https://i.pravatar.cc/100?img=2",
  },
  {
    name: "Emily Johnson",
    role: "Marketing Manager",
    feedback:
      "Loved the easy drop-off process. The staff was polite and my car was ready the moment I arrived!",
    image: "https://i.pravatar.cc/100?img=3",
  },
];


const Home: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // runs only once when visible
    threshold: 0.3,
  });
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };
  return (
  <div className="home-page">
    <section className='section-testi-achivment section-padding pb-0'>
      <Container>
        <Row>
          <Col md={6}>
            <div className='testimonial-wrap'>
              <div className='heading-wrapper'>
                <h2>Luxurious carriage valet for <span>premium cars</span></h2>
                <p>DropNPark is recognized as an industry leader, delivering elite valet services whether you need them casually or continuously. Our professional chauffeurs maintain strict international standards and provide exceptional communication—ensuring a perfect experience every time you DropNPark.</p>
              </div>
              <div className='testimonial-section'>
                <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          interval={4000}
          controls={false}
          indicators={false}
          slide={true}
          touch={true}
          className="testimonial-carousel"
        >
          {testimonials.map((t, i) => (
            <Carousel.Item key={i}>
              <div className="testimonial-card">
                <div className="quote-icon">“</div>
                <div className="stars">★★★★★</div>
                <p className="feedback">“{t.feedback}”</p>
                <div className="user-info">
                  <img src={t.image} alt={t.name} />
                  <div>
                    <h5>{t.name}</h5>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className='achivment-wrapp'>
              <div className='achive-img'>
                <img src={achive} alt="achivment-image" />
              </div>
              <div className='achivment-wrapper'>
                <Row>
              <div className='heading-wrapper'>
                <h3>Valet parking services You just found it!</h3>
              </div>
                </Row>
                <Row className="counter-row" ref={ref}>
                  <Col xs={12} md={4} className="counter-box">
                    <p className="counter-label">Work Have Done</p>
                    <h3 className="counter-value">
                      {inView && <CountUp end={1} duration={2.5} separator="," suffix="K" />}
                    </h3>
                  </Col>

                  <Col xs={12} md={4} className="counter-box">
                    <p className="counter-label">Award Winnings</p>
                    <h3 className="counter-value">
                      {inView && <CountUp end={11} duration={2.5} />}
                    </h3>
                  </Col>

                  <Col xs={12} md={4} className="counter-box">
                    <p className="counter-label">Happy Clients</p>
                    <h3 className="counter-value">
                      {inView && <CountUp end={1} duration={2.5} separator="," suffix="K" />}
                    </h3>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <section className="services-section section-padding pb-0">
      <Container>
        <Row>
          <Col className="text-center">
            <div className='heading-wrapper'>
              <h2>Additional Services</h2>
            </div>
          </Col>
        </Row>
        <Row className="desktop-view">
          {services.map((service, index) => (
            <Col md={6} lg={4} key={index} className="mb-4">
              <div className="service-card">
                <div className='service-card-info'>
                <div className="icon">
                  <img src={service.img} alt={service.title} />
                </div>
                <div className="content">
                  <h5>{service.title}</h5>
                  <p>{service.description}</p>
                </div>
                </div>
                <Button className="learn-more-btn">LEARN MORE</Button>
              </div>
            </Col>
          ))}
        </Row>

        <div className="mobile-slider">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className='service-card-info'>
                <div className="icon">
                  <img src={service.img} alt={service.title} />
                </div>
              <div className="content">
                <h5>{service.title}</h5>
                <p>{service.description}</p>
              </div>
              </div>
              <Button className="learn-more-btn">LEARN MORE</Button>
            </div>
          ))}
        </div>
      </Container>
    </section>
    <section className='faq-section section-padding'>
      <Container>
        <Row>
          <Col className="text-center">
            <div className='heading-wrapper'>
              <h2>Frequently Asked Questions</h2>
              <p>Everything you need to know about DropNPark</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={8} className='mx-auto text-center'>
          <FAQ/>
          <Button as={Link} to="/" variant="outline-primary" className="main-button section-button">
                            View All FAQ’s
                </Button>
          </Col>
        </Row>
      </Container>
    </section>
    <section className='cta-section'>
      <Container>
        <Row>
          <Col className="text-center">
            <div className='heading-wrapper'>
              <h2>Ready for Stress-Free Travel?</h2>
              <Button as={Link} to="/" variant="outline-primary" className="main-button section-button">
                            Book Your Spot Now
                </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <section className='section-padding contact-section'>
      <Container>
        <Row>
          <Col className="text-center">
            <div className='heading-wrapper'>
              <h2>Find Us</h2>
              <p>Conveniently located at Toronto Pearson International Airport</p>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={7} className="">
            <div className='map-box h-100'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184552.30943582457!2d-79.37805805!3d43.7182412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sin!4v1761454435339!5m2!1sen!2sin" width="100%" height="100%"  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </Col>
          <Col md={5} className="">
            <div className='Contact-details-wrapper'>
              <div className='contact-box'>
                <span>
                  <img src={Location} alt="Location Icon" />
                </span>
                <div className='contact-info'>
                  <h4>Service Location</h4>
                  <p>Toronto Pearson International Airport 6301 Silver Dart Drive Mississauga, ON L5P 1B2, Canada</p>
                </div>
              </div>

              <div className='contact-box'>
                <span>
                  <img src={call} alt="call Icon" />
                </span>
                <div className='contact-info'>
                  <h4>Contact Details</h4>
                  <p>24/7 Customer Service</p>
                  <div className='phone-numbers'>
                    <a href="tel:+15551234567">
                      <span><img src={call} alt="call Icon" /></span>(555) 123-4567</a>
                    <a href="mailto:info@dropnpark.com">
                      <span><img src={email} alt="email Icon" /></span>info@dropnpark.com</a>
                  </div>
                </div>
              </div>

              <div className='contact-box'>
                <span>
                  <img src={time} alt="time Icon" />
                </span>
                <div className='contact-info'>
                  <h4>Operating Hours</h4>
                  <p>Open 24 hours a day<br></br>7 days a week<br></br>365 days a year</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </div>
);
};
export default Home;