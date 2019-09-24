import React, { Component } from 'react';
import data from './data.json';
import './index.scss';
console.log(data.Topnav[0].content);
export default class Index extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      title: '首页',
      value: 'nsja'
    };
  }

  // 点击按钮获取数据  左边
  Home = value => {
    this.setState({
      id: value,
      // 根据左侧点击的按钮获取该按钮拿到的content的第一项
      value: data.Topnav[value].content[0]
    });
  };

  // 点击顶部按钮 获取指定content内容
  getIndex = index => {
    console.log(index);
    this.setState({
      value: data.Topnav[this.state.id].content[index]
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="Max-Z">
          <ul className="LeftNav">
            {data.nav.map((item, index) => {
              return (
                <li key={item.id}>
                  <button className="btn" onClick={() => this.Home(index)}>
                    {item.title}
                  </button>
                </li>
              );
            })}
          </ul>
          <div>
            <ul className="TopNav">
              {data.Topnav.map((item, index) => {
                return (
                  <li key={index}>
                    <button
                      className="but"
                      onClick={() => this.getIndex(index)}
                    >
                      {item.name[index]}
                    </button>
                  </li>
                );
              })}
            </ul>
            <div className="Content">
              <span>
                {this.state.value}
                {this.state.value}
              </span>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
