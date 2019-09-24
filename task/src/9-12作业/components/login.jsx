import React, { Component } from 'react';
//引入样式
import '../style/index.scss';
export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }
  //修改input的值
  loginChange = ({ target }) => {
    console.log(target.value);
    console.log(target.name);
    this.setState({
      [target.name]: target.value
    });
  };
  verif = () => {
    const DICT = {
      username: {
        len: 6,
        err: '用户名不能为空，且长度不小于6位'
      }
    };
    const { username, password } = this.state;
    if (!username.trim() || username.length < 6) {
      return alert('请输入正确的用户名');
    } else if (!password.trim() || !/^(\w){6,20}$/.test(password)) {
      return alert('您的密码不正确');
    }
    return true;
  };
  //登陆
  Landingpage = () => {
    if (this.verif()) {
      alert('可以提交了');
    }
  };
  render() {
    const { username, password } = this.state;
    return (
      <div className="Login-zrb-1">
        <h1>Login</h1>
        <form>
          <label htmlFor="">
            <span>账号：</span>
            <input
              type="text"
              autoComplete="off"
              value={username}
              name="username"
              onChange={this.loginChange}
            />
          </label>
          <label htmlFor="">
            <span>密码：</span>
            <input
              type="text"
              autoComplete="off"
              value={password}
              name="password"
              onChange={this.loginChange}
            />
          </label>
          <label htmlFor="">
            <button type="button" onClick={() => this.Landingpage}>
              登陆
            </button>
            <button
              type="button"
              onClick={() => this.props.loginToggle('Register')}
            >
              注册
            </button>
          </label>
        </form>
      </div>
    );
  }
}
