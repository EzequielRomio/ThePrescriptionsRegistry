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