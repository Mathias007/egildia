import React, { Component } from "react";
import { connect } from "react-redux";

import { tzar } from "../../../_store/_actions";
import styles from "../../../styles/styles";

import { technologiesColumnsStructure } from "./ColumnsData";
import { generateName, generateImage } from "./TechnologiesGenerators";

import { Layout, Table } from "antd";
const { Content } = Layout;

class TzarTechnologiesTable extends Component {
    state = {
        tableColumns: [],
        tableData: []
    };

    componentDidMount() {
        this.props.showTechnologies();
    }

    renderTechnologies() {
        let { technologies } = this.props;

        if (technologies) {
            return technologies.map((technology, index) => {
                const {
                    _id,
                    nacja,
                    nazwa,
                    cena,
                    dzialanie,
                    budynek,
                    grafika
                } = technology;
                return {
                    key: _id,
                    image: grafika,
                    name: nazwa,
                    cost: cena,
                    description: dzialanie,
                    building: budynek,
                    nation: nacja
                };
            });
        }
    }

    render() {
        let { tableColumns, tableData } = this.state;

        tableData = this.renderTechnologies();

        const {
            col_image,
            col_name,
            col_cost,
            col_building,
            col_description,
            col_nation
        } = technologiesColumnsStructure;

        tableColumns = [
            {
                title: col_image.title,
                dataIndex: col_image.dataIndex,
                align: col_image.align,
                render: image => generateImage(image)
            },
            {
                title: col_name.title,
                dataIndex: col_name.dataIndex,
                align: col_name.align,
                render: name => generateName(name)
            },
            {
                title: col_cost.title,
                dataIndex: col_cost.dataIndex,
                align: col_cost.align
            },
            {
                title: col_building.title,
                dataIndex: col_building.dataIndex,
                align: col_building.align
            },
            {
                title: col_description.title,
                dataIndex: col_description.dataIndex,
                align: col_description.align
            },
            {
                title: col_nation.title,
                dataIndex: col_nation.dataIndex,
                align: col_nation.align
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
        technologies: state.tzar.technologies
    };
};

const mapDispatchToProps = dispatch => {
    return {
        showTechnologies: () => dispatch(tzar.showTechnologies())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TzarTechnologiesTable);
