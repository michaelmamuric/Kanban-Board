import * as actions from './actions';

export const addTask = (task) => {
    return {
        type: actions.ADD_NEW_TASK,
        task
    }
}

export const deleteFromBacklog = (index) => {
    return {
        type: actions.DELETE_FROM_BACKLOG,
        index
    }
}

export const moveToInProgress = (origIndex) => {
    return {
        type: actions.MOVE_TO_IN_PROGRESS,
        origIndex
    }
}