import React, { Component } from 'react';

import { connect } from "react-redux";

import { knights } from "../actions";

import { Layout, Table, Divider, Tag } from 'antd';

import BreadcrumbComponent from './components/BreadcrumbComponent';

const { Content } = Layout;

const columns = [
  {
    title: 'Nazwa',
    dataIndex: 'nazwa',
    key: 'nazwa',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Grafika',
    dataIndex: 'grafika',
    key: 'grafika'
  },
  {
    title: 'Koszt',
    dataIndex: 'koszt',
    key: 'koszt',
  },
  {
    title: 'Pola',
    dataIndex: 'pola',
    key: 'pola',
  },
  {
    title: 'Wytrzymałość',
    dataIndex: 'wytrzymalosc',
    key: 'wytrzymalosc',
    render: wytrzymalosc => (
      <span>
        {wytrzymalosc.map(wytrzymalosc => {
          let color = wytrzymalosc.length > 5 ? 'geekblue' : 'green';
          if (wytrzymalosc === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={wytrzymalosc}>
              {wytrzymalosc.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    ),
  },
  {
    title: 'Działanie',
    dataIndex: 'dzialanie',
    key: 'dzialanie',

    // render: (text, record) => (
    //   <span>
    //     <a>Invite {record.name}</a>
    //     <Divider type="vertical" />
    //     <a>Delete</a>
    //   </span>
    // ),
  },
  {
    title: 'Pracownik',
    key: 'pracownik',
    dataIndex: 'pracownik',
  }
];

let data = [
  {
    key: '1',
    nazwa: 'John Brown',
    grafika: 'grafika',
    koszt: 32,
    pola: 'New York No. 1 Lake Park',
    wytrzymalosc: ['nice', 'developer'],
    dzialanie: 'avc',
    pracownik: 'gef',
  },
  {
    key: '2',
    nazwa: 'John Brown',
    grafika: 'grafika',
    koszt: 32,
    pola: 'New York No. 1 Lake Park',
    wytrzymalosc: ['nice', 'developer'],
    dzialanie: 'avc',
    pracownik: 'gef',
  },
  {
    key: '3',
    nazwa: 'John Brown',
    grafika: 'grafika',
    koszt: 32,
    pola: 'New York No. 1 Lake Park',
    wytrzymalosc: ['nice', 'developer'],
    dzialanie: 'avc',
    pracownik: 'gef',
  },
];

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
            nazwa: nazwa,
            grafika: 'grafika',
            koszt: `${deski} <deska> ${kamienie} <kamien>`,
            pola: pola,
            wytrzymalosc: ['nice', 'developer'],
            dzialanie: `${opis} | ${potrzeby} | ${produkcja}`,
            pracownik: pracownik,
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
          Knights and Merchants
          Budynki

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