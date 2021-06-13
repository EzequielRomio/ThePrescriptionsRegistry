import React from 'react';

import Menu from '../Menu/Menu.jsx'

import './Prescriptions.css';

const Prescriptions = () => {
    return (
        <div id='prescriptions' >
            <div className='titleMenuContainer' style={{backgroundImage: 'url(https://6ada39ab3e4e4dfd9962-0915b3b9e650afef6a84b370287eeb00.ssl.cf5.rackcdn.com/glasses-prescription-georgia.jpg)'}}>
                <div className='smooth'>
                    <h1 className='titleFont'>Prescriptions</h1>
                    <Menu typeOfMenu={'prescriptions'} />
                    <div className='paddingBottom'></div>
                </div>
            </div>
            
            <div className='largeSeparator'></div>

        </div>
    )
}

export default Prescriptions;