import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { BlogContext } from "../blogcontext";
import "../cssfiles/singleblog.css";



const SingleBlog = () => {
  const { slug } = useParams();
  const { getBlog } = useContext(BlogContext);
  const blog = getBlog(slug);
  if (!blog) {
    return (
      <div className="error">
        <h3>No such blog could be found</h3>
        <Link to="/blog" className="btn-primary">
          Back to blogs
        </Link>
      </div>
    );
  }
  const { title, author, body, image } = blog; 

  return (
    <>
      <section className="section-oneblog">
        <div className="singleblog-box">
          <div className="singleblog-img">
            <img src={image} alt={title} />
          </div>
          <div className='singleblog-text'>
            <h3>{title}</h3>
            <p>{body}</p>
            <div className="posted">
              <h5>Posted by:<span> {author}</span> </h5>
            </div>
          </div>
          
        </div>
        <div className="blog-buttons">
          <Link to='/contacts' className="btn-primary btn2">
              Comment
            </Link>
           <Link to="/blog" className="btn-primary btn1">
            Back to blogs
          </Link>
          
            
        </div>
       
      </section>
    </>
  );
};

export default SingleBlog;
