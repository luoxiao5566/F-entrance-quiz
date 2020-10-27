import React, { Component } from 'react';

class GroupDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      group: {
        第一组:[],
        第二组:[],
        第三组:[],
        第四组:[],
        第五组:[],
        第六组:[]
      },
    };
  }
  async getGroups() {
    try {
      const data = await fetch("http://localhost:8080/groups",{
        method:"GET",
        mode:"cors"
      });
      const result = await data.json();
      console.log(JSON.stringify(result));
      this.setState({ group: result });
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    return (
      <div className="Group">
        <h2>分组列表</h2>
        <button type="button" onClick={this.getGroups.bind(this)}>分组学员</button> 
        <div>
          <div>第一组</div>     
          {this.state.group['第一组'].map((item) => (
            <div key={item.id}>
              {item.id}.{item.name}
            </div>
          ))} 
          <div>第二组</div>     
          {this.state.group['第二组'].map((item) => (
            <div key={item.id}>
              {item.id}.{item.name}
            </div>
          ))} 
          <div>第三组</div>     
          {this.state.group['第三组'].map((item) => (
            <div key={item.id}>
              {item.id}.{item.name}
            </div>
          ))} 
          <div>第四组</div>     
          {this.state.group['第四组'].map((item) => (
            <div key={item.id}>
              {item.id}.{item.name}
            </div>
          ))} 
          <div>第五组</div>     
          {this.state.group['第五组'].map((item) => (
            <div key={item.id}>
              {item.id}.{item.name}
            </div>
          ))} 
          <div>第六组</div>     
          {this.state.group['第六组'].map((item) => (
            <div key={item.id}>
              {item.id}.{item.name}
            </div>
          ))} 
        </div>        
      </div>
    );
  }
}

export default GroupDetail;