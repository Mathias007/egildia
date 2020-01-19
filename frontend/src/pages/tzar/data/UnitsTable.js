import React, { Component } from "react";
import { connect } from "react-redux";

import { tzar } from "../../../_store/_actions";
import styles from "../../../styles/styles";

import { unitsColumnsStructure } from "./ColumnsData";

import { Layout, Table } from "antd";
const { Content } = Layout;

class TzarUnitsTable extends Component {
    state = {
        tableColumns: [],
        tableData: []
    };

    componentDidMount() {
        this.props.showUnits();
    }

    renderUnits() {
        let { units } = this.props;

        if (units) {
            return units.map((unit, index) => {
                const {
                    _id,
                    nacja,
                    nazwa,
                    cena,
                    atak,
                    obrona,
                    hp,
                    opis,
                    grafika
                } = unit;
                return {
                    key: _id,
                    name: [nacja, nazwa, grafika],
                    cost: cena,
                    attack: atak,
                    defence: obrona,
                    hp: hp,
                    description: opis
                };
            });
        }
    }

    render() {
        let { tableColumns, tableData } = this.state;

        tableData = this.renderUnits();
        tableColumns = unitsColumnsStructure;

        return (
            <Content style={styles.content}>
                <Table dataSource={tableData} columns={tableColumns} />
            </Content>
        );
    }
}

const mapStateToProps = state => {
    return {
        units: state.tzar.units
    };
};

const mapDispatchToProps = dispatch => {
    return {
        showUnits: () => dispatch(tzar.showUnits())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TzarUnitsTable);
