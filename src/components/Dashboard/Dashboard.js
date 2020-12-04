import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import BacklogTasks from './BacklogTasks/BacklogTasks';
import InProgressTasks from './InProgressTasks/InProgressTasks';
import CompletedTasks from './CompletedTasks/CompletedTasks';

const Dashboard = (props) => {
    return (
        <Container fluid>
            <Row>
                <Col xs={12} sm={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Backlog Tasks</Card.Title>
                            <BacklogTasks />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>In Progress Tasks</Card.Title>
                            <InProgressTasks />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Completed Tasks</Card.Title>
                            <CompletedTasks />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Dashboard;