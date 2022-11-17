import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../cssfiles/blog.css";

export default function Blogcomponent({ blog }) {
  const { title, slug, author, body, image } = blog;
  return (
   // <section className="blog-box">
      <div className="blog-box">
        <div className="blog-img">
          <img src={image} alt="images-avatar" />
        </div>
        <div className="blog-text">
         <Link to={`/blog/${slug}`}> <h3 className="blog-title">{title}</h3></Link>
          <h5>Posted by:  <span>{author}</span></h5>
          
          <p className="blog-info">
            {body.slice(0, 200)}
            
          </p>
          <Link to={`/blog/${slug}`}><p className="readmore">CONTINUE READING</p></Link>
          
        </div>
      </div>
   // </section>
  );
}

Blogcomponent.propTypes = {
  blog: PropTypes.shape({
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    //title: PropTypes.number.isRequired,
  }),
};
