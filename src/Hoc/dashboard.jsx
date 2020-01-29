import React, { Component } from "react";
import { Layout, Menu, Icon } from "antd";
import {connect} from 'react-redux';
import {compose} from 'redux';
import './dashboard.css';
const { Header, Content, Footer, Sider } = Layout;

const DashboardComponent = InitialComponent => {
  class UpdatedComponent extends Component {
    render() {
      return (
        <Layout style={{minHeight:'100vh'}}>
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={broken => {
            }}
            onCollapse={(collapsed, type) => {
            }}
          >
            <div className="logo">The Rent Car</div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
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
          <Layout style={{minHeight:'70vh'}}>
            <Header style={{ background: "#fff", padding: 0 }} />
            <Content style={{ margin: "24px 16px 0", background:'blue'}}>
              <div style={{ padding: 24, background: "#fff", minHeight: '100%' }}>
                 <InitialComponent/>
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Ant Design ©2020 Created by Akbar , Feruz , Umid
            </Footer>
          </Layout>
        </Layout>
      );
    }
  }

  return UpdatedComponent;
};

const mapStateToProps=({logins})=>{
    return{
        logins
    }
}

const Dashboard=compose(connect(mapStateToProps, null), DashboardComponent);

export default Dashboard;


