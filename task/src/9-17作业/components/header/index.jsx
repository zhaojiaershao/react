import React from 'react';
import '../style/index.scss';

export default props => {
  return (
    <div className="flex space-between nav-zrb">
      <img src={require('../img/logo.png')} />
      <ul className="flex">
        <li>首页</li>
        <li>文章</li>
        <li>笔记</li>
        <li>问问</li>
        <li>充电</li>
      </ul>
      {props.children}
    </div>
  );
};
