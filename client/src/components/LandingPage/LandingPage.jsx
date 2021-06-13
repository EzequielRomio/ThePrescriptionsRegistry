import React from 'react';
import {Link} from 'react-router-dom'

import Parallax from './Parallax.jsx'
import './LandingPage.css'
import lenses_manuf from '../../images/contact_lenses.mp4';

const LandingPage = () => {
    return (
        <div id='landingPageContainer'>
            
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
                {/*******  Left column  *******/}
                <div id='landingLeftColumn'>
                    <h2 className='subtitleFont'>Have you tried contact lens?</h2>
                    <video autoPlay={true} loop muted="muted" className='border'>
                        <source src={lenses_manuf} type="video/mp4"></source>
                    </video>

                    <h2 className='subtitleFont marginTop'>Blue light filter</h2>
                    <img src='https://i.insider.com/5ec6c3871918245574779666?width=700' width='644px' height='364px' className='border'></img>
                    <p>
                        Digital screens emit blue light, which can have negative consequences on your peepers, 
                        including strain, dry or watery eyes and irritated eyes. Blue light is also known to 
                        sabotage your sleep schedule because it messes with your circadian rhythm 
                        (AKA your internal clock that tells you when it’s time to sleep or be awake).
                        Unfortunately, most of us can’t escape having to use computers, tablets and phones 
                        in our everyday life. So how do we handle the negative consequences of digital screens? 
                        (Besides suffer in silence as we continue to type and scroll away.)
                        Enter <bold>blue light</bold> blocking glasses as the latest wellness trend.
                    </p>
                </div>

                {/*******  Right column  *******/}
                <div id='landingRightColumn'>
                    <h2 className='subtitleFont'>Professional Account</h2>
                    <p>
                        Sometimes working with a lot of patients could be a problem to have a Registry
                        of all their names, eyes disorders, last date, etc... These days are over.
                    </p>

                    <div className='marginTop'></div>
                    
                    <h2 className='subtitleFont'>Lens content</h2>
                    <p>
                        A corrective lens is a lens that is typically worn in front of the eye to improve daily vision. 
                        The most common use is to treat refractive errors: myopia, hypermetropia, astigmatism, and presbyopia. 
                        Glasses or "spectacles" are worn on the face a short distance in front of the eye. 
                    </p>

                    <div className='marginTop'></div>

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