import React from 'react';
import Header from './components/header/index';
import Search from './components/header/serach';
import Main from './components/main';

export default props => {
  return (
    <div>
      {/* 头部 */}
      <Header>
        <Search />
      </Header>
      {/* 身体 */}
      <Main />
    </div>
  );
};
