import React, { Component } from "react";
import { connect } from "react-redux";
import { tzar } from "../../../_store/_actions";

import { Layout, Table } from "antd";
import Img from "react-image";

const componentStyles = {
    content: {
        background: "#fff",
        padding: 24,
        margin: 0,
        minHeight: 280
    },
};

const componentClassnames = {
    images: {
        building: "tzar-image-building"
    },
    content: "tzar-buildings-content",
    table: "tzar-buildings-table"
};

class TzarNationsTable extends Component {
    state = {
        imgPath: {
            general: "img",
            section: {
                tzar: "tzar"
            },
            dir: {
                buildings: "budynki"
            },
            format: {
                png: "png"
            }
        },
        columnsStructure: {
            col_name: { title: "Nazwa", dataIndex: "name", align: "center" },
            col_cost: { title: "Koszt", dataIndex: "cost", align: "left" },
            col_hp: { title: "HP", dataIndex: "hp", align: "center" },
            col_resistance: {
                title: "Odporność",
                dataIndex: "resistance",
                align: "center"
            },
            col_description: { title: "Działanie", dataIndex: "description" },
            col_image: { title: "Grafika", dataIndex: "image", align: "center" }
        },
        descriptionSubHeaders: ["Opis: ", "Wymagania: "],
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

        const { general, section, dir, format } = this.state.imgPath;

        tableData = this.renderNations();

        const {
            col_name,
            col_cost,
            col_hp,
            col_resistance,
            col_description,
            col_image
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
                            className={componentClassnames.images.building}
                            src={require(`../../../${general}/${section.tzar}/${dir.buildings}/${name[0]}/${name[2]}.${format.png}`)}
                        />
                    </>
                )
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
                render: description => {
                    const { descriptionSubHeaders } = this.state;
                    return (
                        <span>
                            <p>
                                <strong>{descriptionSubHeaders[0]}</strong>
                                {description[0]}
                            </p>
                            <p>
                                <strong>{descriptionSubHeaders[1]}</strong>
                                {description[1]}
                            </p>
                        </span>
                    );
                }
            },
            {
                title: col_image.title,
                dataIndex: col_image.dataIndex,
                align: col_image.align,
                render: image => (
                    <Img
                        className={componentClassnames.images.building}
                        // width="120px"
                        // height="100px"
                        src={require(`../../../${general}/${section.tzar}/${dir.buildings}/${image[0]}/${image[1]}.${format.png}`)}
                    />
                )
            }
        ];

        return (
            <Content
                className={componentClassnames.images.content}
                style={componentStyles.content}
            >
                <Table
                    className={componentClassnames.table}
                    dataSource={tableData}
                    columns={tableColumns}
                />
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
