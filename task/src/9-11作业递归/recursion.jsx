import React from "react";

export default props => {
  // 根据props传递过来的属性制定元素的类型
  const Father = props.type.father || "ul";
  const Son = props.type.son || "li";
  const recursion = data => {
    return (
      <Father className="ul">
        {data.map(item => {
          return (
            <Son
              key={item.id}
              onClick={event => {
                // event.preventDefault();
                event.stopPropagation();
                props.set(item.id);
              }}
              className={`son ${item.class || ""}`}
            >
              <p className="recursion-label">{item.label}</p>
              {item.children &&
                Array.isArray(item.children) &&
                recursion(item.children)}
            </Son>
          );
        })}
      </Father>
    );
  };

  return recursion(props.data);
};