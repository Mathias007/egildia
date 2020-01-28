import React, { Component } from "react";
import { connect } from "react-redux";

import { tzar } from "../../../_store/_actions";
import styles from "../../../styles/styles";

import { nationsColumnsStructure } from "../_helpers/tzarNationsDataGenerators";

import { Layout, Table } from "antd";
const { Content } = Layout;

class TzarNationsTable extends Component {
    state = {
        tableColumns: [],
        tableData: []
    };

    componentDidMount() {
        this.props.showNations();
    }

    renderNations() {
        let { nations } = this.props;

        if (nations) {
            return nations.map((nation, index) => {
                const {
                    _id,
                    nacja,
                    nazwa,
                    cena,
                    hp,
                    odpornosc,
                    dzialanie,
                    wymagania,
                    grafika
                } = nation;
                return {
                    key: _id,
                    name: [nacja, nazwa, grafika],
                    cost: cena,
                    hp: hp,
                    resistance: odpornosc,
                    description: [dzialanie, wymagania],
                    image: [nacja, grafika]
                };
            });
        }
    }

    render() {
        let { tableColumns, tableData } = this.state;

        tableData = this.renderNations();
        tableColumns = nationsColumnsStructure;

        return (
            <Content style={styles.content}>
                <Table dataSource={tableData} columns={tableColumns} />
            </Content>
        );
    }
}

const mapStateToProps = state => {
    return {
        nations: state.tzar.nations
    };
};

const mapDispatchToProps = dispatch => {
    return {
        showNations: () => dispatch(tzar.showNations())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TzarNationsTable);
