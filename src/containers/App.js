import React, {
  Component,
  PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  login,
  logout
} from '../actions/';
import {
  Layout,
  Menu,
  Dropdown,
  Avatar
} from 'antd';
const {Header, Footer, Sider, Content} = Layout;
import sc2 from '../sc2';
import { withCookies } from 'react-cookie';
import axios from 'axios';
import config from '../exports';

class App extends Component {
  login() {
    window.location = sc2.getLoginURL();
  }
  logout() {
    this.props.actions.logout();
    this.props.cookies.remove('token');
  }
  componentWillUpdate() {
    if (!this.props.app.isLogged) {
      if (this.props.app.token) {
        axios.get(config.api + 'users', {
          headers: {
            "Authorization": "Bearer " + this.props.app.token
          }
        }).then(d => {
          sc2.setAccessToken(d.data.data[0].accessToken);
          this.props.actions.login({username: d.data.data[0].username, isLogged: true, isMod: false, user: d.data.data[0].user})
        })
      } 
      if(this.props.cookies.get('token')) {
        axios.get(config.api + 'users', {
          headers: {
            "Authorization": "Bearer " + this.props.cookies.get('token')
          }
        }).then(d => {
          sc2.setAccessToken(d.data.data[0].accessToken);
          this.props.actions.login({username: d.data.data[0].username, isLogged: true, isMod: false, user: d.data.data[0].user})
        })
      }
    }
  }
  componentWillMount() {
    if (!this.props.app.isLogged) {
      if (this.props.app.token) {
        axios.get(config.api + 'users', {
          headers: {
            "Authorization": "Bearer " + this.props.app.token
          }
        }).then(d => {
          sc2.setAccessToken(d.data.data[0].accessToken);
          this.props.actions.login({username: d.data.data[0].username, isLogged: true, isMod: false, user: d.data.data[0].user})
        })
      } 
      if(this.props.cookies.get('token')) {
        axios.get(config.api + 'users', {
          headers: {
            "Authorization": "Bearer " + this.props.cookies.get('token')
          }
        }).then(d => {
          sc2.setAccessToken(d.data.data[0].accessToken);
          this.props.actions.login({username: d.data.data[0].username, isLogged: true, isMod: false, user: d.data.data[0].user})
        })
      }
    }
  }
  render() {
    let menu = this.props.app.isLogged ? (
      <Menu theme='dark' defaultSelectedKeys={[]} style={{ lineHeight: '64px' }}>
        <Menu.Item key='1' onClick={this.logout.bind(this)}>Logout</Menu.Item>
      </Menu>
    ) : (
      <Menu theme='dark' defaultSelectedKeys={[]} style={{ lineHeight: '64px' }}>
        <Menu.Item key='1' onClick={this.login.bind(this)}>Login</Menu.Item>
      </Menu>
    );
    return (
      <Layout>
        <Header>
          <Avatar src={'/images/icon.png'} onClick={() => {this.props.history.push('/')}} />
          <Dropdown overlay={menu} trigger={['click']} placement='bottomRight'>
            <a
              style={{
                color: '#ffffff',
                float: 'right'
              }} className='ant-dropdown-link' href='#'>
              {
                this.props.app.isLogged ? <Avatar src={JSON.parse(this.props.app.user.json_metadata).profile.profile_image} /> : <span>Menu</span>
              }
            </a>
          </Dropdown>
        </Header>
        <Content>
          {this.props.children}
        </Content>
      </Layout>
    );
  }
}
App.propTypes = {
  actions: PropTypes.shape({
    login: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired
  }),
  app: PropTypes.shape({})
};
function mapStateToProps(state) {
  const props = { app: state.app };
  return props;
}
function mapDispatchToProps(dispatch) {
  const actions = {
    login,
    logout
  };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}
export default withCookies(connect(mapStateToProps, mapDispatchToProps)(App));
