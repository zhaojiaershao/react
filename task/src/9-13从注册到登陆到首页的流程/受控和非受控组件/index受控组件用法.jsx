import React, { Component } from 'react';
import '../style/label.scss';
const myState = {
  text: '',
  password: '',
  selest: 'default',
  checkbox: [false, false],
  radio: '1',
  textarea: ''
};
export default class Index extends Component {
  //表单提交事件
  handonSubmit = event => {
    const { target } = event;
    event.preventDefault(); //取消默认事件s
    console.log(target.querySelectorAll('input[name=text]')[0].value);
  };

  //重置表单事件
  reSetFrom = () => {
    // console.log(myState);
    this.setState(myState);
  };
  //改变state的值
  handChange = ({ target }) => {
    if (target.name === 'checkbox') {
      const newCheckbox = [...this.state.checkbox];
      newCheckbox[target.value] = target.checked;
      console.log(([...this.state.checkbox][target.value] = target.checked));
      return this.setState({
        [target.name]: newCheckbox
      });
    }
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
    const { text, password, selest, checkbox, radio, textarea } = this.state;
    return (
      <form
        onSubmit={this.handonSubmit}
        onReset={this.reSetFrom}
        autoComplete="off"
      >
        <label>
          输入框：
          <input
            type="text"
            value={text}
            onChange={this.handChange}
            name="text"
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
          选择框：
          <select name="selest" value={selest} onChange={this.handChange}>
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
          </select>
        </label>
        <label>
          复选框：
          <input
            type="checkbox"
            checked={checkbox[0]}
            value="0"
            name="checkbox"
            onChange={this.handChange}
          />
          <input
            type="checkbox"
            checked={checkbox[1]}
            value="1"
            name="checkbox"
            onChange={this.handChange}
          />
        </label>
        <label>
          单选框：
          <input
            type="radio"
            name="radio"
            checked={radio === '1'}
            value="1"
            onChange={this.handChange}
          />
          <input
            type="radio"
            name="radio"
            checked={radio === '2'}
            value="2"
            onChange={this.handChange}
          />
        </label>
        <label>
          文本域：
          <textarea
            name="textarea"
            value={textarea}
            onChange={this.handChange}
          ></textarea>
        </label>
        <label>
          <button type="button" onClick={this.register}>
            注册
          </button>
          {/* <button type="submit">表单提交</button> */}
          <button type="reset">重置</button>
        </label>
      </form>
    );
  }
  register = () => {
    //前端验证，验证通过以后
    // 2.调用接口，接口返回的数据存到全局里面
    // 3.控制跳转到登陆页面
  };
}
