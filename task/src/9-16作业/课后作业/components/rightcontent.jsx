import React from 'react';
export default props => {
  console.log(props);
  return (
    <div
      {...props}
      style={{
        width: '200px',
        height: '200px',
        marginTop: '100px',
        float: 'left',
        textAlign: 'center',
        lineHeight: '200px'
      }}
    >
      {props.content}
    </div>
  );
};
//倒叙：将字符串切割为数组采用数组的倒叙再转回字符串
