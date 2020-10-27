import React, { Component } from 'react';
import 'regenerator-runtime/runtime';
import GroupDetail from '../components/GroupDetail/GroupDetail';
import StudentsDetail from '../components/StudentsDetail/StudentsDetail';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [       
      ],
    };
  }

  async componentDidMount() {
    try {
      const data = await fetch("http://localhost:8080/students",{
        method:"GET",
        mode:"cors"
      });
      const result = await data.json();
      console.log(JSON.stringify(result));
      this.setState({ students: result });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div data-testid="app" className="App">
        <GroupDetail />
        <StudentsDetail students={this.state.students} />
      </div>
    );
  }
}

export default App;
