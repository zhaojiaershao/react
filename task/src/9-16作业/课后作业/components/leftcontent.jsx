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
        float: 'right',
        textAlign: 'center',
        lineHeight: '200px'
      }}
    >
      {props.content}
    </div>
  );
};
