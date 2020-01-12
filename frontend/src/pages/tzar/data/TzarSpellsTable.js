import React, { Component } from "react";
import { connect } from "react-redux";
import { tzar } from "../../../_store/_actions";

import { Layout, Table } from "antd";
import styles from "../../../styles/styles";

import Img from "react-image";

const componentClassnames = {
    images: {
        spell: "tzar-image-spell"
    }
};

class TzarSpellsTable extends Component {
    state = {
        imgPath: {
            general: "img",
            section: {
                tzar: "tzar"
            },
            dir: {
                spells: "magia"
            },
            format: {
                png: "png"
            }
        },
        columnsStructure: {
            col_name: { title: "Czar", dataIndex: "name", align: "center" },
            col_description: { title: "Działanie", dataIndex: "description" },
            col_cost: {
                title: "Koszt rzutu",
                dataIndex: "cost",
                align: "left"
            },
            col_speller: {
                title: "Rzucający",
                dataIndex: "speller",
                align: "center"
            }
        },
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
        const { Content } = Layout;

        let { tableColumns, tableData } = this.state;

        const { general, section, dir, format } = this.state.imgPath;

        tableData = this.renderSpells();

        const {
            col_name,
            col_cost,
            col_description,
            col_speller
        } = this.state.columnsStructure;

        tableColumns = [
            {
                title: col_name.title,
                dataIndex: col_name.dataIndex,
                align: col_name.align,
                render: name => (
                    <>
                        <h3>
                            <strong>{name[1]}</strong>
                        </h3>
                        <Img
                            className={componentClassnames.images.spell}
                            src={require(`../../../${general}/${section.tzar}/${dir.spells}/${name[2]}.${format.png}`)}
                        />
                    </>
                )
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
            },
            {
                title: col_speller.title,
                dataIndex: col_speller.dataIndex,
                align: col_speller.align
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
        spells: state.tzar.spells
    };
};

const mapDispatchToProps = dispatch => {
    return {
        showSpells: () => dispatch(tzar.showSpells())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TzarSpellsTable);
