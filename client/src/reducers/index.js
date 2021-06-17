import {combineReducers} from 'redux'

import prescriptionsReducer from './prescriptions.js';

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
    prescriptionsReducer
})

export default rootReducer;
