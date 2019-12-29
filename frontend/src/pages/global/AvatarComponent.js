import React, { Component } from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";

import { auth } from "../../_store/_actions";

import { Avatar, Button } from "antd";

class AvatarComponent extends Component {
    render() {
        return (
            <>
                {this.props.name ? (
                    <div className="avatar-component">
                        <p className="avatar-component-username">
                            <Avatar
                                style={{
                                    backgroundColor: "#f56a00",
                                    verticalAlign: "middle"
                                }}
                                size="large"
                            >
                                {this.props.name.charAt(0)}
                            </Avatar>
                            <span>
                                Witaj <strong>{this.props.name}</strong>!
                            </span>
                            <Button
                                icon="logout"
                                type="primary"
                                size="small"
                                style={{
                                    marginLeft: 16,
                                    verticalAlign: "middle"
                                }}
                                onClick={this.props.logout}
                            >
                                Wyloguj się
                            </Button>
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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AvatarComponent);
