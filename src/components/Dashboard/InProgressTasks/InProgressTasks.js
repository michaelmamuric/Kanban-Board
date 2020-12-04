import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import ListGroup from 'react-bootstrap/ListGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import Empty from '../Empty/Empty';
import classes from '../Dashboard.module.css';

const InProgressTasks = (props) => {

    // Destructure props
    const { inProgressTasks, moveToDone } = props;

    // Default element to render
    let element = <Empty />;

    // Render when at least one task is found
    if(inProgressTasks.length > 0) {
        element = (
            <ListGroup className={classes.ListGroupMobile}>
            {
                inProgressTasks.map((task, index) => {
                    return (
                        <ListGroup.Item key={index} className={classes.ListGroup}>
                            {task}
                            <Dropdown>
                                <Dropdown.Toggle variant="success">
                                    Action
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={() => moveToDone(index)}>Move to Done</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </ListGroup.Item>
                    );
                })
            }
            </ListGroup>
        );
    }

    return element;
}

const mapStateToProps = (state) => {
    return {
        inProgressTasks: state.task.inProgressTasks
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        moveToDone: (index) => dispatch(actions.moveToDone(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InProgressTasks);