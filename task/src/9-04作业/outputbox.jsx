import React from 'react';
import './style.scss';

export default props => {
  const { add, changeInput, input } = props;
  console.log(props);
  return (
    <div className="flex input-zrb-1">
      <div>
        <input
          type="text"
          value={input}
          onChange={e => {
            changeInput('input', e.target.value);
          }}
          placeholder="请输入内容"
        />
        <div>
          <button onClick={add}>提交</button>
        </div>
      </div>
    </div>
  );
};
