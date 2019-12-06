import React, { Component } from 'react';
import { Breadcrumb } from 'antd';

const { Item } = Breadcrumb;

class BreadcrumbComponent extends Component {
    state = {}
    render() {
        return (
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Item>Home</Item>
                <Item>List</Item>
                <Item>App</Item>
            </Breadcrumb>

        );
    }
}

export default BreadcrumbComponent;