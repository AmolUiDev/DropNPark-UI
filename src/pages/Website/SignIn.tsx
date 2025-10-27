import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../img/logo.png';
import close from '../../img/close.svg';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Email: ${email}\nPassword: ${password}`);
  };

  return (
    <div className="sign-in">
      <Container>
        <Row className="position-relative">
          {/* Add close button */}
          <div className="close-btn position-absolute end-0 top-0 ">
            <Button 
              variant="link" 
              onClick={() => navigate('/')}
              className="p-0"
            >
              <img src={close} alt="Close" width="24" height="24" />
            </Button>
          </div>
          
          <Col md={5} className="mx-auto">
            <div className="signin-card">
              <div className="logo text-center">
                <Link to="/">
                  <img src={logo} alt="Drop N Park" className="" />
                </Link>
              </div>

              <h5 className="text-center">Sign In</h5>

              <Form onSubmit={handleSubmit}>
                <Form.Group className="form-group-mb">
                  <Form.Label>Your Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-2">
                  <Form.Label>Your Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>

                <div className="text-end forgot-link">
                  <a href="#" className="">Forgot Password?</a>
                </div>

                <Button type="submit" className="signin-btn w-100">
                  Sign In
                </Button>
              </Form>

              <div className="text-center mt-4 small sign-in-text">
                <p>
                  Are you a travel agent?{" "}
                  <Link to="/" className="accent-link">Access the Travel Agent Sign In</Link>
                </p>
                <hr></hr>
                <p>
                  Not a member?{" "}
                  <Link to="/registration" className="accent-link">Register</Link> and start earning valuable rewards
                  with every stay.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignIn;
