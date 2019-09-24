import React from 'react';
export default props => {
  const recursion = data => {
    return data.map((item, index) => {
      return (
        <div>
          <div key={item.id || index} className="mlddle-zrb">
            <p>{item.label}</p>
            <h1>{item.title}</h1>
            <hr />
            {item.children && recursion(item.children)}
          </div>
        </div>
      );
    });
  };
  return recursion(props.data);
};
