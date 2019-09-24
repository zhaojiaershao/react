import React from 'react';
import Recursion from '../common/recursion';
import Middle from '../common/middle';
import Right from '../common/right';
import Img from './img';
const Navdata = [
  {
    id: 1,
    label: '我的主页',
    children: [
      { id: 10, icon: 'thunderbolt', label: '主页' },
      { id: 20, icon: 'api', label: '设置' }
    ]
  },
  {
    id: 2,
    label: '我的作品',
    children: [
      { id: 10, icon: 'tool', label: '文章' },
      { id: 20, icon: 'wifi', label: '笔记' },
      { id: 30, icon: 'zhihu-square', label: '问问' }
    ]
  },
  {
    id: 3,
    label: '我的关系',
    children: [
      { id: 10, icon: 'zhihu-circl', label: '关注' },
      { id: 20, icon: 'wallet', label: '粉丝' },
      { id: 30, icon: 'video-camera', label: '动态' }
    ]
  }
];
const Bady = [
  {
    id: 1,
    label: '可以想象以下一个树形结构各个节点存在的关系。',
    title: '通过调用props传递function'
  },
  {
    id: 2,
    label: '图标类型。遵循图标的命名规范',
    title: '设置图标的样式，例如 fontSize 和 color'
  },
  {
    id: 3,
    label: '图标主题风格。可选实心、描线、双色等主题风格，适用于官方图标',
    title: '图标旋转角度（3.13.0 后新增，IE9 无效）'
  },
  {
    id: 4,
    label: '在低端设备上 SVG 有更好的清晰度。',
    title: '如果使用 webpack'
  }
];
const Ight = [
  { id: 1, icon: 'wifi', label: 'javascript' },
  { id: 2, icon: 'usb', label: 'CSS' },
  { id: 3, icon: 'wallet', label: ' HTML' },
  { id: 4, icon: 'tool', label: 'Ajax' },
  { id: 5, icon: 'star', label: 'JSON ' },
  { id: 6, icon: 'skin', label: ' Python ' },
  { id: 7, icon: 'save', label: 'application' },
  { id: 8, icon: 'pushpin', label: 'array ' },
  { id: 9, icon: 'mobile', label: 'assembly ' },
  { id: 10, icon: 'meh', label: 'assert' },

  { id: 1, icon: 'hdd', label: 'assign ' },
  { id: 2, icon: 'flag', label: 'associated' },
  { id: 3, icon: 'fire', label: 'assignment ' },
  { id: 4, icon: 'crown', label: 'atomic ' },
  { id: 5, icon: 'compass', label: 'attribute ' },
  { id: 6, icon: 'car', label: 'audio ' },
  { id: 7, icon: 'bug', label: 'base ' },
  { id: 8, icon: 'audio', label: 'batch ' },
  { id: 9, icon: 'bank', label: 'benefit ' },
  { id: 10, icon: 'bell', label: 'binary ' },
  { id: 10, icon: 'alert', label: 'search ' }
];
export default props => {
  return (
    <div className="flex">
      <div>
        {/* 左侧导航 */}
        <Recursion data={Navdata} />
      </div>
      <div>
        {/* 中间内容 */}
        <Middle data={Bady} />
      </div>
      <div>
        {/* 右边部分 */}
        <Img />
        <Right data={Ight} />
      </div>
    </div>
  );
};
