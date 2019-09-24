import React from 'react';

export default props => {
  if (props.type) {
    return <props.type>{props.txt}</props.type>;
  } else {
    return <img src={props.src} width={props.width} height={props.height} />;
  }
};
