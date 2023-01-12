import { Button, Col , Form , Row } from "react-bootstrap";
import { Link } from "react-router-dom"
import MainScreen from "../../components/MainScreen";
import "./LoginScreen.css";

const LoginScreen = () => {
  return (
    <MainScreen title="LOGIN">
      <div className="loginContainer">
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <Row className="py-3">
            <Col>
            New Customer ? <Link to="/register">Register Here</Link>
            </Col>
        </Row>
      </div>
    </MainScreen>
  );
};

export default LoginScreen;
