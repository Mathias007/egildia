import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { auth } from "../../_store/_actions";

import { Avatar, Button, Dropdown, Icon, Menu } from "antd";
const { Divider, Item } = Menu;

class AvatarComponent extends Component {
    render() {
        const menu = (
            <Menu>
                <Item key="0">
                    <Link to="/login">
                        <Icon type="user" /> Zobacz profil
                    </Link>
                </Item>
                <Divider />
                <Item key="2" onClick={this.props.logout}>
                    <Icon type="logout" /> Wyloguj się
                </Item>
            </Menu>
        );

        return (
            <>
                {this.props.name ? (
                    <div className="avatar-component">
                        <p className="avatar-component-username">
                            <span>
                                Witaj <strong>{this.props.name}</strong>!
                            </span>
                            <Dropdown overlay={menu}>
                                <Avatar
                                    style={{
                                        cursor: "pointer",
                                        backgroundColor: "#f56a00",
                                        verticalAlign: "middle"
                                    }}
                                    size="large"
                                >
                                    {this.props.name.charAt(0)}
                                </Avatar>
                            </Dropdown>
                        </p>
                    </div>
                ) : (
                    <Link to="/login">
                        <Button
                            icon="login"
                            type="primary"
                            size="small"
                            style={{ marginLeft: 16, verticalAlign: "middle" }}
                        >
                            Zaloguj się
                        </Button>
                    </Link>
                )}
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        name: state.auth.name
    };
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => {
            return dispatch(auth.logout());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AvatarComponent);
