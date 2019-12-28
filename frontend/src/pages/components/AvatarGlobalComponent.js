import React, { Component } from "react";
import { connect } from "react-redux";

import {
    Link
} from "react-router-dom";

import { auth } from "../../_store/_actions";

import { Avatar, Button } from "antd";

const UserList = ["U", "Lucy", "Tom", "Edward"];
const colorList = ["#f56a00", "#7265e6", "#ffbf00", "#00a2ae"];

class AvatarGlobalComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: UserList[0],
            color: colorList[0]
        };
    }

    changeUser = () => {
        const index = UserList.indexOf(this.state.user);
        this.setState({
            user:
                index < UserList.length - 1 ? UserList[index + 1] : UserList[0],
            color:
                index < colorList.length - 1
                    ? colorList[index + 1]
                    : colorList[0]
        });
    };

    render() {
        return (
            <div className="avatar-component">
                {this.props.name ? (
                <>
                <Avatar
                    style={{
                        backgroundColor: this.state.color,
                        verticalAlign: "middle"
                    }}
                    size="large"
                >
                    {/* {this.state.user} */}
                    {this.props.name}
                </Avatar>
                <Button
                    size="small"
                    style={{ marginLeft: 16, verticalAlign: "middle" }}
                    onClick={this.props.logout}
                >
                    Wyloguj
                </Button>
                </>
                )
                : <Link to="/login"><Button size="small" style={{marginLeft: 16, verticalAlign: "middle"}}>Zaloguj</Button></Link> }
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
