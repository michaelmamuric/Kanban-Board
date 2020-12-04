import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import ListGroup from 'react-bootstrap/ListGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import Empty from '../Empty/Empty';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import classes from '../Dashboard.module.css';

const BacklogTasks = (props) => {

    // Destructure props
    const { backlogTasks, deleteFromBacklog, moveToInProgress } = props;

    // Default element to render
    let element = <Empty />;

    // Render when at least one task is found
    if(backlogTasks.length > 0) {
        element = (
            <ListGroup className={classes.ListGroupMobile}>
            <TransitionGroup>
            {
                backlogTasks.map((task, index) => {
                    return (
                        <CSSTransition appear key={index} timeout={1000} classNames="Task">
                            <ListGroup.Item className={classes.ListGroup}>
                                {task}
                                <Dropdown>
                                    <Dropdown.Toggle variant="success">
                                        Action
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={() => moveToInProgress(index)}>Move to In Progress</Dropdown.Item>
                                        <Dropdown.Item onClick={() => deleteFromBacklog(index)}>Delete</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </ListGroup.Item>
                        </CSSTransition>
                    );
                })
            }
            </TransitionGroup>
            </ListGroup>
        );
    }

    return element;
}

const mapStateToProps = (state) => {
    return {
        backlogTasks: state.task.backlogTasks
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteFromBacklog: (index) => dispatch(actions.deleteFromBacklog(index)),
        moveToInProgress: (origIndex) => dispatch(actions.moveToInProgress(origIndex))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BacklogTasks);