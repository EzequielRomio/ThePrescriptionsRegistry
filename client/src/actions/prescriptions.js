import axios from 'axios';

export const postPrescription = (prescription) => {
    return async (dispatch) => {
        const body = {
            patient_id: parseInt(prescription.patientId),
            prescription_date: prescription.prescriptionDate,
            right_eye: prescription.rightEye,
            left_eye: prescription.leftEye,
        }
        prescription.addition && (body.addition = prescription.addition)
        prescription.doctor && (body.doctor = prescription.doctor)
        prescription.notes && (body.notes = prescription.notes)
        try {
            const res = await axios.post(`/prescriptions`, body);
            prescription['id'] = res.data.id;
            console.log(prescription)
            dispatch({type: 'POST_PRESCRIPTION', payload: prescription})
        } catch (err) {
            console.log((err.response && err.response.data)) 
        }
    }
}

export const getPrescriptionsByPatient = (patientId) => {
    return async (dispatch) => {
        const res = await axios.get(`patients/${patientId}/prescriptions`)
        const prescriptions = res.data;
        if (prescriptions.length === 0) {
            dispatch({type: 'GET_PRESCRIPTIONS_BY_PATIENT', payload: ['no matches']})
        } else {
            dispatch({type: 'GET_PRESCRIPTIONS_BY_PATIENT', payload: prescriptions})
        }
    }
}