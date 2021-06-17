import {combineReducers} from 'redux'

<<<<<<< HEAD
const initialState = {};

const globalReducer = (state = initialState, action) => {
    switch(action.type) {
=======
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

>>>>>>> 956b549c9794df442402997fab6c5f1a1c3c731b
        default:
            return state
    }
}

const rootReducer = combineReducers({
<<<<<<< HEAD
    globalReducer
})

export default globalReducer;
=======
    globalReducer,
    prescriptionsReducer
})

export default rootReducer;
>>>>>>> 956b549c9794df442402997fab6c5f1a1c3c731b
