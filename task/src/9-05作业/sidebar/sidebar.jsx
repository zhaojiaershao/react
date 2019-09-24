import React, { Component } from 'react';
import {
  Layout,
  Menu,
  Icon,
  Input,
  Skeleton,
  Switch,
  Card,
  Avatar,
  List,
  Typography
} from 'antd';

export default class sidebar extends Component {
  state = {
    loading: false
  };

  onChange = checked => {
    this.setState({ loading: checked });
  };

  render() {
    const { Header, Content, Sider } = Layout;
    const { Search } = Input;
    const { Meta } = Card;
    const { loading } = this.state;
    const data = [
      'Racing car sprays burning fuel into crowd.',
      'Japanese princess to wed commoner.',
      'Australian walks 100km after outback crash.',
      'Man charged over missing wedding girl.',
      'Los Angeles battles huge wildfires.'
    ];

    return (
      <div>
        <Layout>
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={broken => {
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
          >
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['key']}>
              <Menu.Item key="1">
                <Icon type="user" />
                <span className="nav-text">nav 1</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="video-camera" />
                <span className="nav-text">nav 2</span>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="upload" />
                <span className="nav-text">nav 3</span>
              </Menu.Item>
              <Menu.Item key="4">
                <Icon type="user" />
                <span className="nav-text">nav 4</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header
              style={{
                width: '90%',
                margin: '0 auto'
              }}
            >
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['key']}
                style={{
                  lineHeight: '64px'
                }}
              >
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
                <span>
                  <Search style={{ width: '200px' }} />
                </span>
              </Menu>
            </Header>
            <Content style={{ margin: '30px 60px 0' }}>
              <div
                style={{
                  padding: 40,
                  background: 'red',
                  minHeight: 530,
                  width: '100%'
                }}
              >
                <Card style={{ width: '35%', marginTop: 16 }} loading={loading}>
                  <Meta
                    avatar={
                      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    }
                    title="Card title"
                    description="This is the description"
                  />
                </Card>
                <span>
                  <Card
                    hoverable
                    style={{
                      width: '35%',
                      float: 'right',
                      marginTop: '-98px',
                      marginRight: '100px',
                      background: 'red',
                      border: 'none'
                    }}
                    cover={
                      <img
                        alt="example"
                        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                      />
                    }
                  ></Card>
                </span>
                <List
                  dataSource={data}
                  renderItem={item => (
                    <List.Item style={{ width: '35%' }}>{item}</List.Item>
                  )}
                />
              </div>
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}
