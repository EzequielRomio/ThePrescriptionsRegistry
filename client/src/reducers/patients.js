const initialState = {
    patients: []
}

const patientsReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'POST_PATIENT': 
            return {
                ...state, patients: [...state.patients, action.payload]
            }
        
        case 'GET_PATIENTS':
            return {
                ...state, patients: action.payload
            }

        default:
            return state;
    }
}

export default patientsReducer;