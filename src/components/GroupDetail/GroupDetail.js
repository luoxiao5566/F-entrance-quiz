import React, { Component } from 'react';
// TODO GTB-工程实践: - 针对整个文件，console.log不应该被提交上来
// TODO GTB-工程实践: - GroupDetail这个组件的名字不合理，叫GroupList更合适一些
class GroupDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // TODO GTB-工程实践: - 变量命名不合理，应该叫groups或者groupList
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
      // TODO GTB-工程实践: - API请求应该被提取到一个独立的文件
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
      // TODO GTB-工程实践: - API请求应该被提取到一个独立的文件
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
          {/* // TODO GTB-知识点: - 这里可以直接使用你的分组API回来的数据进行map鸭，因为那也是一个array啊 */}
          {groupTypeMap.map((obj) => (
            <div key={obj}>
              <div>{obj}组</div>
              <div>
                {/* // TODO GTB-知识点: - map里面套map, 就是在提醒你需要再抽取一层Group组件了 */}
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
