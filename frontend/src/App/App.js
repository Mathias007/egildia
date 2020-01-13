import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import routesPaths from "../_config/routesPaths";

import FooterComponent from "../pages/global/FooterComponent";
import HeaderComponent from "../pages/global/HeaderComponent";
import SidebarComponent from "../pages/global/SidebarComponent";

// general imports
import NewsPage from "../pages/general/NewsPage";
import LoginPage from "../pages/general/LoginPage";
import RegistrationPage from "../pages/general/RegistrationPage";

// admin articles imports
import ArticlesList from "../pages/admin/articles/ArticlesList";
import ArticleCreator from "../pages/admin/articles/ArticleCreator";
import ArticleEditor from "../pages/admin/articles/ArticleEditor";
import ArticleRemover from "../pages/admin/articles/ArticleRemover";

// admin news imports
import NewsList from "../pages/admin/news/NewsList";
import NewsSingleCard from "../pages/admin/news/NewsSingleCard";
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

// admin users imports
import UserCreator from "../pages/admin/users/UserCreator";
import UserEditor from "../pages/admin/users/UserEditor";
import UserRemover from "../pages/admin/users/UserRemover";
import UsersList from "../pages/admin/users/UsersList";
import UserProfileCard from "../pages/admin/users/UserProfileCard";

import "./App.css";
import "antd/dist/antd.css";
import { Layout } from "antd";

const { GENERAL, ARTICLES, NEWS, KNIGHTS, TZAR, USERS } = routesPaths;

class App extends Component {
    state = {
        collapsed: false
    };

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
                                        path={GENERAL.INDEX}
                                        component={NewsPage}
                                    />
                                    <Route
                                        exact
                                        path={GENERAL.LOGIN}
                                        component={LoginPage}
                                    />
                                    <Route
                                        exact
                                        path={GENERAL.REGISTER}
                                        component={RegistrationPage}
                                    />

                                    {/* admin articles routes */}
                                    <Route
                                        exact
                                        path={ARTICLES.MAIN}
                                        component={ArticlesList}
                                    />
                                    <Route
                                        path={ARTICLES.ADD}
                                        component={ArticleCreator}
                                    />
                                    <Route
                                        path={ARTICLES.EDIT}
                                        component={ArticleEditor}
                                    />
                                    <Route
                                        path={ARTICLES.REMOVE}
                                        component={ArticleRemover}
                                    />

                                    {/* admin news routes */}
                                    <Route
                                        exact
                                        path={NEWS.MAIN}
                                        component={NewsList}
                                    />
                                    <Route
                                        path={NEWS.SINGLE}
                                        component={NewsSingleCard}
                                    />
                                    <Route
                                        path={NEWS.ADD}
                                        component={NewsCreator}
                                    />
                                    <Route
                                        path={NEWS.EDIT}
                                        component={NewsEditor}
                                    />
                                    <Route
                                        path={NEWS.REMOVE}
                                        component={NewsRemover}
                                    />

                                    {/* Knights and Merchants routes */}
                                    <Route
                                        exact
                                        path={KNIGHTS.MAIN}
                                        component={KnightsHomePage}
                                    />
                                    <Route
                                        path={KNIGHTS.BUILDINGS}
                                        component={KnightsBuildingsPage}
                                    />
                                    <Route
                                        path={KNIGHTS.UNITS}
                                        component={KnightsUnitsPage}
                                    />

                                    {/* Tzar routes */}
                                    <Route
                                        exact
                                        path={TZAR.MAIN}
                                        component={TzarHomePage}
                                    />
                                    <Route
                                        path={TZAR.NATIONS}
                                        component={TzarNationsPage}
                                    />
                                    <Route
                                        path={TZAR.SPELLS}
                                        component={TzarSpellsPage}
                                    />
                                    <Route
                                        path={TZAR.TECHNOLOGIES}
                                        component={TzarTechnologiesPage}
                                    />
                                    <Route
                                        path={TZAR.UNITS}
                                        component={TzarUnitsPage}
                                    />

                                    {/* admin users routes */}
                                    <Route
                                        exact
                                        path={USERS.MAIN}
                                        component={UsersList}
                                    />
                                    <Route
                                        path={USERS.SINGLE}
                                        component={UserProfileCard}
                                    />
                                    <Route
                                        path={USERS.ADD}
                                        component={UserCreator}
                                    />
                                    <Route
                                        path={USERS.EDIT}
                                        component={UserEditor}
                                    />
                                    <Route
                                        path={USERS.REMOVE}
                                        component={UserRemover}
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
