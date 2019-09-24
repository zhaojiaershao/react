import React from 'react';
import './style.scss';

export default props => {
  console.log(props);
  return (
    <table className="information">
      <thead>
        <tr>
          <th>当前信息共：{props.list.length}条</th>
          <th>
            <button>查看所有留言</button>
          </th>
          <th>
            <button onClick={() => props.removeSove()}>清空留言板</button>
          </th>
        </tr>
      </thead>
      <tbody>
        {props.list.map((item, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.input}</td>
              <td>时间</td>
              <td>
                <button onClick={() => props.remove(index)}>删除</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
