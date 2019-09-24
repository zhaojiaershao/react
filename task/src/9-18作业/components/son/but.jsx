import React, { Component } from 'react';
//引入样式文件
import '../style/index.scss';

export default class But extends Component {
  render() {
    const { back } = this.props.color;
    return (
      <div className="btn-zrb">
        <div className="zhang">
          <button
            className={back.warp}
            onClick={() => this.props.headchange('张良', 0)}
          >
            张良
          </button>
        </div>
        <div className="zhou">
          <button
            className={back.warp}
            onClick={() => this.props.headchange('周瑜', 1)}
          >
            周瑜
          </button>
        </div>
        <div className="cao">
          <button
            className={back.warp}
            onClick={() => this.props.headchange('曹操', 2)}
          >
            曹操
          </button>
        </div>
      </div>
    );
  }
}
