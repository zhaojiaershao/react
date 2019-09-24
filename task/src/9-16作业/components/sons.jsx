import React from 'react';
import '../style/index.scss';

export default props => {
  const { back } = props;
  return (
    <div className={`right-content ${back.rightbox}`}>静静的等着被人操作</div>
  );
};
