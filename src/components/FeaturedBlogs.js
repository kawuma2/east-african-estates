import React, { Component } from 'react'
import { BlogContext } from '../blogcontext'
import Title from './Title'
import { Link } from 'react-router-dom';

export default class FeaturedBlogs extends Component {
    static contextType = BlogContext;
  render() {
    let {featuredblogs: blogs} = this.context;
    //blogs = blogs.map(blog => {
        //return <Blogcomponent key={blog.id} blog={blog} />
    //})
    return (
      <section>
        <Title title='Featured blogs' />
        <div className='featured-blogs'>
          {blogs = blogs.map(blog => {
            return (
              <div className='featured-blogs-info'>
              <img src={blog.image} alt={blog.title} />
              <Link to={`/blog/${blog.slug}`}><h3>{blog.title}</h3></Link>
              </div>
              
            )
          })}
          
        </div>
      </section>
    )
  }
}
