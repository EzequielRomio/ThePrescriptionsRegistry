import React from 'react';
import {useDispatch} from 'react-redux';

import {setMenuOption} from '../../actions';
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

const showMenu = (typeOfMenu, handleClick) => {
    const dataToDisplay = setMenuData(typeOfMenu);
    return (
        <div id='menuButtons'>
            {dataToDisplay.map((option, ix) => {return (
                <button key={ix} onClick={(e) => handleClick(e)}>
                    <h3 className='h3Font'>
                        {option}
                    </h3>
                </button>
            )})}
        </div>
    )
}

const smoothScroll = (h) => {
    let i = h || 0;
    if (i < 340) {
        setTimeout(() => {
            window.scrollTo(0, i);
            smoothScroll(i + 3);
        }, 10);
    }
}


const Menu = ({typeOfMenu}) => {
    // menu types: 
    //    'prescriptions'
    //    'patients'
    //    'community'

    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(setMenuOption(e.target.textContent))
        smoothScroll()
    }

    return (
        <div id='menu'>
            {showMenu(typeOfMenu, handleClick)}
        </div>
    )
}

export default Menu;