import React, { Component } from "react";
import { connect } from "react-redux";

import { unitsColumnsStructure } from "./ColumnsData";
import {
    generateName,
    generateImage,
    generateSpecification
} from "./UnitsDataGenerators";

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

        const {
            col_name,
            col_image,
            col_role,
            col_specification
        } = unitsColumnsStructure;

        tableColumns = [
            {
                title: col_name.title,
                dataIndex: col_name.dataIndex,
                align: col_name.align,
                render: name => generateName(name)
            },
            {
                title: col_image.title,
                dataIndex: col_image.dataIndex,
                align: col_image.align,
                render: image => generateImage(image)
            },
            {
                title: col_role.title,
                dataIndex: col_role.dataIndex,
                align: col_role.align
            },
            {
                title: col_specification.title,
                dataIndex: col_specification.dataIndex,
                align: col_specification.align,
                render: specification => generateSpecification(specification)
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
        units: state.knights.units
    };
};

const mapDispatchToProps = dispatch => {
    return {
        showUnits: () => dispatch(knights.showUnits())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(KnightsUnitsTable);
