import React from 'react';
import '../css/index.css';
export default class childs extends React.Component {
  render() {
    const { props } = this;
    return React.createElement(
      'div',
      {},
      <React.Fragment>
        <React.Fragment>
          {props.ts &&
            props.ts.map(item => {
              return <p className="yellow">{item}</p>;
            })}
        </React.Fragment>
      </React.Fragment>
    );
  }
}
//   {React.createElement('p', { className: 'red' }, 'HULK API')}
