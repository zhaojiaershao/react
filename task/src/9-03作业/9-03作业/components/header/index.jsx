import React from 'react';
import './index.scss';

export default () => {
  return (
    <React.Fragment>
      {/* 顶端导航样式 */}
      <div className="flex space-between navigation-zrb-1">
        <ul className="flex">
          <li>欢迎来到天猫</li>
          <li>请登录</li>
          <li>请注册</li>
        </ul>
        <ul className="flex">
          <li>退出登陆</li>
          <li>购物车</li>
          <li>淘宝网</li>
        </ul>
      </div>

      <div className="flex serch-zrb-1">
        {/* logo */}

        <img
          src="//img.alicdn.com/tfs/TB11ojWRXXXXXafaFXXXXXXXXXX-190-27.png"
          alt=""
        />
        <div className="search">
          <input type="text" placeholder="请输入内容" />
          <button>搜索</button>

          <ul className="flex space-between">
            <li>手机</li>
            <li>魅族</li>
            <li>小米</li>
            <li>华为</li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};
