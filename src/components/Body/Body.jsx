import React, { Component } from 'react'
import Topping from "./Topping/Topping"
import BlogContainer from './BlogContainer/BlogContainer'
import "./Body.css"
export default class Body extends Component {
  render() {
    return (
      <div className='BodyBox'>
          <Topping/>
          <BlogContainer/>
      </div>
    )
  }
}
