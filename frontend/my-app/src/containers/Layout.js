import React from 'react';
import { Link } from 'react-router-dom'


import { Layout, Menu, Breadcrumb, Col } from 'antd';


const { Header, Content, Footer, Card } = Layout;

const CustomLayout = (props) => {
    return(
      <div>
                <ul className="topNav">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/asd'>Data</Link></li>

                </ul>
              <div className="mainClass">
                   <Breadcrumb style={{ margin: '24px 10px' }}>
                <Breadcrumb.Item><Link to='/'>Home</Link></Breadcrumb.Item>
                <Breadcrumb.Item><Link to='/'>List</Link></Breadcrumb.Item>
              </Breadcrumb>
                  {props.children}
              </div>
      </div>
    );
};






export default CustomLayout;
