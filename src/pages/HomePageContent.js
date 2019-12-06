import React, { Component } from 'react';
import { Layout, Breadcrumb } from 'antd';

const { Content } = Layout;

class HomePageContent extends Component {
    state = {}
    render() {
        return (
            <Layout style={{ padding: '0 24px 24px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Content
                    style={{
                        background: '#fff',
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                    }}
                >
                    <div>
                        Witaj na podstronie e-Gildii Graczy poświęconej grze Knights and Merchants. Znajdziesz tutaj pożyteczne teksty, pliki i materiały. W opracowaniach uwzględniamy zarówno wersję podstawową The Shattered Kingdom, jak i dodatek The Peasant Rebellion oraz modyfikację K&M Remake.
                    </div>
                </Content>
            </Layout>
        );
    }
}

export default HomePageContent;