import React, { Component } from "react";

import "./App.css";
import "antd/dist/antd.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Layout } from "antd";

import FooterComponent from "../pages/global/FooterComponent";
import HeaderComponent from "../pages/global/HeaderComponent";
import SidebarComponent from "../pages/global/SidebarComponent";

// general imports
import NewsPage from "../pages/NewsPage";
import LoginPage from "../pages/users/LoginPage";
import RegistrationPage from "../pages/users/RegistrationPage";

// admin articles imports
import ArticlesList from "../pages/admin/articles/ArticlesList";
import ArticleCreator from "../pages/admin/articles/ArticleCreator";
import ArticleEditor from "../pages/admin/articles/ArticleEditor";
import ArticleRemover from "../pages/admin/articles/ArticleRemover";

// admin news imports
import NewsList from "../pages/admin/news/NewsList";
import NewsCreator from "../pages/admin/news/NewsCreator";
import NewsEditor from "../pages/admin/news/NewsEditor";
import NewsRemover from "../pages/admin/news/NewsRemover";

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
                    <div className="App-container">
                        <Layout>
                            <HeaderComponent />
                            <Layout>
                                <SidebarComponent />
                                <Switch>
                                    {/* general routes */}
                                    <Route
                                        exact
                                        path="/"
                                        component={NewsPage}
                                    />
                                    <Route
                                        exact
                                        path="/login"
                                        component={LoginPage}
                                    />
                                    <Route
                                        exact
                                        path="/register"
                                        component={RegistrationPage}
                                    />

                                    {/* admin articles routes */}
                                    <Route
                                        path="/admin/articles/list"
                                        component={ArticlesList}
                                    />
                                    <Route
                                        path="/admin/articles/add"
                                        component={ArticleCreator}
                                    />
                                    <Route
                                        path="/admin/articles/edit/:_id"
                                        component={ArticleEditor}
                                    />
                                    <Route
                                        path="/admin/articles/remove/:_id"
                                        component={ArticleRemover}
                                    />

                                    {/* admin news routes */}
                                    <Route
                                        path="/admin/news/list"
                                        component={NewsList}
                                    />
                                    <Route
                                        path="/admin/news/add"
                                        component={NewsCreator}
                                    />
                                    <Route
                                        path="/admin/news/edit/:_id"
                                        component={NewsEditor}
                                    />
                                    <Route
                                        path="/admin/news/remove/:_id"
                                        component={NewsRemover}
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
                                    <Route
                                        exact
                                        path="/tzar/"
                                        component={TzarHomePage}
                                    />
                                    <Route
                                        path="/tzar/nations"
                                        component={TzarNationsPage}
                                    />
                                    <Route
                                        path="/tzar/spells"
                                        component={TzarSpellsPage}
                                    />
                                    <Route
                                        path="/tzar/technologies"
                                        component={TzarTechnologiesPage}
                                    />
                                    <Route
                                        path="/tzar/units"
                                        component={TzarUnitsPage}
                                    />
                                </Switch>
                            </Layout>
                        </Layout>
                        <FooterComponent />
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
