import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Nav from "./component/Nav";
import Doctor from "./component/Doctor";

function App() {
  return (
    <Router>
        <Nav />
        <Switch>
            <Route path={'/'} exact component={Home} />
            <Route path={'/about'} component={About} />
            <Route path={'/doctor:id'} component={Doctor} />
      </Switch>
    </Router>
  );
}

export default App;
