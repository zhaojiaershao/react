import React, { Component } from 'react';
import '../style/index.scss';

const Navdata = [
  { id: 1, label: '玫瑰红' },
  { id: 2, label: '宝石蓝' },
  { id: 3, label: '雏菊黄' },
  { id: 4, label: '天使白' },
  { id: 5, label: '浪漫紫' }
];

export default class Topnav extends Component {
  render() {
    return (
      <div className="flex title-zrb">
        <h2 className="h2">主题按钮：</h2>
        <div className="topnav-zrb">
          {Navdata.map((item, index) => {
            return (
              <button
                key={item.id || index}
                onClick={() => this.props.haedlechange('warp', index)}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>
    );
  }
}
