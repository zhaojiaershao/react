import React from 'react';
export default props => {
  return (
    <div className="flex">
      <div>
        <input type="text" />
        <button>搜索</button>
      </div>

      <ul className="flex">
        <li>登陆</li>
        <li>注册</li>
      </ul>
    </div>
  );
};
