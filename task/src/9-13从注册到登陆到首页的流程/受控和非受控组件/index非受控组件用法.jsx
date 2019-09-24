import React, { Component } from "react";
import "../style/label.scss";
class Index extends Component {
  // 表单提交事件
  handleSubmit = event => {
    const { target } = event;
    event.preventDefault(); // 取消默认事件
    console.log("表单的提交事件");
    console.log(target.querySelectorAll("input[name=text]")[0].value);
  };
  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        onReset={() => {
          alert("初始化表单");
        }}
      >
        <label htmlFor="">
          输入框：
          <input type="text" name="text" />
        </label>
        <label htmlFor="">
          密码框：
          <input type="password" name="password" />
        </label>
        <label htmlFor="">
          选择框
          <select name="select">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </label>
        <label htmlFor="">
          复选框：
          <input type="checkbox" />
          <input type="checkbox" />
        </label>
        <label htmlFor="">
          单选框：
          <input type="radio" name="radio" />
          <input type="radio" name="radio" />
        </label>
        <label>
          文本域：
          <textarea name="textarea" />
        </label>
        <label htmlFor="">
          <button type="button">按钮提交</button>
          <button type="submit">表单提交</button>
          <button type="reset">重置</button>
        </label>
      </form>
    );
  }
}

export default Index;