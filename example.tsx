
import './example.scss'
import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, NavLink} from 'react-router-dom';
import ButtonExample from './lib/button.example';
import DialogExample from './lib/dialog/dialog.example';
import LayoutExample from './lib/layout/layout.example'
import {Layout, Aside, Header, Content, Footer} from './lib/layout/layout';
import Icon from "./lib/icon/icon";
import IconDemo from "./lib/icon/icon.demo";

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
            <li>
              <NavLink activeClassName="active" to="/layout">Layout 布局</NavLink>
            </li>
          </ul>
        </Aside>
        <Content className='docContent'>
          <Route path="/icon" component={IconDemo}/>
          <Route path="/button" component={ButtonExample}/>
          <Route path="/dialog" component={DialogExample}/>
          <Route path="/layout" component={LayoutExample}/>
        </Content>
      </Layout>
      <Footer className="docFooter">
        &copy; 王秋爽
      </Footer>
    </Layout>
  </Router>
  , document.querySelector('#root'));
