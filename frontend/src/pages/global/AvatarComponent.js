import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { auth } from "../../_store/_actions";

import { Avatar, Button, Dropdown, Icon, Menu } from "antd";
import styles from "../../styles/styles";

const { Divider, Item } = Menu;

const buttonData = {
    icon: "login",
    type: "primary",
    size: "small",
    text: "Zaloguj się"
};

class AvatarComponent extends Component {
    render() {
        const { userId } = this.props;
        const { icon, type, htmlType, text } = buttonData;
        const menu = (
            <Menu>
                <Item key="0">
                    <Link to={`/users/${userId}`}>
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
                                    style={styles.actualUserAvatar}
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
                            icon={icon}
                            type={type}
                            htmlType={htmlType}
                            style={styles.loginButton}
                        >
                            {text}
                        </Button>
                    </Link>
                )}
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        name: state.auth.name,
        userId: state.auth.userId
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
