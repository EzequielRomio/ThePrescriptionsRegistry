import React from 'react';

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
        <div>
            {dataToDisplay.map((title, ix) => {return (
                <button key={ix}>{title}</button>
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
        <div>
            {showMenu(typeOfMenu)}
        </div>
    )
}

export default Menu;