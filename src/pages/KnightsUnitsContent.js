import React, { Component } from 'react';
import { connect } from "react-redux";
import { knights } from "../_store/_actions";

import { Layout, Table } from 'antd';
import BreadcrumbComponent from './components/BreadcrumbComponent';
import Img from 'react-image'

const textBetweenTagsRegEx = /[^<\}]+(?=>)/g;

const componentStyles = {
    content: {
        background: '#fff',
        padding: 24,
        margin: 0,
        minHeight: 280,
    },
    layout: { padding: '0 24px 24px' }
}

const componentClassnames = {
    images: {
        building: "knights-image-building",
        icon: "knights-image-icon",
        material: "knights-image-material",
        unit: "knights-image-unit"
    },
    content: 'knights-units-content',
    layout: 'knights-units-layout',
    table: 'knights-units-table'
}

class KnightsUnitsContent extends Component {
    state = {
        imgPath: {
            general: 'img',
            section: {
                knights: 'knights',
            },
            dir: {
                buildings: 'budynki',
                icons: 'ikony',
                materials: 'surowce',
                units: 'jednostki'
            },
            format: {
                bmp: 'bmp',
                png: 'png',
                PNG: 'PNG',
            }
        },
        columnsStructure: {
            col_name: { title: 'Nazwa', dataIndex: 'name', align: 'center' },
            col_image: { title: 'Grafika', dataIndex: 'image', align: 'left' },
            col_role: { title: 'Rola', dataIndex: 'role', align: 'center' },
            col_specification: { title: 'Miejsce pracy', dataIndex: 'specification', align: 'center' },
        },
        tableColumns: [],
        tableData: [],
    }

    componentDidMount() {
        this.props.showUnits();
    }

    renderUnits() {
        let { units } = this.props;

        if (units) {
            return units.map((unit, index) => {
                const { _id, nazwa, kategoria, rola, pracodawca, wyposazenie, grafika } = unit;
                return (
                    {
                        key: _id,
                        name: nazwa,
                        role: rola,
                        specification: [kategoria, pracodawca, wyposazenie],
                        image: grafika,
                    }
                );
            });
        }
    }

    render() {
        const { Content } = Layout;

        let { tableColumns, tableData } = this.state;

        const { general, section, dir, format } = this.state.imgPath;

        tableData = this.renderUnits();

        const { col_name, col_image, col_role, col_specification } = this.state.columnsStructure;

        tableColumns = [
            {
                title: col_name.title, dataIndex: col_name.dataIndex, align: col_name.align,
                render: (name) => (
                    <h3><strong>{name}</strong></h3>
                ),
            },
            {
                title: col_image.title, dataIndex: col_image.dataIndex, align: col_image.align,
                render: (image) => <Img className={componentClassnames.images.unit} src={require(`../${general}/${section.knights}/${dir.units}/${image}.${format.PNG}`)} />
            },
            { title: col_role.title, dataIndex: col_role.dataIndex, align: col_role.align, },
            {
                title: col_specification.title, dataIndex: col_specification.dataIndex, align: col_specification.align,
                render: (specification) => {
                    if (specification[0] === "cywil") {

                        let workplaceElements = specification[1].match(textBetweenTagsRegEx)
                        console.log(workplaceElements);

                        return (workplaceElements ? workplaceElements.map((element, index) => <Img className={componentClassnames.images.icon} src={require(`../${general}/${section.knights}/${dir.icons}/${element}.${format.png}`)} />) : null)

                    } else {
                        let equipmentElements = specification[2].match(textBetweenTagsRegEx)
                        console.log(equipmentElements);

                        return (equipmentElements ? equipmentElements.map((element, index) => <Img className={componentClassnames.images.material} src={require(`../${general}/${section.knights}/${dir.materials}/${element}.${format.png}`)} />) : null)
                    }
                }
            },

        ]

        return (
            <Layout className={componentClassnames.layout} style={componentStyles.layout}>
                <BreadcrumbComponent />
                <Content className={componentClassnames.images.content}
                    style={componentStyles.content}
                >
                    <h1>Knights and Merchants</h1>
                    <h2>Jednostki</h2>

                    <Table className={componentClassnames.table} dataSource={tableData} columns={tableColumns} />
                </Content>
            </Layout>
        );
    }
}

const mapStateToProps = state => {
    return {
        units: state.knights.units
    }
}

const mapDispatchToProps = dispatch => {
    return {
        showUnits: () => dispatch(knights.showUnits())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(KnightsUnitsContent);