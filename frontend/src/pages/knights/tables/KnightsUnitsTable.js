import React, { Component } from "react";
import { connect } from "react-redux";

import { unitsColumnsStructure } from "./KnightsUnitsDataGenerators";

import { knights } from "../../../_store/_actions";

import { Layout, Table } from "antd";
import styles from "../../../styles/styles";

class KnightsUnitsTable extends Component {
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
                    nazwa,
                    kategoria,
                    rola,
                    pracodawca,
                    wyposazenie,
                    grafika
                } = unit;
                return {
                    key: _id,
                    name: nazwa,
                    role: rola,
                    specification: [kategoria, pracodawca, wyposazenie],
                    image: grafika
                };
            });
        }
    }

    render() {
        const { Content } = Layout;

        let { tableColumns, tableData } = this.state;

        tableData = this.renderUnits();
        tableColumns = unitsColumnsStructure

        return (
            <Content style={styles.content}>
                <Table dataSource={tableData} columns={tableColumns} />
            </Content>
        );
    }
}

const mapStateToProps = state => {
    return {
        units: state.knights.units
    };
};

const mapDispatchToProps = dispatch => {
    return {
        showUnits: () => dispatch(knights.showUnits())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(KnightsUnitsTable);
