import React, { Component } from 'react';

import { connect } from "react-redux";

import { knights } from "../_store/_actions";

import { Layout, Table } from 'antd';

import BreadcrumbComponent from './components/BreadcrumbComponent';

const { Content } = Layout;

const columns = [
  {
    title: 'Nazwa',
    dataIndex: 'name',
    align: 'center',
    render: text => <a href="#">{text}</a>,
  },
  {
    title: 'Koszt',
    dataIndex: 'cost',
    align: 'center'
  },
  {
    title: 'Pola',
    dataIndex: 'fields',
    align: 'center'
  },
  {
    title: 'Wytrzymałość',
    dataIndex: 'durability',
    align: 'center'
  },
  {
    title: 'Działanie',
    dataIndex: 'description',
    render: (description) => (
      <span>
        {description.map(fragment => {
          if (fragment) {
            return <p key={fragment}>{fragment}</p>
          } else return null
        })}
      </span>
    ),
  },
  {
    title: 'Pracownik',
    dataIndex: 'worker',
    align: 'center',
  }, {
    title: 'Grafika',
    dataIndex: 'image',
    align: 'center',
  },
];

let data = [];

class KnightsBuildingsContent extends Component {
  state = {
  }

  componentDidMount() {
    this.props.showBuildings();
  }

  renderBuildings() {
    let { buildings } = this.props;

    if (buildings) {
      return buildings.map((building, index) => {
        const { _id, nazwa, koszt, pola, wytrzymalosc, dzialanie, pracownik } = building;
        const { deski, kamienie } = koszt;
        const { opis, potrzeby, produkcja } = dzialanie;
        return (
          {
            key: _id,
            name: nazwa,
            cost: `${deski} <deska> ${kamienie} <kamien>`,
            fields: pola,
            durability: wytrzymalosc,
            description: [opis, potrzeby, produkcja],
            worker: pracownik,
            image: 'grafika',
          }
        );
      });
    }
  }

  render() {

    data = this.renderBuildings();

    return (
      <Layout style={{ padding: '0 24px 24px' }}>
        <BreadcrumbComponent />
        <Content
          style={{
            background: '#fff',
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          <h1>Knights and Merchants</h1>
          <h2>Budynki</h2>

          <Table dataSource={data} columns={columns} />
        </Content>
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    buildings: state.knights.buildings
  }
}

const mapDispatchToProps = dispatch => {
  return {
    showBuildings: () => dispatch(knights.showBuildings())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(KnightsBuildingsContent);