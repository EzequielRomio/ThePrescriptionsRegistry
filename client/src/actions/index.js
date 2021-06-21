import {postPatient, getPatients} from './patients.js';
import {postPrescription, getPrescriptionsByPatient} from './prescriptions.js';

const setMenuOption = (payload) => {
    return {type: 'SET_MENU_OPTION', payload}
}

export {
    setMenuOption,

    postPatient,
    getPatients,

    postPrescription,
    getPrescriptionsByPatient
}