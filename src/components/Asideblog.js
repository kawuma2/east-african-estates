import React, {useContext} from 'react'
import { BlogContext } from '../blogcontext';
import { Link } from 'react-router-dom';

export default function Asideblog() {
  const {featuredblogs} = useContext(BlogContext);
  const blogs = featuredblogs;
  return (
    <div className='side-blog'>
      <h1>Featured Blogs</h1>
      <div className='side-blog-info'>
        {blogs.map((blog)=> {
          return (
            <div>
              <img src={blog.image} alt={blog.title} />
              <Link to={`/blog/${blog.slug}`}><h3>{blog.title}</h3></Link>
              
            </div>
          )
        })}
      </div>
    </div>
  )
}
