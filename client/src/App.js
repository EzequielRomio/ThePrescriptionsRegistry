import {Route} from 'react-router-dom'

import NavBar from './components/NavBar/NavBar.jsx';
import LandingPage from './components/LandingPage/LandingPage.jsx';
import Footer from './components/Footer/Footer.jsx'

import './App.css';

function App() {
  return (
    <div>
      <Route path='/' component={NavBar}/>
      <Route exact path='/' component={LandingPage}/>
      <Route path='/' component={Footer} />
    </div>
  );
}

export default App;
