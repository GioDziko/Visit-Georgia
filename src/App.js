import './App.css';
import Navbar from "./components/navbar"; 
import Home from "./components/home";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Fragment } from 'react';
import Achara from "./components/pages/achara/Achara";
import Kakheti from "./components/pages/kakheti/kakheti";
import Svaneti from "./components/pages/svaneti/svaneti";
import Racha from "./components/pages/racha/racha";
import Guria from "./components/pages/guria/guria";
import Samegrelo from "./components/pages/samegrelo/samegrelo";

function App() {
  return (
  <Fragment>
    <Router>     
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route  path="/home" component={Home}></Route>
        <Route  path="/achara" component={Achara}></Route>
        <Route  path="/kakheti" component={Kakheti}></Route>
        <Route  path="/svaneti" component={Svaneti}></Route>
        <Route  path="/racha" component={Racha}></Route>
        <Route  path="/guria" component={Guria}></Route>
        <Route  path="/samegrelo" component={Samegrelo}></Route>
      </Switch>
    </Router>
  </Fragment>
  );
}

export default App;
