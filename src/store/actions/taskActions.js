import * as actions from './actions';

export const addTask = (task) => {
    return {
        type: actions.ADD_NEW_TASK,
        task
    }
};