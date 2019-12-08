import React, { Component } from 'react';
import { connect } from "react-redux";

import { knights } from "../_store/_actions";

import { Layout, Table } from 'antd';

import BreadcrumbComponent from './components/BreadcrumbComponent';

import Img from 'react-image'

class KnightsBuildingsContent extends Component {
  state = {
    tableColumns: [],
    tableData: [],
  }

  componentDidMount() {
    this.props.showBuildings();
  }

  renderBuildings() {
    let { buildings } = this.props;

    if (buildings) {
      return buildings.map((building, index) => {
        const { _id, nazwa, koszt, pola, wytrzymalosc, dzialanie, pracownik, grafika } = building;
        const { deski, kamienie } = koszt;
        const { opis, potrzeby, produkcja } = dzialanie;
        return (
          {
            key: _id,
            name: nazwa,
            cost: [deski, kamienie],
            fields: pola,
            durability: wytrzymalosc,
            description: [opis, potrzeby, produkcja],
            worker: pracownik,
            image: grafika,
          }
        );
      });
    }
  }

  render() {
    const { Content } = Layout;

    let { tableColumns, tableData } = this.state;

    tableData = this.renderBuildings();

    tableColumns = [{
      title: 'Nazwa',
      dataIndex: 'name',
      align: 'center',
      render: name => <h3><strong>{name}</strong></h3>,
    },
    {
      title: 'Koszt',
      dataIndex: 'cost',
      align: 'left',
      render: (cost) => {
        return (
          <p>{cost[0]}<Img src={require(`../img/knights/surowce/deska.png`)} />
            <br />
            {cost[1]}<Img src={require(`../img/knights/surowce/kamien.png`)} /></p>
        )
      }
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
      render: (description) => {
        return (
          <span>
            {description.map(fragment => {
              if (fragment) {
                var regex = /\<(.*?)\>/g;

                var string = '<GeeksForGeeks is a CS portal>';
                // var newstring = fragment.replace(re, '**');
                var newstring = fragment.replace(regex, fragment.match(regex));
                console.log(fragment.match(regex));
                return <p key={fragment}>{newstring}</p>
              } else return null
            })}
          </span>
        )
      },
    },
    {
      title: 'Pracownik',
      dataIndex: 'worker',
      align: 'center',
    }, {
      title: 'Grafika',
      dataIndex: 'image',
      align: 'center',
      render: (image) => <Img width="120px" height="100px" src={require(`../img/knights/budynki/${image}.bmp`)} />
    }

    ]

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

          <Table dataSource={tableData} columns={tableColumns} />
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