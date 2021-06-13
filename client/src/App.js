import React from 'react';
import {Route} from 'react-router-dom';

import NavBar from './components/NavBar/NavBar.jsx';
import LandingPage from './components/LandingPage/LandingPage.jsx';
import Prescriptions from './components/Prescriptions/Prescriptions.jsx';
import Patients from './components/Patients/Patients.jsx';
import Footer from './components/Footer/Footer.jsx';

import './App.css';

function App() {
  return (
    <div>
      <Route path='/' component={NavBar}/>
      <Route exact path='/' component={LandingPage}/>
      <Route path='/prescriptions' component={Prescriptions} />
      <Route path='/patients' component={Patients} />
      <Route path='/' component={Footer} />
    </div>
  );
}

export default App;
