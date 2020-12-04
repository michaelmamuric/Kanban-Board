import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import { TrashFill } from 'react-bootstrap-icons';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import classes from '../Dashboard.module.css';

const CompletedTasks = (props) => {

    // Destructure props
    const { completedTasks, deleteFromDone } = props;

    return (
        <ListGroup className={classes.ListGroupMobile}>
        {
            completedTasks.map((task, index) => {
                return (
                    <ListGroup.Item key={index} className={classes.ListGroup}>
                        <div className={classes.Complete}>
                            {task}
                        </div>
                        <Button variant="success" onClick={() => deleteFromDone(index)}> 
                            <TrashFill size={18} />
                        </Button>
                    </ListGroup.Item>
                );
            })
        }
        </ListGroup>        
    )
}

const mapStateToProps = (state) => {
    return {
        completedTasks: state.task.completedTasks
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteFromDone: (index) => dispatch(actions.deleteFromDone(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CompletedTasks);