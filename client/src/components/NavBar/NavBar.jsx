import React from 'react';
<<<<<<< HEAD

const NavBar = () => {
    return (
        <div>
            navbar
=======
import {Link} from 'react-router-dom';

import './NavBar.css'

const NavBar = () => {
    return (
        <div id='navBar'>
            <div id='navBarRightColumn'> 
                <h1 className='titleFont' id='navBarTitle'>
                    The Prescriptions Registry
                </h1>
                <div id='navBarSubtitle'>
                    <h3 className='h3Font'>
                        The way to take <br></br> care of your eyes
                    </h3>
                </div>
            </div>
            <div className='subtitleFont' id='navBarLinks'>
                <Link to={'/prescriptions'}>
                    <h3 >PRESCIPTIONS</h3>
                </Link>
                <Link to={'/patients'}>
                    <h3>PATIENTS</h3>
                </Link>
                <Link>
                    <h3>CREATE ACCOUNT</h3>
                </Link>
                <Link>
                    <h3>COMMUNITY</h3>
                </Link>
            </div>
>>>>>>> 956b549c9794df442402997fab6c5f1a1c3c731b
        </div>
    )
}

export default NavBar;