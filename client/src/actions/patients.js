import axios from 'axios';

export const postPatient = (patient) => {
    return async (dispatch) => {
        try {
            const res = axios.post(`/patients`, patient);
            const newPatient = (await res).data;
            dispatch({type: 'POST_PATIENT', payload: newPatient})
        } catch (err) {
            console.log((err.response && err.response.data)) 
        }
    }
} 