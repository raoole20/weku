import React, { useEffect, useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  HeartOutlined,
  HistoryOutlined,
  KeyOutlined
} from '@ant-design/icons';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import CardGrid from './CardGrid';
import Allcats from './Allcats'
import Forcats from './Forcats'

const { Header, Content, Footer, Sider } = Layout;

const DashBoard = ()=> {


  const [ collapsed, setState ] = useState(false)

  const consultarApi = ()=>{
      console.log('consultadon');
  };

  
  useEffect( ()=>{
      consultarApi();
  });

  const onCollapse = collapsed => {
    console.log(collapsed);
    setState( !collapsed );
  };

  return( 
    <Router>
      <Layout className='dashboard'>

        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse} className='dashboard_sidebar'>
          <h2 className="logo"><span>Api</span>Cats</h2> 
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<HeartOutlined />}>
              Mis Favoritos
            </Menu.Item>
            <Menu.Item key="2" icon={<HistoryOutlined />}>
              Ultimos Vistos
            </Menu.Item>
            <Menu.Item key="4" icon={<FileOutlined />}>
              Perritos
            </Menu.Item>
            <Menu.Item key="12" icon={<KeyOutlined />}>
              cerrar seccion
            </Menu.Item>
          </Menu>
        </Sider>

        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb className='barra_usuario'>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            
              <div className="flex"> 
                <CardGrid tipo="0"  direccion="/allcats" />
                <CardGrid  tipo="1" direccion="/forcats" /> 
              </div>

              <Routes>
                  <Route exact path='/allcats' element={<Allcats/>}/>
                  <Route exact path='/forcats' element={<Forcats/>} />
                  <Route exact path='/'        element={   
                    <>
                        
                    </> 
                  } />
              </Routes>
        
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}> Diseñado y creado por Raul Espina  </Footer>
        </Layout>

      </Layout>
    </Router>
      
  )
}

export default DashBoard;