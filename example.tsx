
import './example.scss'
import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import IconExample from './lib/icon/icon.example';
import ButtonExample from './lib/button.example';
import DialogExample from './lib/dialog/dialog.example';
import LayoutExample from './lib/layout/layout.example'
import Layout from "./lib/layout/layout";
import Header from "./lib/layout/header";
import Aside from "./lib/layout/aside";
import Content from "./lib/layout/content";

ReactDOM.render(
  <Router>
    <Layout className='docLayout' style={{height:'100vh'}}>
      <Header className='docHeader'>
        <div className="logo">
          FUI
          {/*<img src={icon}  alt=''/>*/}

        </div>
      </Header>
      <Layout>
        <Aside className='docAside' >
          <h2>组件</h2>
          <ul>
            <li>
              <Link to="/icon">Icon 图标</Link>
            </li>
            <li>
              <Link to="/button">Button 按钮</Link>
            </li>
            <li>
              <Link to="/dialog">Dialog 对话框</Link>
            </li>
            <li>
              <Link to="/layout">Layout 布局</Link>
            </li>
          </ul>
        </Aside>
        <Content className='docContent'>
          <Route path="/icon" component={IconExample}/>
          <Route path="/button" component={ButtonExample}/>
          <Route path="/dialog" component={DialogExample}/>
          <Route path="/layout" component={LayoutExample}/>
        </Content>
      </Layout>
    </Layout>
  </Router>
  , document.querySelector('#root'));
