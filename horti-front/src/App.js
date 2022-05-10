import './App.css';
import { Button, Menu } from 'antd';
import { PlusOutlined, UnorderedListOutlined } from '@ant-design/icons';
import Routes from './routes';
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <div className="main">
      <Layout className='main__content'>
        <Header className='header'>Header</Header>
        <Layout >
          <Sider className='menu'>Sider
            <Menu className='menu__section'>
              <Menu.Item key={1} icon={<PlusOutlined />}>
                Adicionar Produto
              </Menu.Item>
              <Menu.Item key={2} icon={ <UnorderedListOutlined /> }>
                Listar Produto
              </Menu.Item>
            </Menu>
          </Sider>
          <Content>
            <Routes />
          </Content>
        </Layout>
        <Footer className='footer'>Todos os direitos reservados</Footer>
      </Layout>
    </div>
  );
}

export default App;

//teste