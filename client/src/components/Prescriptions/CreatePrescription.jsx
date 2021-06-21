import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import swal from 'sweetalert';

import PrescriptionImg from './PrescriptionImg.jsx';
import {postPrescription, getPatients} from '../../actions/index.js';
import {hasErrors, setErrorMessage} from '../../helpers/index.js';
import './Prescriptions.css';

const validateBody = (inputs) => {
    const errors = {}
    if (inputs.name && inputs.name.length < 4) { errors.name = 'Name must have at least 4 letters' };
    if (inputs.lastName && inputs.lastName.length < 2) { errors.lastName = 'Last Name must have at least 2 letters'} 

    return errors
}

const showPatients = (patients, handleChange) => {
    return patients.map(patient => {
        return (
            <option value={patient.id} key={patient.id} onChange={handleChange}>{patient.name} {patient.lastName}</option>
        )
    })
}

const CreatePrescription = () => {
    const [inputs, setInputs] = useState({});
    const [errors, setErrors] = useState({});
    const patients = useSelector((state) => state.patientsReducer.patients); 

    const dispatch = useDispatch();

    useEffect(() => {
        patients && patients.length === 0 && dispatch(getPatients())
    })

    const handleChange = (e) => {
        console.log(e)
        e.preventDefault();
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value   
        })
        setErrors(validateBody({
            ...inputs,
            [e.target.name]: e.target.value  
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!hasErrors(errors)) {
            // post patient
            dispatch(postPrescription(inputs))
            swal({ 
                title: "Prescription Created", 
                text: `Prescription for patient: ${inputs.name} ${inputs.lastName}`,
                icon: "success",
                timer: 3000,
                padding: "0.75rem"
                });
        } else {
            swal({
                title: "Error",
                text: setErrorMessage(errors),
                icon: "error",
                timer: 8000,
                padding: "0.75rem" 
            })
        }
    }


    return (
        <div id='createPrescription' className='h3Font'>
            <h2 className='subtitleFont subtitles'>Create Prescription</h2>
            <div className='displayFlexRow formImgContainer'>            
                <form onSubmit={handleSubmit}>
                    <h3>Complete the following fields</h3>
                    
                    <h4>Select Patient</h4>
                    <select name='patientId' onChange={handleChange}>
                        {patients && patients.length > 0 && showPatients(patients, handleChange)}
                    </select>

                    <h4>Insert Prescription's Date</h4>
                    <input onChange={handleChange} type='date' name='prescriptionDate' placeholder='Age' required></input>

                    <h4>Right Eye</h4>
                    <input onChange={handleChange} type='text' name='rightEye' placeholder='Right eye' required></input>

                    <h4>Left Eye</h4>
                    <input onChange={handleChange} type='text' name='leftEye' placeholder='Left eye' required></input>

                    <h4>Addition</h4>
                    <input onChange={handleChange} type='text' name='addition' placeholder='Addition'></input>

                    <h4>Doctor's Name</h4>
                    <input onChange={handleChange} type='text' name='doctor' placeholder="Doctor's Name" required></input>

                    <h4>Notes</h4>
                    <textarea onChange={handleChange} name='notes' rows='4' cols='22'></textarea>
                    {/* <input onChange={handleChange} type='text' name='notes' placeholder='Notes' required></input> */}

                    <input type='submit' value='Create' className='submitButton'></input>
                </form>

                <PrescriptionImg dataToDisplay={inputs} />
            
            </div>
            
        </div>
    )
}

export default CreatePrescription;