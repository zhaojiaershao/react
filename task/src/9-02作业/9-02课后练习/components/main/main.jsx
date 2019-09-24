import React from 'react';
import './index.scss';

export default () => {
  return (
    <main>
      <div className="main">
        <div className="list">
          <ul>
            <li>新闻</li>
            <li>关于</li>
            <li>数据</li>
          </ul>
        </div>
        <div className="banner">
          <img src="https://about.canva.com/wp-content/uploads/sites/3/2018/11/%E6%BD%98%E8%AF%97%E5%B0%8F%E5%A7%90-%E6%9E%9C%E5%9B%AD3-tb-262x0.jpg" />
        </div>
        <div>
          <p>公告文</p>
        </div>
      </div>
    </main>
  );
};
