import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import routesPaths from "../_config/routesPaths";
import { auth } from "../_store/_actions";

import FooterComponent from "../pages/components/global/FooterComponent";
import HeaderComponent from "../pages/components/global/HeaderComponent";
import SidebarComponent from "../pages/components/global/SidebarComponent";

// error imports
import NotFound from "../pages/components/errors/NotFound";
import Forbidden from "../pages/components/errors/Forbidden";

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
import NewsSingleView from "../pages/admin/news/NewsSingleView";
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
import UserSingleProfile from "../pages/admin/users/UserSingleProfile";

import "./App.css";
import "antd/dist/antd.css";
import { Layout } from "antd";

const { GENERAL, ARTICLES, NEWS, KNIGHTS, TZAR, USERS } = routesPaths;

class App extends Component {
    state = {
        collapsed: false
    };

    PrivateRoute = ({ component: ChildComponent, ...rest }) => {
        return (
            <Route
                {...rest}
                render={props => {
                    if (this.props.auth.isLoading) {
                        return <em>Loading...</em>;
                    } else if (
                        !this.props.auth.isAuthenticated &&
                        !this.props.auth.autoLogin
                    ) {
                        return <Forbidden />;
                    } else {
                        return <ChildComponent {...props} />;
                    }
                }}
            />
        );
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    };

    render() {
        let { PrivateRoute } = this;

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
                                    <PrivateRoute
                                        exact
                                        path={ARTICLES.MAIN}
                                        component={ArticlesList}
                                    />
                                    <PrivateRoute
                                        path={ARTICLES.ADD}
                                        component={ArticleCreator}
                                    />
                                    <PrivateRoute
                                        path={ARTICLES.EDIT}
                                        component={ArticleEditor}
                                    />
                                    <PrivateRoute
                                        path={ARTICLES.REMOVE}
                                        component={ArticleRemover}
                                    />

                                    {/* admin news routes */}
                                    <PrivateRoute
                                        exact
                                        path={NEWS.MAIN}
                                        component={NewsList}
                                    />
                                    <Route
                                        path={NEWS.SINGLE}
                                        component={NewsSingleView}
                                    />
                                    <PrivateRoute
                                        path={NEWS.ADD}
                                        component={NewsCreator}
                                    />
                                    <PrivateRoute
                                        path={NEWS.EDIT}
                                        component={NewsEditor}
                                    />
                                    <PrivateRoute
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
                                    <PrivateRoute
                                        exact
                                        path={USERS.MAIN}
                                        component={UsersList}
                                    />
                                    <PrivateRoute
                                        path={USERS.SINGLE}
                                        component={UserSingleProfile}
                                    />
                                    <PrivateRoute
                                        path={USERS.ADD}
                                        component={UserCreator}
                                    />
                                    <PrivateRoute
                                        path={USERS.EDIT}
                                        component={UserEditor}
                                    />
                                    <PrivateRoute
                                        path={USERS.REMOVE}
                                        component={UserRemover}
                                    />

                                    <Route path="*" component={NotFound} />
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

const mapStateToProps = state => {
    return {
        auth: state.auth
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadUser: () => {
            return dispatch(auth.loadUser());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
