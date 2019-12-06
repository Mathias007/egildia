import React, { Component } from 'react';

import { connect } from "react-redux";

import { knights } from "../actions";

import { Layout } from 'antd';

import BreadcrumbComponent from './components/BreadcrumbComponent';

const { Content } = Layout;

class KnightsBuildingsContent extends Component {
    state = {}

    componentDidMount() {
        this.props.showBuildings();
    }

    render() {
        return (
            <Layout style={{ padding: '0 24px 24px' }}>
                <BreadcrumbComponent />
                <Content
                    style={{
                        background: '#fff',
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                    }}
                >
                    Knights and Merchants
                    Budynki
                 </Content>
            </Layout>
        );
    }
}

const mapStateToProps = state => {
    return {
        buildings: state.knights.buildings
    }
}

const mapDispatchToProps = dispatch => {
    return {
        showBuildings: () => dispatch(knights.showBuildings())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(KnightsBuildingsContent);