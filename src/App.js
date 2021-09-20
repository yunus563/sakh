import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Auksion from './Pages/auksion'
import MenuBar from './Components/MenuBar'
import Home from './Pages/Home';
import Korzinka from './Pages/korzinka';
import Info from './Pages/info';


function App() {
  return (
    <>
      <Router>
        <MenuBar/>
        <div className="container">
          <Route exact path="/" component={Home}/>
          <Route path="/auksion" component={Auksion}/>
          <Route path="/korzinka" component={Korzinka}/>
          <Route path="/info/:1" component={Info}/>
        </div>
      </Router>
    </>
  );
}

export default App;
