import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import classes from './AddBar.module.css';

const AddBar = (props) => {

    // Destructure props
    const { addTask } = props;

    // States
    const [task, setTask] = useState('');
    const ref = useRef();

    const onSubmitHandler = (event) => {
        event.preventDefault();

        if(task.trim() === '') {
            ref.current.focus();
        }
        else {
            // Add New Task
            addTask(task);
            // Reset task value
            setTask('');
        }
    }

    return (
        <Form onSubmit={onSubmitHandler}>
            <Form.Group controlId="addForm" className={classes.AddForm}>
                <Form.Control type="text" placeholder="Enter Task" ref={ref}
                    value={task} onChange={(event) => setTask(event.target.value)} 
                />
                &nbsp;
                <Button variant="success" type="submit">Add</Button>
            </Form.Group>
        </Form>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTask: (task) => dispatch(actions.addTask(task))
    }
}

export default connect(null, mapDispatchToProps)(AddBar);