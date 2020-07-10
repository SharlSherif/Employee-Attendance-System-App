import { combineReducers } from 'redux';
import {
    SET_USER,
    MODIFY_COUNTER,
    MODIFY_SITEDETAILS,
    SIGN_IN_OFFICE,
    NETWORK_STATUS
} from './actions'

// const views = [
//     'scan',
//     'signedin',
// ]

const INITIAL_STATE = {
    currentView: 'scan',
    counter: null,
    siteDetails: null,
    user: null,
    network_status: true,
    auth: false,
    isSignedIntoOffice: false
};

const appReducer = (state = INITIAL_STATE, action) => {
    // console.log('Action Dispatched : ', action)
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.payload.user,
                auth: action.payload.auth
            }
        case MODIFY_COUNTER:
            return {
                ...state,
                counter: action.payload
            }
        case MODIFY_SITEDETAILS:
            return {
                ...state,
                siteDetails: action.payload
            }
        case SIGN_IN_OFFICE:
            return {
                ...state,
                isSignedIntoOffice: action.payload
            }
        case NETWORK_STATUS:
            console.log(action)
            return {
                ...state,
                network_status: action.payload
            }
        default:
            return state
    }
};

export default combineReducers({
    app: appReducer,
});