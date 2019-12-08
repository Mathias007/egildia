import React, { Component } from 'react';

import './App.css';
import 'antd/dist/antd.css';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import KnightsBuildingsPage from "../pages/KnightsBuildingsPage";
import KnightsUnitsPage from "../pages/KnightsUnitsPage";
import KnightsHomePage from '../pages/KnightsHomePage';

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
            <Route exact path="/knights" component={KnightsHomePage} />
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