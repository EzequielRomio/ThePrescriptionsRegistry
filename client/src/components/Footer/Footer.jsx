import React from 'react';
import {Link} from 'react-router-dom';

import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div id='footerTop'>
                <div>
                    <h3 className='h3Font'>Get in touch</h3>
                    <Link>
                        <p>About us</p>
                    </Link>
                    <Link>
                        <p>Our Team</p>
                    </Link>
                    <Link>
                        <p>Join us</p>
                    </Link>
                </div>
                
                <div>
                    <h3 className='h3Font'>Get in touch</h3>
                    <Link>
                        <p>About us</p>
                    </Link>
                    <Link>
                        <p>Our Team</p>
                    </Link>
                    <Link>
                        <p>Join us</p>
                    </Link>
                </div>
                <div>
                    <h3 className='h3Font'>Get in touch</h3>
                    <Link>
                        <p>About us</p>
                    </Link>
                    <Link>
                        <p>Our Team</p>
                    </Link>
                    <Link>
                        <p>Join us</p>
                    </Link>
                </div>
                <div>
                    <h3 className='h3Font'>Get in touch</h3>
                    <Link>
                        <p>About us</p>
                    </Link>
                    <Link>
                        <p>Our Team</p>
                    </Link>
                    <Link>
                        <p>Join us</p>
                    </Link>
                </div>
                
            </div>
            <div id='footerBottom'>
                <h1 className='titleFont' id='footerTitle'>
                    The Prescriptions Registry
                </h1>
                <span>@2021 design by Ezequiel Romio. The prescriptions Registry is a free service</span>
            </div>
        </footer>
    )
}

export default Footer;