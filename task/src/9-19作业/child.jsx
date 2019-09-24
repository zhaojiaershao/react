import React from 'react';
import './indx.scss';

export default Mycon => {
  class Hoc extends React.Component {
    render() {
      console.log(this.props);
      //解构
      const { count, myref, ...Props } = this.props;
      console.log(count);
      return (
        <>
          <button onClick={() => this.props.headchange()}>
            我是父组件的按钮，每次点击我都会让子组件100减1
          </button>
          <div className="content">
            <Mycon ref={myref} {...Props} coun={count} />
          </div>
        </>
      );
    }
  }
  //在这里使用 forwardRef来创建一个ref组件
  return React.forwardRef((props, ref) => {
    return <Hoc {...props} myref={ref} />;
  });
};
