import React from 'react';
import Form from 'react-bootstrap/Form';

const AddBar = (props) => {
    return (
        <Form.Group controlId="addForm">
            <Form.Label>Task</Form.Label>
            <Form.Control type="text" placeholder="Add Task" />
        </Form.Group>
    );
};

export default AddBar;