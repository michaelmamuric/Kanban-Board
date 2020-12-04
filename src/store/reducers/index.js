import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import taskReducer from './taskReducer';

// Just one reducer, but can be expanded if needed
const mainReducer = combineReducers({
    task: taskReducer
});

// Persist Configuration
const persistConfig = {
    key: 'root',
    storage
}

export default persistReducer(persistConfig, mainReducer);