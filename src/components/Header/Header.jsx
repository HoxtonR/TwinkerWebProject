import React, { Component } from 'react'
import Search from "./Search/Search"
import User from "./User/User"
import SignUp from './SignUp/SignUp'
import LogIn from './LogIn/LogIn'
import "./Header.css"
export default class Header extends Component {
  render() {
    return (
      <div className='HeaderBoard'>
          <div className = "SearchInput">
            <Search/>
          </div>
          <div className = "UserPanel">
            <User/>
          </div>
          <div className='SignUp'>
            <SignUp/>
          </div>
          <div className='LogIn'>
            <LogIn/>
          </div>
      </div>
    )
  }
}
