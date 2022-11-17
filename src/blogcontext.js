import React, { Component } from "react";
//import items from "./blogdata";
import Client from "./Contentful";


const BlogContext = React.createContext();

export default class BlogProvider extends Component {
  state = {
    blogs: [],
    featuredblogs: [],
  };

  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "eastAfricanEstatesBlog"
      });

      let blogs = this.formatblogData(response.items);
    let featuredblogs = blogs.filter((blog) => blog.featured === true);
    this.setState({ blogs, featuredblogs });

    } catch(error){
      console.log(error);
    }
  }

  componentDidMount() {
    this.getData();
  }

  formatblogData(items) {
    let formatedData = items.map((item) => {
      let blog = { ...item };

      return blog;
    });
    return formatedData;
  }

  getBlog = slug => {
    let tempBlogs = [...this.state.blogs];
    const blog = tempBlogs.find(blog => blog.slug === slug);
    return blog;
  }

  render() {
    return (
      <BlogContext.Provider value={{ ...this.state, getBlog: this.getBlog }}>
        {this.props.children}
      </BlogContext.Provider>
    );
  }
}

const BlogConsumer = BlogContext.Consumer;

export { BlogProvider, BlogConsumer, BlogContext };
