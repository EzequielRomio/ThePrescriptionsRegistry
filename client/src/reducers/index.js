import {combineReducers} from 'redux'

const initialState = {};

const globalReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state
    }
}

const rootReducer = combineReducers({
    globalReducer
})

export default globalReducer;