import React from 'react';
import Common from './components/common';
import './css/index.css';

const all = {
  yl: ['服务注册', 'Poratl', 'OPS', '服务管理', '发布系统'],
  red: ['HULK API'],
  red2: ['hucnjashiimk'],
  dark: ['123', '123', '123', '123', '123', '123', '123', '123', '123', '1234']
};

export default class Html extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Common ts={all.yl} />
        <Common ts1={all.red} />
        <Common ts2={all.dark} />
        {/* <Common ts3={all.red2} /> */}
      </React.Fragment>
    );
  }
}
