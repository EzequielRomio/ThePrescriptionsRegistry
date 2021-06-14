import React, {useState, useEffect} from 'react';
import swal from 'sweetalert';

import './Patients.css';

const validateBody = (inputs) => {
    const errors = {}
    if (inputs.name && inputs.name.length < 4) { errors.name = 'Name must have at least 4 letters' };
    if (inputs.lastName && inputs.lastName.length < 2) { errors.lastName = 'Last Name must have at least 2 letters'} 
    if (inputs.hasOwnProperty('age') && inputs.age < 1) { errors.age = 'Age cant be minor than 1'}

    return errors
}

const hasErrors = (errors) => {
    return Object.keys(errors).length > 0;
}

const setErrorMessage = (errors) => {
    let message = ''
    Object.keys(errors).forEach(error => message += errors[error] + '\n')
    return message
}

const CreatePatient = () => {
    const [inputs, setInputs] = useState({});
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        e.preventDefault();
        setInputs({
            ...inputs,
            [e.target.name]: (e.target.name === 'age' && parseInt(e.target.value)) || e.target.value   
        })
        setErrors(validateBody({
            ...inputs,
            [e.target.name]: (e.target.name === 'age' && parseInt(e.target.value)) || e.target.value  
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!hasErrors(errors)) {
            // post patient
            swal({ 
                title: "Patient Created", 
                text: `Patient ${inputs.name} ${inputs.lastName}`,
                icon: "success",
                timer: 3000,
                padding: "0.75rem"
                });
        } else {
            swal({
                title: "Error",
                text: setErrorMessage(errors),
                icon: "warning",
                timer: 8000,
                padding: "0.75rem" 
            })
        }
    }

    return (
        <div id='createPatient' className='h3Font'>
            <h2 className='subtitleFont subtitles'>Create new Patient</h2>
            <h3>Complete the following fields</h3>
            <form onSubmit={handleSubmit}>

                <h4>Insert Name</h4>
                <input onChange={handleChange} type='text' name='name' placeholder='Name' required></input>
                
                <h4>Insert Last Name</h4>
                <input onChange={handleChange} type='text' name='lastName' placeholder='Last Name' required></input>
                
                <h4>Insert Age</h4>
                <input onChange={handleChange} type='number' name='age' placeholder='Age' required></input>
                
                <label for='provider'><h4>Choose a Health Care Provider</h4></label>
                <select onChange={handleChange} name='provider'>
                    <option value='Medi Care'>Medi Care</option>
                    <option value='Dominus In Salute'>Dominus In Salute</option>
                    <option value='Mediline Plus'>Mediline Plus</option>
                    <option value='Swiss Medical'>Swiss Medical</option>
                </select>
                
                <h4>Insert Email</h4>
                <input type='email'></input>

                <input type='submit' value='Create' className='submitButton'></input>
            </form>
        </div>
    )
}

export default CreatePatient;
