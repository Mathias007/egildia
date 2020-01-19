import React, { Component } from "react";
import { connect } from "react-redux";

import { tzar } from "../../../_store/_actions";
import styles from "../../../styles/styles";

import { spellsColumnsStructure } from "./TzarSpellsDataGenerators";

import { Layout, Table } from "antd";
const { Content } = Layout;

class TzarSpellsTable extends Component {
    state = {
        tableColumns: [],
        tableData: []
    };

    componentDidMount() {
        this.props.showSpells();
    }

    renderSpells() {
        let { spells } = this.props;

        if (spells) {
            return spells.map((spell, index) => {
                const {
                    _id,
                    nacja,
                    nazwa,
                    cena,
                    dzialanie,
                    rzucajacy,
                    grafika
                } = spell;
                return {
                    key: _id,
                    name: [nacja, nazwa, grafika],
                    cost: cena,
                    description: dzialanie,
                    speller: rzucajacy
                };
            });
        }
    }

    render() {
        let { tableColumns, tableData } = this.state;

        tableData = this.renderSpells();
        tableColumns = spellsColumnsStructure;

        return (
            <Content style={styles.content}>
                <Table dataSource={tableData} columns={tableColumns} />
            </Content>
        );
    }
}

const mapStateToProps = state => {
    return {
        spells: state.tzar.spells
    };
};

const mapDispatchToProps = dispatch => {
    return {
        showSpells: () => dispatch(tzar.showSpells())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TzarSpellsTable);
