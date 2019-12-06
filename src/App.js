import React, { Component } from 'react';

import './App.css';
import 'antd/dist/antd.css';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import KnightsBuildingsPage from "./pages/KnightsBuildingsPage";
import KnightsUnitsPage from "./pages/KnightsUnitsPage";

class App extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (

      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/home" component={HomePage} />
            {/* <Route exact path="/" component={LoginPage} /> */}
            {/* <Route exact path="/register" component={RegistrationPage} /> */}
            <Route path="/knights/buildings" component={KnightsBuildingsPage} />
            <Route path="/knights/units" component={KnightsUnitsPage} />
          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;
