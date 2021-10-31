import React, { useState } from 'react'

const BlogPosts = () => {
  const [showAddPost, setShowAddPost] = useState(false)

  return (
    < >
      <h1> Blog Posts </h1>
      <button onClick={() => setShowAddPost(true)}> Add Posts </button>
      { showAddPost ? (
        <div>
          <div> New Post </div>
          <div>
            <label>Title</label>
            <input
              placeholder="Enter the Title of the Post"
            />
            <label>Image</label>
            <input
              placeholder="Enter Image URL"
            />
            <label>Description</label>
            <input
              placeholder="Enter Description"
            />
          </div>
          <div>
            <button onClick={() => setShowAddPost(false)}> Save </button>
            <button onClick={() => setShowAddPost(false)}> Cancel </button>
          </div>
        </div>
      ) : null }
    </>
  )
}

export default BlogPosts
