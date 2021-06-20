import {combineReducers} from 'redux'

import prescriptionsReducer from './prescriptions.js';
import patientsReducer from './patients.js';

const initialState = {
    menuOption: null,
};

const globalReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_MENU_OPTION': 
            return {
                ...state,
                menuOption: action.payload
            }

        default:
            return state
    }
}

const rootReducer = combineReducers({
    globalReducer,
    prescriptionsReducer,
    patientsReducer
})

export default rootReducer;
