import React, { Component } from 'react';
import axios from 'axios';
import '../style/label.scss';
const myState = {
  username: '',
  password: ''
};
export default class Register extends Component {
  //重置表单事件
  reSetFrom = () => {
    this.setState(myState);
  };
  //改变state的值
  handChange = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  };
  constructor() {
    super();
    this.state = myState;
  }
  //渲染函数
  render() {
    const { username, password } = this.state;
    return (
      <form onReset={this.reSetFrom} autoComplete="off">
        <label>
          输入框：
          <input
            type="text"
            value={username}
            onChange={this.handChange}
            name="username"
          />
        </label>
        <label>
          密码框：
          <input
            type="password"
            value={password}
            onChange={this.handChange}
            name="password"
          />
        </label>
        <label>
          <button type="reset">重置</button>
          <button type="button" onClick={this.register}>
            注册
          </button>
        </label>
      </form>
    );
  }
  register = () => {
    //1.前端验证，验证通过以后
    const { username, password } = this.state;
    if (!username.trim()) {
      return alert('用户名不能为空');
    } else if (!password.trim()) {
      return alert('密码不能为空');
    }
    //2.调用接口，接口饭hi的数据村到全局里面
    //凡是实际到用户数据信息的，在接口中一定是用post请求方式
    axios.get('/api/register.json', { username, password }).then(res => {
      if (res.status === 200) {
        //将账号密码存到本地一份【注意：在真是的项目里，不能这样做，仅适用于测试本地开发】
        sessionStorage.setItem(
          'userRegister',
          JSON.stringify({ username, password })
        );
        // 3.控制跳转到登陆页面
        this.props.getstatus({ ...res.data, typename: 'Login' });
      } else {
        alert('网络错误，稍后重试');
      }
    });
  };
}
// getItem 是获取
//setItem 是设置
