import React from 'react';

export default React.forwardRef((props, ref) => {
  console.log(props.coun);
  return (
    <div ref={ref}>
      <span>{props.coun.count}</span>
    </div>
  );
});
