import React from 'react'
import { Layout, Menu, theme, Avatar, Popover, Button } from 'antd'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { UserOutlined } from '@ant-design/icons'

const { Header } = Layout

const items = [
  {
    label: <Link to="/task-details">Task Details</Link>,
    key: 'task-details',
  },
  {
    label: <Link to="/efforts-graph">Effort Graph</Link>,
    key: 'efforts-graph',
  },
]

const MainLayout = (props) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  const location = useLocation()
  const navigate = useNavigate()
  const user = localStorage.getItem('user')

  const onClick = (e) => {
    navigate(e.key)
  }

  const onLogout = () => {
    localStorage.clear()
    navigate('/')
  }

  const content = (
    <div style={{ width: '80px' }}>
      <p>Hello {user}</p>
      <Button onClick={onLogout}>Logout</Button>
    </div>
  )

  return (
    <Layout>
      {user && (
        <Header
          theme="dark"
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 1,
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div
              style={{
                float: 'left',
                width: 120,
                color: 'white',
              }}
            >
              <h1>Tasks</h1>
            </div>
            <Menu
              theme="dark"
              onClick={onClick}
              defaultSelectedKeys={[location.pathname.replace('/', '')]}
              mode="horizontal"
              items={items}
            />
          </div>
          <div>
            <Popover content={content} title="Profile" trigger="click">
              <Avatar
                style={{ backgroundColor: '#87d068' }}
                icon={<UserOutlined />}
              />
            </Popover>
          </div>
        </Header>
      )}
      <div
        style={{
          padding: 12,
          minHeight: '80vh',
          background: colorBgContainer,
        }}
      >
        {props.children}
      </div>
    </Layout>
  )
}

export default MainLayout
