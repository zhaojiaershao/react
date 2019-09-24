import React from 'react';
import { Icon } from 'antd';
import './common';
export default props => {
  const recursion = data => {
    return data.map((item, index) => {
      return (
        <span key={item.id || index} className="right-zrb">
          <Icon type={item.icon} />
          {item.label}
          {item.children && recursion(item.children)}
        </span>
      );
    });
  };
  return recursion(props.data);
};
