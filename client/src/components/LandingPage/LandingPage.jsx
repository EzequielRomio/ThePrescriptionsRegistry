import React from 'react';

import Parallax from './Parallax.jsx'
import './LandingPage.css'

const LandingPage = () => {
    return (
        <div >
            <div className='landingPageTitle displayFlexRow'> 
                <h1 className='titleFont'>
                    The Prescriptions Registry
                </h1>
                <div id='landingPageSubtitle'>
                    <h3 className='h3Font'>
                        The website for your eyes care
                    </h3>
                    
                    {/* https://www.genomicseducation.hee.nhs.uk/wp-content/uploads/2019/11/Eye-DNA-1350x450px-1345x450.jpg */}
                </div>
            </div>
            <Parallax 
                url={'https://www.genomicseducation.hee.nhs.uk/wp-content/uploads/2019/11/Eye-DNA-1350x450px-1345x450.jpg'}
            />
            
        </div>
    )
}

export default LandingPage;