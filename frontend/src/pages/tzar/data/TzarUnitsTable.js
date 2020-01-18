import React, { Component } from "react";
import { connect } from "react-redux";

import { tzar } from "../../../_store/_actions";
import styles from "../../../styles/styles";

import { generateName } from "./UnitsGenerators";
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

        const {
            col_name,
            col_cost,
            col_hp,
            col_attack,
            col_defence,
            col_description
        } = unitsColumnsStructure;

        tableColumns = [
            {
                title: col_name.title,
                dataIndex: col_name.dataIndex,
                align: col_name.align,
                render: name => generateName(name)
            },
            {
                title: col_attack.title,
                dataIndex: col_attack.dataIndex,
                align: col_attack.align
            },
            {
                title: col_defence.title,
                dataIndex: col_defence.dataIndex,
                align: col_defence.align
            },
            {
                title: col_hp.title,
                dataIndex: col_hp.dataIndex,
                align: col_hp.align
            },
            {
                title: col_description.title,
                dataIndex: col_description.dataIndex,
                align: col_description.align
            },
            {
                title: col_cost.title,
                dataIndex: col_cost.dataIndex,
                align: col_cost.align
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
        units: state.tzar.units
    };
};

const mapDispatchToProps = dispatch => {
    return {
        showUnits: () => dispatch(tzar.showUnits())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TzarUnitsTable);
