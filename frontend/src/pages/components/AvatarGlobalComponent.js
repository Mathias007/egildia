import React, { Component } from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";

import { auth } from "../../_store/_actions";

import { Avatar, Button, Typography } from "antd";

const {Title} = Typography;

class AvatarGlobalComponent extends Component {
    render() {
        return (
            <div className="avatar-component">
                {this.props.name ? (
                    <>
                        <Avatar
                            style={{
                                backgroundColor: "#f56a00",
                                verticalAlign: "middle"
                            }}
                            size="large"
                        >
                            {this.props.name.charAt(0)}
                        </Avatar>
                        <Title level={3}>{this.props.name}</Title>
                        <Button
                            type="primary"
                            size="small"
                            style={{ marginLeft: 16, verticalAlign: "middle" }}
                            onClick={this.props.logout}
                        >
                            Wyloguj się
                        </Button>
                    </>
                ) : (
                    <Link to="/login">
                        <Button
                            type="primary"
                            size="small"
                            style={{ marginLeft: 16, verticalAlign: "middle" }}
                        >
                            Zaloguj się
                        </Button>
                    </Link>
                )}
            </div>
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
)(AvatarGlobalComponent);
