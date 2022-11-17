import React from 'react'
import Blogcomponent from './Blogcomponent';
import '../cssfiles/blog.css'


function BlogList({blogs}) {
  if(blogs.length === 0){
    return (
      <div className='empty-search'>
        <h3>No blogs to show</h3>
      </div>
    )
  }
  return (
    <section className='blog'>
      <div className='blog-heading'>
        <span>Blog Posts</span>
        <h3>Recent Posts</h3>
      </div>
      <div className='blog-container'>
        {
          blogs.map(item => {
            return <Blogcomponent key={item.id} blog={item} />
          })
        }
      </div>
    </section>
  )
}

export default BlogList;