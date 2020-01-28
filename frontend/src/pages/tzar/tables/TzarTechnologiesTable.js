import React, { Component } from "react";
import { connect } from "react-redux";

import { tzar } from "../../../_store/_actions";
import styles from "../../../styles/styles";

import { technologiesColumnsStructure } from "../_helpers/tzarTechnologiesDataGenerators";

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
        tableColumns = technologiesColumnsStructure;

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

export default connect(mapStateToProps, mapDispatchToProps)(TzarTechnologiesTable);
