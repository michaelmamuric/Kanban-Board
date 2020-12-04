import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import MenuBar from './components/MenuBar/MenuBar';
import AddBar from './components/AddBar/AddBar';
import Dashboard from './components/Dashboard/Dashboard';
import Footer from './components/Footer/Footer';
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
      /* Display Alert if "cookie" isn't set yet, and if Alert has not been dismissed */
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
    <Footer />
    </>
  );
}

export default App;
