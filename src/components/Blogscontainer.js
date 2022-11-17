import React from 'react'
import BlogList from './BlogList'
import { BlogConsumer } from '../blogcontext'
import Blogcomponent from './Blogcomponent'

export default function Blogscontainer() {
  return (
    <BlogConsumer>
        {(value) => {
            const {blogs, featuredblogs} = value;
            return (
                <>
                <BlogList blogs={blogs}/>
                </>
            )
        }}
    </BlogConsumer>
  )
}
