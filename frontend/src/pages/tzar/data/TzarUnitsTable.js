import React, { Component } from "react";
import { connect } from "react-redux";
import Img from "react-image";

import { tzar } from "../../../_store/_actions";

import { Layout, Table } from "antd";

const componentStyles = {
    content: {
        background: "#fff",
        padding: 24,
        margin: 0,
        minHeight: 280
    }
};

const componentClassnames = {
    images: {
        icon: "tzar-image-icon",
        unit: "tzar-image-unit"
    },
    content: "tzar-units-content",
    table: "tzar-units-table"
};

class TzarUnitsTable extends Component {
    state = {
        imgPath: {
            general: "img",
            section: {
                tzar: "tzar"
            },
            dir: {
                units: "jednostki",
                icons: "ikony",
                views: "wyglad"
            },
            format: {
                png: "png",
                bmp: "bmp",
                jpg: "JPG"
            }
        },
        columnsStructure: {
            col_name: { title: "Nazwa", dataIndex: "name", align: "center" },
            col_attack: { title: "Atak", dataIndex: "attack", align: "center" },
            col_defence: {
                title: "Obrona",
                dataIndex: "defence",
                align: "center"
            },
            col_hp: { title: "HP", dataIndex: "hp", align: "center" },
            col_description: { title: "Opis", dataIndex: "description" },
            col_cost: { title: "Koszt", dataIndex: "cost", align: "left" }
            // col_image: { title: "Grafika", dataIndex: "image", align: "center" }
        },
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
                    // image: [nacja, grafika]
                };
            });
        }
    }

    render() {
        const { Content } = Layout;

        let { tableColumns, tableData } = this.state;

        const { general, section, dir, format } = this.state.imgPath;

        tableData = this.renderUnits();

        const {
            col_name,
            col_cost,
            col_hp,
            col_attack,
            col_defence,
            col_description
            // col_image
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
                            className={componentClassnames.images.unit}
                            src={require(`../../../${general}/${section.tzar}/${dir.units}/${dir.icons}/${name[0]}/${name[2]}.${format.png}`)}
                        />
                    </>
                )
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
            // {
            //     title: col_image.title,
            //     dataIndex: col_image.dataIndex,
            //     align: col_image.align,
            //     render: image => (
            //         <Img
            //             className={componentClassnames.images.building}
            //             // width="120px"
            //             // height="100px"
            //             src={require(`../../../${general}/${section.tzar}/${dir.buildings}/${image[0]}/${image[1]}.${format.png}`)}
            //         />
            //     )
            // },
            {
                title: col_cost.title,
                dataIndex: col_cost.dataIndex,
                align: col_cost.align
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
        units: state.tzar.units
    };
};

const mapDispatchToProps = dispatch => {
    return {
        showUnits: () => dispatch(tzar.showUnits())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TzarUnitsTable);
