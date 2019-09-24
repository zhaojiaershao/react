import React, { Component } from 'react';
//引入样式
import '../style/index.scss';

export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      ispassword: '',
      email: ''
    };
  }
  //改变input值
  changeinput = ({ target }) => {
    console.log(target.value);
    console.log(target.name);
    this.setState({
      [target.name]: target.value
    });
  };

  getregister = () => {
    const { username, password, ispassword, email } = this.state;
    if (!username.trim() || username.length < 6) {
      return alert('用户名不能为空，位数不能小于六位数');
    } else if (!password.trim() || !/^(\w){6,20}$/.test(password)) {
      return alert('密码不许为空，且必须是6-20个字母、数字、下划线');
    } else if (!(password === ispassword)) {
      return alert('密码不正确');
    } else if (!email.trim()) {
      return alert('邮箱不能为空');
    }
    return alert('可以提交了');
  };

  render() {
    console.log(this.props);
    const { username, password, ispassword, email } = this.state;
    return (
      <div className="register-zrb-1">
        <h1>Register</h1>
        <form action="">
          <label>
            <input
              type="text"
              name="username"
              value={username}
              autoComplete="off"
              placeholder="用户名："
              onChange={this.changeinput}
            />
          </label>
          <label>
            <input
              type="password"
              name="password"
              value={password}
              autoComplete="off"
              placeholder="密码"
              onChange={this.changeinput}
            />
          </label>
          <label>
            <input
              type="text"
              name="ispassword"
              value={ispassword}
              autoComplete="off"
              placeholder=" 确认密码："
              onChange={this.changeinput}
            />
          </label>
          <label>
            <input
              type="text"
              name="email"
              value={email}
              autoComplete="off"
              placeholder="邮箱："
              onChange={this.changeinput}
            />
          </label>
          <label></label>
          <label>
            <button type="button" onClick={() => this.getregister}>
              注册
            </button>
            <button
              type="button"
              onClick={() => this.props.registerToggle('Login')}
            >
              登陆
            </button>
          </label>
        </form>
      </div>
    );
  }
}
