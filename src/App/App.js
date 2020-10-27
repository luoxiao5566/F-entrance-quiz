import React, { Component } from 'react';
import GroupDetail from '../components/GroupDetail/GroupDetail';
import StudentsDetail from '../components/StudentsDetail/StudentsDetail';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [
        {
          id: 1,
          name: '成吉思汗',
        },
        {
          id: 2,
          name: '鲁班七号',
        },
        {
          id: 3,
          name: '太乙真人',
        },
        {
          id: 4,
          name: '钟无艳',
        },
        {
          id: 5,
          name: '花木兰',
        },
        {
          id: 6,
          name: '雅典娜',
        },
        {
          id: 7,
          name: '芈月',
        },
        {
          id: 8,
          name: '白起',
        },
        {
          id: 9,
          name: '刘禅',
        },
        {
          id: 10,
          name: '庄周',
        },
        {
          id: 11,
          name: '马超',
        },
        {
          id: 12,
          name: '刘备',
        },
        {
          id: 13,
          name: '哪吒',
        },
        {
          id: 14,
          name: '大乔',
        },
        {
          id: 15,
          name: '蔡文姬',
        },
      ],
    };
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
