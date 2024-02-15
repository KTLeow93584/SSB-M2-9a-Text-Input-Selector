import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { useEffect, useRef } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';

function App() {
  const firstInputRef = useRef();
  const secondInputRef = useRef();

  const handleFocusFirstInput = () => {
    firstInputRef.current.focus();
  };

  const handleFocusSecondInput = () => {
    secondInputRef.current.focus();
  };

  // Autofocus first input field when component mounts.
  useEffect(() => {
    firstInputRef.current.focus();
  }, []);

  return (
    <Container fluid className="mt-5">
      <Row className="d-flex flex-column align-items-center">
        <Col className="col-12 d-flex justify-content-center mt-3 mb-3">
          <input ref={firstInputRef} type="text" />
        </Col>
      </Row>
      <Row className="d-flex flex-column align-items-center">
        <Col className="col-12 d-flex justify-content-center mb-3">
          <Button variant="primary" onClick={handleFocusFirstInput}>
            Click On Me To Focus on the Input Field Above Me
          </Button>
        </Col>
      </Row>
      <Row className="d-flex flex-column align-items-center">
        <Col className="col-12 d-flex justify-content-center mb-3">
          <input ref={secondInputRef} type="text" />
        </Col>
      </Row>
      <Row className="d-flex flex-column align-items-center">
        <Col className="col-12 d-flex justify-content-center mb-3">
          <Button variant="primary" onClick={handleFocusSecondInput}>
            Click On Me To Focus on the Input Field Above Me
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default App
