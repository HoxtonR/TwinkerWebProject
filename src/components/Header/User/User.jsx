import React, { Component } from 'react'
import { UserOutlined } from '@ant-design/icons'
import LoggedUserMenu from './LoggedUser/LoggedUserMenu'
import UnloggedUserMenu from './UnloggedUser/UnloggedUserMenu'
export default class User extends Component {
  render() {
    return (
      <div>
          <UserOutlined style={{color:"black",fontSize:"30px",paddingLeft:"30px"}}/>
          <LoggedUserMenu/>
      </div>
    )
  }
}
