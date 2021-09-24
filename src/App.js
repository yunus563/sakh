import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Auksion from './Pages/auksion'
import MenuBar from './Components/MenuBar'
import Home from './Pages/Home';
import Korzinka from './Pages/korzinka';
import Info from './Pages/info';
import Video from './Pages/video';
import Yangiliklar from './Pages/yangiliklar';
import VideoInfo from './Pages/VideoInfo'

import Register from './Pages/Register'
import Password from './Pages/Password'
import ConfirmPassword from './Pages/ConfirmPassword'
import Login from './Pages/Login'
import Restart from './Pages/Restart'
import Restart2 from './Pages/Reastart2'
import Restart3 from './Pages/Restart3'

function App() {
  return (
    <>
      <Router>
        <MenuBar/>
        <div className="container">
          <Route exact path="/" component={Home}/>
          <Route path="/auksion" component={Auksion}/>
          <Route path="/register" component={Register}/>
          <Route path="/password" component={Password}/>
          <Route path="/confirmpassword" component={ConfirmPassword}/>
          <Route path="/login" component={Login}/>
          <Route path="/restart" component={Restart}/>
          <Route path="/restart2" component={Restart2}/>
          <Route path="/restart3" component={Restart3}/>
          <Route path="/korzinka" component={Korzinka}/>
          <Route path="/yangiliklar" component={Yangiliklar}/>
          <Route path="/video" component={Video}/>
          <Route path="/videoinfo/1" component={VideoInfo}/>
          <Route path="/info/:1" component={Info}/>
        </div>
      </Router>
    </>
  );
}

export default App;
