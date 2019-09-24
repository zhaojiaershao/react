import React, { Component } from 'react';
import Leftcontent from './components/leftcontent';
import Rightcontent from './components/rightcontent';

export default class Index extends Component {
  constructor() {
    super();
    this.state = {
      content: ''
    };
  }
  headchange = ({ target }) => {
    this.setState({
      content: target.value
    });
  };
  render() {
    return (
      <div
        style={{
          width: '600px',
          height: '400px',
          background: 'green',
          margin: '0 auto'
        }}
      >
        <input
          style={{ marginLeft: '180px', height: '50px', paddingLeft: '100px' }}
          type="text"
          value={this.state.content}
          onChange={this.headchange}
        />
        <Leftcontent content={this.state.content} />
        <Rightcontent content={this.state.content} />
      </div>
    );
  }
}
