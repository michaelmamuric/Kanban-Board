import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import BacklogTasks from './BacklogTasks/BacklogTasks';
import InProgressTasks from './InProgressTasks/InProgressTasks';
import CompletedTasks from './CompletedTasks/CompletedTasks';
import classes from './Dashboard.module.css';

const Dashboard = (props) => {
    return (
        <Container fluid>
            <Row>
                <Col xs={12} sm={4}>
                    <Card className={classes.Card}>
                        <Card.Body>
                            <Card.Title>Backlog Tasks</Card.Title>
                            <BacklogTasks />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={4}>
                    <Card className={classes.Card}>
                        <Card.Body>
                            <Card.Title>In Progress Tasks</Card.Title>
                            <InProgressTasks />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={4}>
                    <Card className={classes.Card}>
                        <Card.Body>
                            <Card.Title>Completed Tasks</Card.Title>
                            <CompletedTasks />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* Only for mobile devices */}
            <Row className={classes.MobileOnly}>
                <Col xs={12}>
                    <Tabs defaultActiveKey="backlog" className={classes.Tabs}>
                        <Tab eventKey="backlog" title="Backlog">
                            <BacklogTasks />
                        </Tab>
                        <Tab eventKey="inProgress" title="In Progress">
                            <InProgressTasks />
                        </Tab>
                        <Tab eventKey="completed" title="Completed">
                            <CompletedTasks />
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </Container>
    );
}

export default Dashboard;