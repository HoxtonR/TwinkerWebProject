import React, { Component } from 'react'
import BlogContent from './BlogContent/BlogContent'
import "./BlogContainer.css"
export default class BlogContainer extends Component {
  render() {
    return (
      <div className='BlogContainer'>
      <BlogContent/>
      <BlogContent/>
      <BlogContent/>
      <BlogContent/>
      <BlogContent/>
      <BlogContent/>
      <BlogContent/>
      <BlogContent/>
      </div>
    )
  }
}
