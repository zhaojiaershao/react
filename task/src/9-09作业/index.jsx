import React, { Component } from 'react';
import _, { debounce } from 'lodash';
import jsonpAjax from './api/';
import './index.scss';

export default class Index extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      list: []
    };
    this.handleInput = debounce(e => {
      jsonpAjax(null, e.target.value).then(res => {
        this.setState({
          list: res.s
        });
      });
    }, 500);
  }
  onChanInput = ({ target }) => {
    this.setState({
      input: target.value
    });
  };
  baiDu = () => {
    // console.log(res)
    const query = this.state.input;
    console.log(query);
    if (!query) return false; //当input不为空时去请求
    jsonpAjax(null, this.state.input).then(res => {
      this.setState({
        list: res.s
      });
    });
  };
  //防抖
  handleKeyUp = e => {
    e.persist();
    this.handleInput(e);
  };
  render() {
    return (
      <React.Fragment>
        <div className="flex Input">
          <input
            type="text"
            value={this.state.input}
            onChange={this.onChanInput}
            placeholder="请输入内容"
            onKeyUp={this.handleKeyUp}
          />
          <button onClick={this.baiDu}>百度一下</button>
        </div>
        <div className="btn">
          <ul>
            {this.state.list.map((item, index) => {
              return <li key={index}>{`${index + 1}、${item}`}</li>;
            })}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}
