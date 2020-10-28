import React, { Component } from 'react';

class GroupDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      group: {
        第一组: [],
        第二组: [],
        第三组: [],
        第四组: [],
        第五组: [],
        第六组: [],
      },
    };
  }

  async getGroups() {
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

  render() {
    const groupTypeMap = ['第一组', '第二组', '第三组', '第四组', '第五组', '第六组'];
    return (
      <div className="Group">
        <h2>分组列表</h2>
        <button type="button" onClick={this.getGroups.bind(this)}>
          分组学员
        </button>
        <div hidden={this.state.group['第一组'].length === 0}>
          {groupTypeMap.map((obj) => (
            <div>
              <div key={obj}>{obj}</div>
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
