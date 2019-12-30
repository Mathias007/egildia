import React, { Component } from "react";
import { connect } from "react-redux";
import { tzar } from "../../../_store/_actions";

import { Layout, Table } from "antd";
import BreadcrumbComponent from "../../global/BreadcrumbComponent";
import Img from "react-image";

const componentStyles = {
    content: {
        background: "#fff",
        padding: 24,
        margin: 0,
        minHeight: 280
    },
    layout: { padding: "0 24px 24px" }
};

const componentClassnames = {
    images: {
        technology: "tzar-image-technology"
    },
    content: "tzar-technologies-content",
    layout: "tzar-technologies-layout",
    table: "tzar-technologies-table"
};

class TzarTechnologiesContent extends Component {
    state = {
        imgPath: {
            general: "img",
            section: {
                tzar: "tzar"
            },
            dir: {
                technologies: "technologie"
            },
            format: {
                png: "png"
            }
        },
        columnsStructure: {
            col_image: {
                title: "Grafika",
                dataIndex: "image",
                align: "center"
            },
            col_name: { title: "Technologia", dataIndex: "name", align: "center" },
            col_cost: {
                title: "Cena w złocie",
                dataIndex: "cost",
                align: "left"
            },
            col_building: {
                title: "Budynek",
                dataIndex: "building",
                align: "center"
            },
            col_description: { title: "Działanie", dataIndex: "description" },
            col_nation: { title: "Nacja", dataIndex: "nation", align: "center" }
        },
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
        const { Content } = Layout;

        let { tableColumns, tableData } = this.state;

        const { general, section, dir, format } = this.state.imgPath;

        tableData = this.renderTechnologies();

        const {
            col_image,
            col_name,
            col_cost,
            col_building,
            col_description,
            col_nation
        } = this.state.columnsStructure;

        tableColumns = [
            {
                title: col_image.title,
                dataIndex: col_image.dataIndex,
                align: col_image.align,
                render: image => (
                    <>
                        <Img
                            className={componentClassnames.images.spell}
                            src={require(`../../../${general}/${section.tzar}/${dir.technologies}/${image}.${format.png}`)}
                        />
                    </>
                )
            },
            {
                title: col_name.title,
                dataIndex: col_name.dataIndex,
                align: col_name.align,
                render: name => (
                    <h3>
                        <strong>{name}</strong>
                    </h3>
                )
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
            <Layout
                className={componentClassnames.layout}
                style={componentStyles.layout}
            >
                <BreadcrumbComponent />
                <Content
                    className={componentClassnames.images.content}
                    style={componentStyles.content}
                >
                    <h1>Tzar: Ciężar Korony</h1>
                    <h2>Technologie</h2>

                    <Table
                        className={componentClassnames.table}
                        dataSource={tableData}
                        columns={tableColumns}
                    />
                </Content>
            </Layout>
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
)(TzarTechnologiesContent);
