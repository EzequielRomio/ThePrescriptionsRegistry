const initialState = {
    prescriptions: []
};

const prescriptionsReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'POST_PRESCRIPTION':
            return {
                ...state,
                prescriptions: [...state.prescriptions, action.payload]
            }

        default:
            return state
    }
}

export default prescriptionsReducer;
