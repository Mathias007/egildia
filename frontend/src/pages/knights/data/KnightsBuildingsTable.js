import React, { Component } from "react";
import { connect } from "react-redux";

import { knights } from "../../../_store/_actions";

import { buildingsColumnsStructure } from "./KnightsBuildingsDataGenerators";

import styles from "../../../styles/styles";
import { Layout, Table } from "antd";
const { Content } = Layout;

class KnightsBuildingsTable extends Component {
    state = {
        tableColumns: [],
        tableData: []
    };

    componentDidMount() {
        this.props.showBuildings();
    }

    renderBuildings() {
        let { buildings } = this.props;

        if (buildings) {
            return buildings.map((building, index) => {
                const {
                    _id,
                    nazwa,
                    koszt,
                    pola,
                    wytrzymalosc,
                    dzialanie,
                    pracownik,
                    grafika
                } = building;
                const { deski, kamienie } = koszt;
                const { opis, potrzeby, produkcja } = dzialanie;
                return {
                    key: _id,
                    name: [nazwa, grafika],
                    cost: [deski, kamienie],
                    fields: pola,
                    durability: wytrzymalosc,
                    description: [opis, potrzeby, produkcja],
                    worker: pracownik,
                    image: grafika
                };
            });
        }
    }

    render() {
        let { tableColumns, tableData } = this.state;

        tableData = this.renderBuildings();
        tableColumns = buildingsColumnsStructure;

        return (
            <Content style={styles.content}>
                <Table dataSource={tableData} columns={tableColumns} />
            </Content>
        );
    }
}

const mapStateToProps = state => {
    return {
        buildings: state.knights.buildings
    };
};

const mapDispatchToProps = dispatch => {
    return {
        showBuildings: () => dispatch(knights.showBuildings())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(KnightsBuildingsTable);
