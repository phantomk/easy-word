import React, { Component } from 'react';
import TableList from './component/Table/TableList';
import RmButton from './component/Button/RmButton';


class App extends Component {
  render() {
    return (
      <div className="App">
        <TableList className="TableList" />
        <RmButton />
      </div>
    );
  }
}

export default App;