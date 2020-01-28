import React, { Component } from "react";
import { connect } from "react-redux";

import { users } from "../../../../_store/_actions";
import styles from "../../../../styles/styles";

import { usersColumnsStructure } from "../_helpers/usersColumnsStructure";

import { Layout, Table } from "antd";
const { Content } = Layout;

class UsersTable extends Component {
    state = {
        tableColumns: [],
        tableData: []
    };

    componentDidMount() {
        this.props.showUsersList();
    }

    componentDidUpdate(prevProps) {
        if (this.props.usersList.length !== prevProps.usersList.length) {
            this.props.showUsersList();
        }
    }

    renderUsers() {
        let { usersList } = this.props;

        if (usersList) {
            return usersList.map((singleUser, index) => {
                const { _id, name, email, role, date } = singleUser;

                return {
                    number: index,
                    key: _id,
                    avatar: name,
                    username: name,
                    email,
                    role,
                    date,
                    options: _id
                };
            });
        }
    }

    render() {
        let { tableColumns, tableData } = this.state;

        tableData = this.renderUsers();
        tableColumns = usersColumnsStructure;

        return (
            <Content style={styles.content}>
                <Table dataSource={tableData} columns={tableColumns} />
            </Content>
        );
    }
}

const mapStateToProps = state => {
    return {
        usersList: state.users.usersList
    };
};

const mapDispatchToProps = dispatch => {
    return {
        showUsersList: () => dispatch(users.showUsersList())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersTable);
