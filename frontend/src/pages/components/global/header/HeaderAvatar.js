import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { auth } from "../../../../_store/_actions";
import styles from "../../../../styles/styles";

import { Avatar, Button, Dropdown, Icon, Menu } from "antd";
const { Divider, Item } = Menu;

const buttonData = {
    icon: "login",
    type: "primary",
    size: "small",
    text: "Zaloguj się"
};

function HeaderAvatar(props) {
    const { userId } = props;
    const { icon, type, htmlType, text } = buttonData;
    const menu = (
        <Menu>
            <Item key="0">
                <Link to={`/users/${userId}`}>
                    <Icon type="user" /> Zobacz profil
                </Link>
            </Item>
            <Divider />
            <Item key="2" onClick={props.logout}>
                <Icon type="logout" /> Wyloguj się
            </Item>
        </Menu>
    );

    return (
        <>
            {props.name ? (
                <div className="avatar-component">
                    <p className="avatar-component-username">
                        <span>
                            Witaj <strong>{props.name}</strong>!
                        </span>
                        <Dropdown overlay={menu}>
                            <Avatar
                                style={styles.actualUserAvatar}
                                size="large"
                            >
                                {props.name.charAt(0)}
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

export default connect(mapStateToProps, mapDispatchToProps)(HeaderAvatar);
