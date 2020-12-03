import * as actionTypes from '../actions/actions';

const initialState = {
    backlogTasks: []
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_NEW_TASK: {
            return {
                ...state,
                backlogTasks: state.backlogTasks.concat(action.task)
            }
        }
        default:
            return state;
    }
}

export default reducer;