import React from 'react';

import './Menu.css'

const setMenuData = (typeOfMenu) => {
    if (typeOfMenu === 'prescriptions') {
        return [
            'Create Prescription', 
            'Show Prescription', 
            'Modify Prescription', 
            'Search Prescriptions by Patient', 
            'Delete Prescription'
        ]
    }
    if (typeOfMenu === 'patients') {
        return [
            'Create new Patient',
            'Show Patients list',
            'Modify Patient data',
            'Delete Patient'
        ]
    } 
} 

const showMenu = (typeOfMenu) => {
    const dataToDisplay = setMenuData(typeOfMenu);
    return (
        <div id='menuButtons'>
            {dataToDisplay.map((option, ix) => {return (
                <button key={ix}>
                    <h3 className='h3Font'>
                        {option}
                    </h3>
                </button>
            )})}
        </div>
    )
}

const Menu = ({typeOfMenu}) => {
    // menu types: 
    //    'prescriptions'
    //    'patients'
    //    'community'

    return (
        <div id='menu'>
            {showMenu(typeOfMenu)}
        </div>
    )
}

export default Menu;