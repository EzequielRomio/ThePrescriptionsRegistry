import axios from 'axios';

export const postPatient = (patient) => {
    return async (dispatch) => {
        const body = {
            name: patient.name,
            last_name: patient.lastName,
            age: patient.age,
            provider: patient.provider,
            email: patient.email
        }
        try {
            const res = await axios.post(`/patients`, body);
            patient['id'] = res.data.id;
            console.log(patient)
            dispatch({type: 'POST_PATIENT', payload: patient})
        } catch (err) {
            console.log((err.response && err.response.data)) 
        }
    }
} 