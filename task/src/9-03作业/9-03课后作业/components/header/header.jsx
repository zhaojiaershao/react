import React from 'react';
import Srech from '../common/serch/serch';
import './index.scss';

export default () => {
  return (
    <React.Fragment>
      {/* 首页顶端*/}
      <div className="flex space-between header-zb-1">
        {/*左部分*/}
        <ul className="flex">
          <li>壹</li>
          <li>贰</li>
          <li>叁</li>
        </ul>
        {/* 右部分 */}
        <ul className="flex">
          <li>壹</li>
          <li>贰</li>
        </ul>
      </div>
      {/* 搜索框 */}
      <div className="flex space-between search-inner-1">
        <div className="search">
          <input type="text" placeholder="请输入内容" />
          <button>搜索</button>
        </div>
        <ul className="flex">
          <li>手机</li>
          <li>小米</li>
          <li>华为</li>
          <li>魅族</li>
          <li>华为</li>
        </ul>
      </div>
      {/* 标题 */}
      <div className="flex works-inner-1">
        <h2>用于构建用户界面的 JavaScript 库</h2>
      </div>
      {/* 产品介绍 */}
      <div className="best">
        <div className="flex space-between brief-inner-1">
          <ul className="flex">
            <li>壹</li>
            <li>贰</li>
            <li>叁</li>
          </ul>
          <ul className="flex">
            <li>壹</li>
            <li>贰</li>
            <li>叁</li>
          </ul>
        </div>
        <div className="flex space-between">
          <Srech classname="red" />
          <Srech orage="orage" />
          <Srech yellow="yellow" />
          <Srech black="black" />
          <Srech fff="fff" />
        </div>
      </div>
    </React.Fragment>
  );
};
