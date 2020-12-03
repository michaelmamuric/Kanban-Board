import React, { useState, useRef } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import classes from './AddBar.module.css';

const AddBar = (props) => {

    // States
    const [task, setTask] = useState('');
    const ref = useRef();

    const onSubmitHandler = (event) => {
        event.preventDefault();

        if(task.trim() === '') {
            ref.current.focus();
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

export default AddBar;