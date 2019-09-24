import React from 'react';
import style from './index.module.css';

export default props => {
  const Tg = props.type || 'div';
  const content = props.children || 'hello';
  return (
    <Tg className={style[(props.classname, props.lists)] || props.default}>
      {content}
    </Tg>
  );
};
