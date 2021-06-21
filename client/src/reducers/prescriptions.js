import { parseCase } from "../helpers/index.js";

const initialState = {
    prescriptions: [],
    prescriptionsByPatient: []
};

const prescriptionsReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'POST_PRESCRIPTION':
            return {
                ...state,
                prescriptions: [...state.prescriptions, action.payload]
            }
        case 'GET_PRESCRIPTIONS_BY_PATIENT':
            return {
                ...state,
                prescriptionsByPatient: (action.payload[0] === 'no matches' && action.payload) || parseCase(action.payload)
            }

        default:
            return state
    }
}

export default prescriptionsReducer;
