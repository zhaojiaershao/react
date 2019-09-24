import React, { Component } from 'react';
import '../style/index.scss';
export default class son extends Component {
  render() {
    const { changecolor, back, own } = this.props;
    return (
      <div style={{ width: '200px', height: '300px' }}>
        <ul className={`left-btn ${back.leftbox}`}>
          <li onClick={() => changecolor('max')}>
            {/* <button onClick={() => changecolor('max')}>改变主体背景颜色</button> */}
            改变主体背景颜色
          </li>
          <li className={`${back.own}`} onClick={() => changecolor('own')}>
            改变自己背景颜色
          </li>
          <li onClick={() => changecolor('rightbox')}>
            {/* <button onClick={() => changecolor('rightbox')}>
              改变右边背景颜色
            </button> */}
            改变右边背景颜色
          </li>
        </ul>
      </div>
    );
  }
}
