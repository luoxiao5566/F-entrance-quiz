import React, { Component } from 'react';
import GroupDetail from '../components/GroupDetail/GroupDetail';
import StudentsDetail from '../components/StudentsDetail/StudentsDetail';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <GroupDetail />
        <StudentsDetail />
      </div>
    );
  }
}

export default App;
