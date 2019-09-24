import React from 'react';

export default props => {
  console.log(props);
  return (
    <div
      className={`phone ${props.classname} ${props.orage} ${props.yellow} ${props.black} ${props.fff}`}
    >
      <span></span>
      <p>小米</p>
    </div>
  );
};
