import React, { Component } from 'react';
import './index.scss';
import Recursion from './recursion';
// === 全等，判断是：即判断类型也要判断值
// == 相等，判断是：用值去判断，但是，对于数据类型不同的它会隐式转换数据类型
// console.log(["abc"] === "abc"); // false
// console.log(["abc"] == "abc"); // true

// 树形菜单的数据
const data = [
  {
    id: 1,
    label: '美食',
    class: 'show',
    children: [
      {
        id: 100,
        label: '中餐',
        children: [
          {
            id: 1000,
            label: '粤菜'
          },
          {
            id: 1001,
            label: '川菜'
          },
          {
            id: 1002,
            label: '鲁菜'
          }
        ]
      },
      {
        id: 101,
        label: '西餐'
      }
    ]
  },
  {
    id: 2,
    label: '餐具',
    children: [
      {
        id: 200,
        label: '盘子'
      },
      {
        id: 201,
        label: '筷子'
      },
      {
        id: 202,
        label: '饭碗'
      }
    ]
  }
];

// 递归组件
class Index extends Component {
  resetdata = (id, data) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === id) {
        data[i].class = data[i].class === 'show' ? '' : 'show';
      }
      if (data[i].children) {
        this.resetdata(id, data[i].children);
      }
    }
  };
  set = id => {
    this.resetdata(id, data);
    // 强制更新
    this.forceUpdate();
  };
  render() {
    return (
      <div className="recursion-component">
        <Recursion
          data={data}
          set={this.set}
          type={{ father: 'div', son: 'div' }}
        />
      </div>
    );
  }
}

export default Index;
