import {Route} from 'react-router-dom'

import LandingPage from './components/LandingPage.jsx';
import './App.css';

function App() {
  return (
    <div>
      <Route exact path='/' component={LandingPage}/>
    </div>
  );
}

export default App;
