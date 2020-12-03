import { combineReducers } from 'redux';
import taskReducer from './taskReducer';

// Just one reducer, but can be expanded if needed
const mainReducer = combineReducers({
    task: taskReducer
});

export default mainReducer;