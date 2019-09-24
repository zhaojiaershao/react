import React from 'react';
import '../css/index.css';

export default class common extends React.Component {
  render() {
    const { props } = this;
    return React.createElement('div', {}, [
      React.createElement(
        'div',
        { className: 'all' },
        <React.Fragment>
          {props.ts &&
            props.ts.map((item, index) => {
              return React.createElement(
                'p',
                { key: index, className: 'yellow' },
                item
              );
            })}
        </React.Fragment>,
        <React.Fragment>
          {props.ts1 &&
            props.ts1.map((item, index) => {
              return React.createElement(
                'p',
                { key: index, className: 'red' },
                item
              );
            })}
        </React.Fragment>
      ),
      React.createElement(
        'div',
        { className: 'al' },
        <React.Fragment>
          {props.ts2 &&
            props.ts2.map((item, index) => {
              return React.createElement(
                'p',
                { key: index, className: 'baek' },
                item
              );
            })}
        </React.Fragment>
      )
      // React.createElement(
      //   'div',
      //   {},
      //   <React.Fragment>
      //     {props.ts2 &&
      //       props.ts2.map((item, index) => {
      //         return React.createElement(
      //           'p',
      //           { key: index, className: '' },
      //           item
      //         );
      //       })}
      //   </React.Fragment>
      // )
    ]);
  }
}
