import React from 'react'
import BlogList from './BlogList'
import { BlogConsumer } from '../blogcontext'

export default function Blogscontainer() {
  return (
    <BlogConsumer>
        {(value) => {
            const {blogs} = value;
            return (
                <>
                <BlogList blogs={blogs}/>
                </>
            )
        }}
    </BlogConsumer>
  )
}
