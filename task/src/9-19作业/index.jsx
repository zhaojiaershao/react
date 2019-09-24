import React, { useState } from 'react';
import hoc from './child';
import Hocchild from './hocchild';
import './indx.scss';

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: '100'
    };
    //创建ref对象
    this.myref = React.createRef();
    //实例化高阶组件
    this.MyHoc = hoc(Hocchild);
  }
  componentDidMount() {
    console.log(this.myref.current);
  }
  headchange = () => {
    this.setState({
      //改变数值的
      count: this.state.count - 1
    });
  };
  render() {
    return (
      <div className="max">
        <this.MyHoc
          ref={this.myref}
          count={this.state}
          headchange={this.headchange}
        />
      </div>
    );
  }
}
export default Example;
