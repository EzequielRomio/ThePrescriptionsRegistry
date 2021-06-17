import React from 'react';

import './Prescriptions.css';

const PrescriptionImg = ({dataToDisplay}) => {
    return (
        <div id='prescriptionImg'>
            <div className='smooth' style={{width: '100%', height: '100%'}}>
                <div style={{position: 'absolute', top: '60px', left: '80px', maxWidth: '200px'}}>
                    <p>{dataToDisplay.name} {dataToDisplay.lastName}</p>
                    {dataToDisplay.rightEye && <p>R: {dataToDisplay.rightEye}</p>} 
                    {dataToDisplay.leftEye && <p>L: {dataToDisplay.leftEye}</p>} 
                    {dataToDisplay.addition && <p>Add: {dataToDisplay.addition}</p>}
                    {dataToDisplay.doctor && <p style={{marginTop: '80px'}}>{dataToDisplay.prescriptionDate} <br></br> Doctor: {dataToDisplay.doctor}</p>} 

                </div>
            </div>
        </div>
    )
}

export default PrescriptionImg;