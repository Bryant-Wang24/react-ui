
import './example.scss'
import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, NavLink} from 'react-router-dom';
import {Layout, Aside, Header, Content, Footer} from './lib/layout/layout';
import Icon from "./lib/icon/icon";
import IconDemo from "./lib/icon/icon.demo";
import ButtonDemo from "./lib/button/button.demo";
import DialogDemo from "./lib/dialog/dialog.demo";
import SwitchExample from "./lib/switch/switch.demo";
import SelectExample from "./lib/select/select.demo";
import ToastExample from "./lib/toast/toast.demo";

const x = require('!!raw-loader!./lib/icon/icon.example')
console.log(x.default)

ReactDOM.render(
  <Router>
    <Layout className='docLayout' style={{minHeight:'100vh'}}>
      <Header className='docHeader'>
        <div className="logo">
          <Icon className='qingteng' name='qingteng'/>
          <span>QT-UI</span>
        </div>
      </Header>
      <Layout>
        <Aside className='docAside' >
          <h2>组件</h2>
          <ul>
            <li>
              <NavLink activeClassName="active" to="/icon">Icon 图标</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/button">Button 按钮</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/dialog">Dialog 对话框</NavLink>
            </li>
            {/* <li>
              <NavLink activeClassName="active" to="/layout">Layout 布局</NavLink>
            </li> */}
            <li>
              <NavLink activeClassName="active" to="/switch">Switch 开关</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/select">Select 下拉框</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/toast">Toast 提示</NavLink>
            </li>
          </ul>
        </Aside>
        <Content className='docContent'>
          <Route path="/icon" component={IconDemo}/>
          <Route path="/button" component={ButtonDemo}/>
          <Route path="/dialog" component={DialogDemo}/>
          {/* <Route path="/layout" component={LayoutExample}/> */}
          <Route path="/switch" component={SwitchExample}/>
          <Route path="/select" component={SelectExample}/>
          <Route path="/toast" component={ToastExample}/>
        </Content>
      </Layout>
      <Footer className="docFooter">
        &copy; 王秋爽
      </Footer>
    </Layout>
  </Router>
  , document.querySelector('#root'));
