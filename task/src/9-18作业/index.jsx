import React, { Component } from 'react';
//引入头部导航按钮
import Topnav from './components/son/Topnav';
//引入内容
import Content from './components/son/content';
//样式
import './components/style/index.scss';

const colors = ['red', 'blue', 'yellow', 'bisque', 'purple'];
export default class Index extends Component {
  constructor() {
    super();
    this.state = {
      warp: 'green' //主题颜色
    };
  }
  haedlechange = (ele, index) => {
    this.setState({
      [ele]: colors[index]
    });
  };
  render() {
    return (
      <div className="max-zrb">
        <Topnav haedlechange={this.haedlechange} />
        <Content back={this.state} />
      </div>
    );
  }
}
