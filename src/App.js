import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MenuBar from './components/MenuBar/MenuBar';
import AddBar from './components/AddBar/AddBar';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <>
    <MenuBar />
    <Container fluid>
      <Row>
        <Col xs={12}>
          <AddBar />
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default App;
