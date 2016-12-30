import React, { Component } from 'react';
import { Table } from 'antd';
import './TableList.css';

const columns = [{
  title: '编号',
  dataIndex: 'ids',
  sorter: (a, b) => a.ids - b.ids,
},{
  title: '单词',
  dataIndex: 'word',
  sorter: (a, b) => a.name.length - b.name.length,
},{
  title: '释义',
  dataIndex: 'paraphrase',
}];

function getData() {
  let data = [];
  let words = localStorage.words || '';
  if(words) {
    words = words.split(',');
    words.forEach(function(e, i) {
      data.push({
        key: i,
        word: e,
        ids: i,
        paraphrase: "暂无释义"
      })
    })
  }
  return data;
}

function onChange(pagination, filters, sorter) {
  console.log('params', pagination, filters, sorter);
}

class TableList extends Component {
  constructor(props) {
    super(props);
    this.state = {date: []};
  }

componentDidMount() {
    this.timerID = setInterval(
      () => this.update(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  update() {
    let data = getData();
    this.setState({
      data: data
    })
  }

  render() {
    return (
      <div className="TableList">
        <Table columns={columns} dataSource={this.state.data} onChange={onChange} />
      </div>
    );
  }
}

export default TableList;