import React, { Component } from 'react';

class GroupDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      group: {
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: [],
      },
    };
  }

  async componentDidMount() {
    try {
      const data = await fetch('http://localhost:8080/groups', {
        method: 'GET',
        mode: 'cors',
      });
      const result = await data.json();
      console.log(JSON.stringify(result));
      this.setState({ group: result });
    } catch (err) {
      console.log(err);
    }
  }

  async getGroups() {
    try {
      const data = await fetch('http://localhost:8080/groups', {
        method: 'POST',
        mode: 'cors',
      });
      const result = await data.json();
      console.log(JSON.stringify(result));
      this.setState({ group: result });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const groupTypeMap = [1, 2, 3, 4, 5, 6];
    return (
      <div className="Group">
        <h2>分组列表</h2>
        <button type="button" onClick={this.getGroups.bind(this)}>
          分组学员
        </button>
        <div hidden={this.state.group[1].length === 0}>
          {groupTypeMap.map((obj) => (
            <div key={obj}>
              <div>{obj}组</div>
              <div>
                {this.state.group[obj].map((item) => (
                  <div key={item.id}>
                    {item.id}.{item.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default GroupDetail;
