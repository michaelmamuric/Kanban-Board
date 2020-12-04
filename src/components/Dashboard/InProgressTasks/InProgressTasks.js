import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import ListGroup from 'react-bootstrap/ListGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import classes from '../Dashboard.module.css';

const InProgressTasks = (props) => {

    // Destructure props
    const { inProgressTasks } = props;

    return (
        <ListGroup >
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
                                <Dropdown.Item>Move to Done</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </ListGroup.Item>
                );
            })
        }
        </ListGroup>        
    )
}

const mapStateToProps = (state) => {
    return {
        inProgressTasks: state.task.inProgressTasks
    }
}

/*
const mapDispatchToProps = (dispatch) => {
    return {
        deleteFromBacklog: (index) => dispatch(actions.deleteFromBacklog(index))
    }
}*/

export default connect(mapStateToProps, null)(InProgressTasks);