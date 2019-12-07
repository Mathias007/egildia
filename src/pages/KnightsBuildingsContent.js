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

    renderBuildingsList() {
        let { users } = this.props.userList;

        if (users) {
            return users.map((user, index) => {
                const { id, email, first_name, last_name, username } = user;
                const avatarPlaceholder = {
                    content: first_name.charAt(0) + last_name.charAt(0),
                    color: "violet"
                };
                return (
                    <tr key={id} className="user-list-row">
                        <td>
                            <UikCheckbox color="blue" />
                        </td>
                        <td>
                            <UikAvatar avatarPlaceholder={avatarPlaceholder} />
                        </td>
                        <td>
                            <p>
                                {first_name} {last_name}
                            </p>
                            <p>{email}</p>
                        </td>
                        <td>CEO</td>
                        <td>Admin</td>
                        <td>
                            <UikTag color="green" fill>
                                Active
                            </UikTag>
                        </td>
                        <td>
                            <div className="userlist-dropdown">
                                <UikButton
                                    className="userlist-opts-trigger"
                                    onClick={this.toggleAccountOptions}
                                >
                                    ...
                                </UikButton>
                                {this.state.openAccountOptions ? (
                                    <div className="userlist-opts-container">
                                        <UsersDropdownMenu
                                            changeComponent={this.handleChangeWindow}
                                            userid={id}
                                            username={username}
                                        />
                                    </div>
                                ) : null}
                            </div>
                        </td>
                    </tr>
                );
            });
        }
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