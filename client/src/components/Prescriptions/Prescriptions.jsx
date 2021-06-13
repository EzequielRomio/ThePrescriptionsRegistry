import React from 'react';

import Menu from '../Menu/Menu.jsx'

import './Prescriptions.css';

const Prescriptions = () => {
    return (
        <div id='prescriptions' >
            <div className='titleMenuContainer'>
                <div className='smooth'>
                    <h1 className='titleFont'>Prescriptions</h1>
                    <Menu typeOfMenu={'prescriptions'} />
                    <div className='paddingBottom'></div>
                </div>
            </div>
            
        </div>
    )
}

export default Prescriptions;