import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import navigationTitles from "../../../_config/navigationTitles";
import { users } from "../../../_store/_actions";

import BreadcrumbComponent from "../../global/BreadcrumbComponent";

import { Button, Divider, Form, Layout, PageHeader } from "antd";
const { Item } = Form;
const { Content } = Layout;

const { ADMIN_USERS, REMOVER } = navigationTitles;

class UserRemover extends Component {
    componentDidMount() {
        console.log(this.props.match.params._id);
        this.props.showUserProfile(this.props.match.params._id);
    }

    handleDeletingSubmit = e => {
        e.preventDefault();
        this.props.deleteSelectedUser(this.props.match.params._id);
    };

    render() {
        const { selectedUser } = this.props;

        return (
            <Layout style={{ padding: "0 24px 24px" }}>
                <BreadcrumbComponent
                    isAdminContent
                    section={ADMIN_USERS}
                    page={REMOVER}
                />
                <Content
                    style={{
                        background: "#fff",
                        padding: 24,
                        margin: 0,
                        minHeight: 280
                    }}
                >
                    <div>
                        <PageHeader
                            onBack={() => null}
                            title="Powrót"
                            subTitle="Panel administracyjny"
                        />
                    </div>
                    <p>
                        Czy na pewno chcesz usunąć użytkownika o nazwie{" "}
                        <strong>{selectedUser.name}</strong>? Tej operacji nie
                        będzie można cofnąć.
                    </p>
                    <Item className="btn-wrap">
                        <Button
                            icon="user-delete"
                            type="primary"
                            htmlType="submit"
                            className="remove-user-button"
                            onClick={this.handleDeletingSubmit}
                        >
                            Usuń użytkownika
                        </Button>
                        <Divider type="vertical" dashed style={{ border: 0 }} />
                        <Button>
                            <Link to="/admin/users">Zrezygnuj</Link>
                        </Button>
                    </Item>
                    <Item>{this.props.errorMessage}</Item>
                </Content>
            </Layout>
        );
    }
}

const mapStateToProps = state => {
    return {
        errorMessage: state.users.errorMessage,
        selectedUser: state.users.selectedUser
    };
};

const mapDispatchToProps = dispatch => {
    return {
        showUserProfile: id => {
            return dispatch(users.showUserProfile(id));
        },
        deleteSelectedUser: id => {
            return dispatch(users.deleteSelectedUser(id));
        }
    };
};

UserRemover = connect(mapStateToProps, mapDispatchToProps)(UserRemover);

export default Form.create()(UserRemover);
