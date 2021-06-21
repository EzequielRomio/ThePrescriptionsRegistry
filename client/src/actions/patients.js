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
            dispatch({type: 'POST_PATIENT', payload: patient})
        } catch (err) {
            console.log((err.response && err.response.data)) 
        }
    }
} 

export const getPatients = () => {
    return async (dispatch) => {
        try {
            const res = await axios.get(`/patients`);
            console.log(res)
            const patients = res.data
            for (const patient of patients) {
                patient.lastName = patient.last_name;
            }
            dispatch({type: 'GET_PATIENTS', payload: res.data});
        } catch (err) {
            console.log((err.response && err.response.data));
        }
    }
}