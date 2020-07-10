import { combineReducers } from 'redux';

// const views = [
//     'scan',
//     'signedin',
// ]

const INITIAL_STATE = {
    currentView: 'login'
};

const appReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'login':
            return { ...state, currentView: 'login' }
        case 'success':
            return { ...state, currentView: 'success' }
        case 'error':
            return { ...state, currentView: 'error' }
        default:
            return state
    }
};

export default combineReducers({
    app: appReducer,
});