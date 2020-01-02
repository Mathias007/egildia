import React, { Component } from "react";

import "./App.css";
import "antd/dist/antd.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// general imports
import NewsPage from "../pages/NewsPage";
import LoginPage from "../pages/users/LoginPage";
import RegistrationPage from "../pages/users/RegistrationPage";

// admin imports
import ArticlesList from "../pages/admin/ArticlesList";
import AddNewArticle from "../pages/admin/AddNewArticle";
import EditSelectedArticle from "../pages/admin/EditSelectedArticle";
import DeleteSelectedArticle from "../pages/admin/DeleteSelectedArticle";

// Knights and Metchants imports
import KnightsBuildingsPage from "../pages/knights/KnightsBuildingsPage";
import KnightsUnitsPage from "../pages/knights/KnightsUnitsPage";
import KnightsHomePage from "../pages/knights/KnightsHomePage";

// Tzar imports
import TzarHomePage from "../pages/tzar/TzarHomePage";
import TzarNationsPage from "../pages/tzar/TzarNationsPage";
import TzarSpellsPage from "../pages/tzar/TzarSpellsPage";
import TzarTechnologiesPage from "../pages/tzar/TzarTechnologiesPage";
import TzarUnitsPage from "../pages/tzar/TzarUnitsPage";

class App extends Component {
    state = {
        collapsed: false
    };

    componentDidMount() {}

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    };

    render() {
        return (
            <Router>
                <div className="containter">
                    <Switch>
                        {/* general routes */}
                        <Route exact path="/" component={NewsPage} />
                        <Route exact path="/login" component={LoginPage} />
                        <Route
                            exact
                            path="/register"
                            component={RegistrationPage}
                        />

                        {/* admin routes */}
                        <Route
                            path="/admin/articles/list"
                            component={ArticlesList}
                        />
                        <Route
                            path="/admin/articles/add"
                            component={AddNewArticle}
                        />
                        <Route
                            path="/admin/articles/edit"
                            component={EditSelectedArticle}
                        />
                        <Route
                            path="/admin/articles/delete"
                            component={DeleteSelectedArticle}
                        />

                        {/* Knights and Merchants routes */}
                        <Route
                            exact
                            path="/knights/"
                            component={KnightsHomePage}
                        />
                        <Route
                            path="/knights/buildings"
                            component={KnightsBuildingsPage}
                        />
                        <Route
                            path="/knights/units"
                            component={KnightsUnitsPage}
                        />

                        {/* Tzar routes */}
                        <Route exact path="/tzar/" component={TzarHomePage} />
                        <Route
                            path="/tzar/nations"
                            component={TzarNationsPage}
                        />
                        <Route path="/tzar/spells" component={TzarSpellsPage} />
                        <Route
                            path="/tzar/technologies"
                            component={TzarTechnologiesPage}
                        />
                        <Route path="/tzar/units" component={TzarUnitsPage} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
