import React from 'react';
import {Link} from 'react-router-dom'

import Parallax from './Parallax.jsx'
import './LandingPage.css'
import lenses_manuf from '../../images/contact_lenses.mp4';

const LandingPage = () => {
    return (
        <div id='landingPageContainer'>
            <div className='landingPageTitle displayFlexRow'> 
                <h1 className='titleFont'>
                    The Prescriptions Registry
                </h1>
                <div id='landingPageSubtitle'>
                    <h3 className='h3Font'>
                        The way to take <br></br> care of your eyes
                    </h3>
                </div>
            </div>

            <Parallax 
                url={'https://www.genomicseducation.hee.nhs.uk/wp-content/uploads/2019/11/Eye-DNA-1350x450px-1345x450.jpg'}
            />

            <Link to='/'>
                <div className='linkButton'>    
                    <h3 className='h3Font'>Get started</h3>
                </div>
            </Link>

            <div className='largeSeparator'></div>

            <div id='landingPageBottom' className='displayFlexRow'>
                <div >
                    <h2 className='subtitleFont'>Have you tried contact lens?</h2>
                    <video autoplay="true" loop muted="muted" id={'landingVideo'}>
                        <source src={lenses_manuf} type="video/mp4"></source>
                    </video>
                </div>
                <div id='profAccount'>
                    <h2 className='subtitleFont'>Professional Account</h2>
                    <p>
                        Sometimes working with a lot of patients could be a problem to have a Registry
                        of all their names, eyes disorders, last date, etc... These days are over.
                    </p>
                    <h2 className='subtitleFont'>Lens content</h2>
                    <p>
                        A corrective lens is a lens that is typically worn in front of the eye to improve daily vision. 
                        The most common use is to treat refractive errors: myopia, hypermetropia, astigmatism, and presbyopia. 
                        Glasses or "spectacles" are worn on the face a short distance in front of the eye. 
                    </p>
                    <h2 className='subtitleFont'>Technical Support</h2>
                    <p>
                        At <bold>ThePresctiptionsRegistry</bold>, you’ll find a dedicated team of opticians 
                        and with a variety of services designed to improve the health of your vision. 
                        We are committed to providing the highest quality care while utilizing the latest advancements 
                        in diagnostic and medical treatments.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;