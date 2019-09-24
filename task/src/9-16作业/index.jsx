import React, { Component } from 'react';
import Son from './components/son';
import Sons from './components/sons';
import './style/index.scss';

//颜色的类命集合
const claname = ['palegreen', 'darkcyan', 'chartreuse', 'peru', 'aqua'];
export default class index extends Component {
  constructor() {
    super();
    this.state = {
      max: '', //改变最大盒子颜色
      leftbox: '', //左边盒子
      rightbox: '', //右边盒子
      own: '' //自己
    };
  }
  changecolor = ele => {
    const num = Math.ceil(Math.random() * 5);
    this.setState({
      [ele]: claname[num]
    });
    console.log(ele);
  };
  render() {
    console.log(this.props);
    return (
      <div className={`max ${this.state.max}`}>
        <button
          onClick={() => this.changecolor('leftbox')}
          className="btn-left"
        >
          改变左边背景色
        </button>
        <button
          onClick={() => this.changecolor('rightbox')}
          className="btn-right"
        >
          改变右边背景色
        </button>
        <div className="flex space-between">
          <Son changecolor={this.changecolor} back={this.state} />
          <Sons back={this.state} />
        </div>
      </div>
    );
  }
}
