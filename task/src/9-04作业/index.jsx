import React, { Component } from 'react';
import Input from './outputbox';
import From from './frombox';

export default class Index extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      list: [{ input: '波少来了' }]
    };
  }
  //改变input值
  changeInput = (key, value) => {
    console.log(key);
    console.log(value);
    var obj = {};
    obj[key] = value;
    this.setState(obj);
  };
  //添加留言
  add = () => {
    const { list, input } = this.state;
    if (input.trim()) {
      this.setState({
        list: [...this.state.list, { list, input }],
        input: ''
      });
    }
  };
  //删除一个
  remove = index => {
    const list = [...this.state.list];
    list.splice(index, 1);
    // 数组.splic()会改变原数组，有返回值，返回值就是被删掉的元素
    this.setState({
      list: list
    });
  };
  removeSove = () => {
    // 数组.splic()会改变原数组，有返回值，返回值就是被删掉的元素
    this.setState({
      list: []
    });
  };
  render() {
    const { list, input } = this.state;
    return (
      <div style={{ width: '800px', margin: '0 auto', background: 'yellow' }}>
        {/* 搜索框 */}
        <Input input={input} add={this.add} changeInput={this.changeInput} />
        {/* 点击按钮 */}
        <From list={list} remove={this.remove} removeSove={this.removeSove} />
      </div>
    );
  }
}
