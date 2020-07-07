import React from 'react'
import Post from './Post';
import PropTypes from "prop-types";

export default function PostList(props) {
  const { PostList } = props
  return (
    <>
      <h1>Here are the posts, click detail for voting </h1>
      <div className="post-container">
        {PostList.length > 0 ? PostList.map((post) => {
          return <Post
            whenPostClicked={post.onPostSelection}
            onUpVote={post.onUpVote}
            upVotes={post.upVotes}
            title={post.title}
            body={post.body}
            id={post.id}
            key={post.id}
            time={post.time} />
        }
        ) : <h2>No One has posted Yet</h2>}
      </div>

    </>
  );
};


PostList.propTypes = {
  postList: PropTypes.object,
  onPostSelection: PropTypes.func,
  onUpVote: PropTypes.func
}
