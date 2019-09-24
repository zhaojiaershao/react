import React, { Component } from 'react';
import Login from './components/login';
import Register from './components/register';

export default class Index extends Component {
  constructor() {
    super();
    this.state = {
      isCom: 'Login'
    };
  }
  //切换页面的事件
  toggle = is => {
    console.log(is);
    this.setState({
      isCom: is
    });
  };

  render() {
    //switch的切换判断方法
    let Dom = '';
    switch (this.state.isCom) {
      case 'Login':
        Dom = <Login loginToggle={this.toggle} />;
        break;
      case 'Register':
        Dom = <Register registerToggle={this.toggle} />;
        break;
    }
    return (
      <div>
        {/* 三元运算符的判断 */}
        {/* {this.state.isCom ? (
          <Login loginToggle={this.toggle} />
        ) : (
          <Register registerToggle={this.toggle} />
        )} */}
        {Dom}
      </div>
    );
  }
}
