import {Route} from 'react-router-dom'

import NavBar from './components/NavBar/NavBar.jsx';
import LandingPage from './components/LandingPage/LandingPage.jsx';
import './App.css';

function App() {
  return (
    <div>
      <Route path='/home' component={NavBar}/>
      <Route exact path='/' component={LandingPage}/>
    </div>
  );
}

export default App;
