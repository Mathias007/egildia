import React, { Component } from 'react';
import { Layout } from 'antd';

import BreadcrumbComponent from './components/BreadcrumbComponent';

const { Content } = Layout;

class KnightsUnitsContent extends Component {
    state = {}
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
                    Jednostki
                </Content>
            </Layout>
        );
    }
}

export default KnightsUnitsContent;