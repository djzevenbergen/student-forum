import React from 'react'

export default function PostList(props) {
  const { PostList, detail } = props
  return (
    <>
      <h1>Here are the posts, click detail for voting </h1>
      <div className="post-container">
        {PostList.length > 0 ? PostList.map(post => (
          <div className="post-box" key={post.id}>
            {//<img src={post.img} alt={post.desc} />}
              <div>
                <h3>{post.title}</h3>
                <p className="brand"><strong>Post:</strong><br /> {post.body}</p>

              </div>
              <div className="buttons">
                {post.quantity > 0 ? <button className="buy" onClick={() => buy(post.id)}>buy</button> : <button className="buy" onClick={() => buy(post.id)} disabled>buy</button>}
                {post.quantity > 0 ? <button className="buy" onClick={() => detail(post.id)}>Product Details</button> : <button className="buy" onClick={() => detail(post.id)} disabled>detail</button>}
              </div>
          </div>
        )
        ) : <h2>No drinks Yet!</h2>}

      </div>
    </>
  )
}