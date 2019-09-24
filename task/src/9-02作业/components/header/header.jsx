import React from 'react';
import Child from '../common/index';

export default () => {
  return (
    <header>
      <Child type="div">
        <img
          style={{ marginLeft: '180px' }}
          src="http://jz5158.com/public/images/logo.png"
          alt=""
        />
      </Child>

      <Child type="div" lists="list">
        <ul>
          <li>首页</li>
          <li>功能视频</li>
          <li>软件下载</li>
          <li>软件定制</li>
          <li>支付中心</li>
          <li>招商加盟</li>
          <li>关于我们</li>
          <li>行业资讯</li>
        </ul>
      </Child>
    </header>
  );
};
