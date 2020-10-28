import React, { Component } from 'react';

class StudentsDetail extends Component {
  render() {
    return (
      <div className="studentDetail">
        <h2>学生列表</h2>
        <div className="student">
          {this.props.students.map((item) => (
            <div key={item.id}>
              {item.id}.{item.name}
            </div>
          ))}
        </div>
        <button type="button">+添加学员</button>
      </div>
    );
  }
}

export default StudentsDetail;
