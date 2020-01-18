import React, { Component } from "react";
import { connect } from "react-redux";

import { knights } from "../../../_store/_actions";

import { buildingsColumnsStructure } from "./ColumnsData";

import {
    generateName,
    generateCost,
    generateDescription,
    generateWorker,
    generateImage
} from "./BuildingsDataGenerators";

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

        const {
            col_name,
            col_cost,
            col_fields,
            col_durability,
            col_description,
            col_worker,
            col_image
        } = buildingsColumnsStructure;

        tableColumns = [
            {
                title: col_name.title,
                dataIndex: col_name.dataIndex,
                align: col_name.align,
                render: name => generateName(name)
            },
            {
                title: col_cost.title,
                dataIndex: col_cost.dataIndex,
                align: col_cost.align,
                render: cost => generateCost(cost)
            },
            {
                title: col_fields.title,
                dataIndex: col_fields.dataIndex,
                align: col_fields.align
            },
            {
                title: col_durability.title,
                dataIndex: col_durability.dataIndex,
                align: col_durability.align
            },
            {
                title: col_description.title,
                dataIndex: col_description.dataIndex,
                render: description => generateDescription(description)
            },
            {
                title: col_worker.title,
                dataIndex: col_worker.dataIndex,
                align: col_worker.align,
                render: worker => generateWorker(worker)
            },
            {
                title: col_image.title,
                dataIndex: col_image.dataIndex,
                align: col_image.align,
                render: image => generateImage(image)
            }
        ];

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
