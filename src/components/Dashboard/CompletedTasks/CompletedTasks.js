import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import { TrashFill } from 'react-bootstrap-icons';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Empty from '../Empty/Empty';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import classes from '../Dashboard.module.css';

const CompletedTasks = (props) => {

    // Destructure props
    const { completedTasks, deleteFromDone } = props;

    // Default element to render
    let element = <Empty />;

    // Render when at least one task is found
    if(completedTasks.length > 0) {
        element = (
            <ListGroup className={classes.ListGroupMobile}>
            <TransitionGroup>
            {
                completedTasks.map((task, index) => {
                    return (
                        <CSSTransition appear key={index} timeout={1000} classNames="Task">
                            <ListGroup.Item key={index} className={classes.ListGroup}>
                                <div className={classes.Complete}>
                                    {task}
                                </div>
                                <Button variant="success" onClick={() => deleteFromDone(index)}> 
                                    <TrashFill size={18} />
                                </Button>
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
        completedTasks: state.task.completedTasks
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteFromDone: (index) => dispatch(actions.deleteFromDone(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CompletedTasks);