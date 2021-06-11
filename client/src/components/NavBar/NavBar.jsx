import React from 'react';
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
            <div className='h3Font' id='navBarLinks'>
                <Link>
                    <h3 >Prescriptions</h3>
                </Link>
                <Link>
                    <h3>Patients</h3>
                </Link>
                <Link>
                    <h3>Create Account</h3>
                </Link>
                <Link>
                    <h3>Community</h3>
                </Link>
            </div>
        </div>
    )
}

export default NavBar;