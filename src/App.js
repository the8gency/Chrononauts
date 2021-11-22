import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import * as Paths from './routes';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={ Paths.LANDING } component={ Home }/>
          <Route exact path={ Paths.SERVICES } component={ Services }/>
          <Route exact path={ Paths.ABOUT } component={ About }/>
          <Route exact path={ Paths.CONTACT } component={ Contact }/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
