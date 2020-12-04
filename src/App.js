import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import MenuBar from './components/MenuBar/MenuBar';
import AddBar from './components/AddBar/AddBar';
import Dashboard from './components/Dashboard/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  // Set "cookie" (actually localStorage) during first visit
  useEffect(() => {
    if(localStorage.getItem('firstVisit') === null) {
      localStorage.setItem('firstVisit', true);
    }
  }, []);

  // Determine whether to display Alert or not
  const displayAlert = localStorage.getItem('firstVisit') === null;

  // States
  const [alert, setAlert] = useState(displayAlert);

  return (
    <>
    <MenuBar />
    {
      (displayAlert && alert) &&
      <Alert variant="success" onClose={() => setAlert(false)} dismissible>
        Notice: This app uses cookies to manage data locally. Nothing is stored in the server.
      </Alert>
    }
    <Container fluid>
      <Row>
        <Col xs={12}>
          <AddBar />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Dashboard />
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default App;
