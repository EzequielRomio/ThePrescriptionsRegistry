import React from 'react';
import { useSelector } from 'react-redux';

import Menu from '../Menu/Menu.jsx';
import CreatePatient from './CreatePatient.jsx';

import './Patients.css';

const Patients = () => {

    const menuOption = useSelector((state) => state.globalReducer.menuOption)

    return (
        <div id='patients'>
            <div className='titleMenuContainer' style={{backgroundImage: 'url(https://www.ucsfbenioffchildrens.org/-/media/project/ucsf/ucsf-bch/images/service/hero/patient-relations-2x.jpg?h=1112&w=2880&hash=695EC03B1382A578B05A04CB0661D2FB)'}}>
                <div className='smooth'>
                    <h1 className='titleFont'>Patients</h1>
                    <Menu typeOfMenu={'patients'} />
                    <div className='paddingBottom'></div>
                </div>
            </div>

            <div className='largeSeparator'></div>


            <div id='patientsBottom'>
                {menuOption === 'Create new Patient' && <CreatePatient />} 
            </div>
        </div>
    )
}

export default Patients;