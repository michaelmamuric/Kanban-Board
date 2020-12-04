import * as actionTypes from '../actions/actions';

const initialState = {
    backlogTasks: [],
    inProgressTasks: []
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_NEW_TASK: {
            return {
                ...state,
                backlogTasks: state.backlogTasks.concat(action.task)
            }
        }
        case actionTypes.DELETE_FROM_BACKLOG: {
            return {
                ...state,
                backlogTasks: state.backlogTasks.filter((_, index) => index !== action.index)
            }
        }
        // From Backlog to In Progress
        case actionTypes.MOVE_TO_IN_PROGRESS: {
            return {
                ...state,
                inProgressTasks: state.inProgressTasks.concat(state.backlogTasks[action.origIndex]),
                backlogTasks: state.backlogTasks.filter((_, index) => index !== action.origIndex)
            }
        }
        default:
            return state;
    }
}

export default reducer;