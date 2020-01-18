import React, { Component } from "react";
import { connect } from "react-redux";

import { tzar } from "../../../_store/_actions";

import { nationsColumnsStructure } from "./ColumnsData";
import {
    generateName,
    generateDescription,
    generateImage
} from "./NationsGenerators";

import { Layout, Table } from "antd";
import styles from "../../../styles/styles";

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
        const { Content } = Layout;

        let { tableColumns, tableData } = this.state;

        tableData = this.renderNations();

        const {
            col_name,
            col_cost,
            col_hp,
            col_resistance,
            col_description,
            col_image
        } = nationsColumnsStructure;

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
                align: col_cost.align
            },
            {
                title: col_hp.title,
                dataIndex: col_hp.dataIndex,
                align: col_hp.align
            },
            {
                title: col_resistance.title,
                dataIndex: col_resistance.dataIndex,
                align: col_resistance.align
            },
            {
                title: col_description.title,
                dataIndex: col_description.dataIndex,
                render: description => generateDescription(description)
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
        nations: state.tzar.nations
    };
};

const mapDispatchToProps = dispatch => {
    return {
        showNations: () => dispatch(tzar.showNations())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TzarNationsTable);
