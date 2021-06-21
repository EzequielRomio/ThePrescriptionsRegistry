import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
//import swal from 'sweetalert';

//import PrescriptionImg from './PrescriptionImg.jsx';
import {getPrescriptionsByPatient, getPatients} from '../../actions/index.js';
//import {hasErrors, setErrorMessage} from '../../helpers/index.js';
import './Prescriptions.css';


const showPatients = (patients, handleChange) => {
    return patients.map(patient => {
        return (
            <option value={patient.id} key={patient.id} onChange={handleChange}>{patient.name} {patient.lastName}</option>
        )
    })
}


const ShowPrescriptions = () => {
    const dispatch = useDispatch();
    const prescriptions = useSelector((state) => state.prescriptionsReducer.prescriptionsByPatient);
    const patients = useSelector((state) => state.patientsReducer.patients);

    useEffect(() => {
        patients && patients.length === 0 && dispatch(getPatients())
    })

    const handleChange = (e) => {
        e.preventDefault();
        dispatch(getPrescriptionsByPatient(e.target.value))
    }

    return (
        <div id='showPrescriptions'>
            <h4>Select Patient</h4>
            <select name='patientId' onChange={handleChange}>
                {patients && patients.length > 0 && showPatients(patients, handleChange)}
            </select>
            {prescriptions && prescriptions.length > 0 && prescriptions.map((prescription, ix) => {
                return (
                    <div key={ix}>
                        {Object.keys(prescription).map(field => {
                            return (
                                <h5 key={field}>{field}: {prescription[field]}</h5>
                            )
                        })}
                    </div>
                )
            })}
            {console.log(prescriptions)}
            {prescriptions && prescriptions.length > 0 && prescriptions[0] === 'no matches' && (<h4>No Matches</h4>)}
        </div>
    )
}

export default ShowPrescriptions;