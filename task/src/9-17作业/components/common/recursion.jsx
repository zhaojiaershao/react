import React from 'react';
import { Icon } from 'antd';

export default props => {
  const recursion = data => {
    return data.map((item, index) => {
      return (
        <ul key={item.id || index} className="flex navleft-zrb">
          <li>
            <span>{item.children ? '' : <Icon type={item.icon} />}</span>
            {item.label}
            {item.children && recursion(item.children)}
          </li>
        </ul>
      );
    });
  };
  return recursion(props.data);
};
