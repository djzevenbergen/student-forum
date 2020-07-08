import React from "react";
import PropTypes from "prop-types";
import DateTime from "./DateTime";

function PostDetail(props) {
  const { post, onClickingDelete } = props;
  return (
    <React.Fragment>
      <h1>{post.title}</h1>
      <h3>{post.body}</h3>
      <DateTime time={post.time} />
      <h3>{post.upvotes}</h3>
      <h3>{post.downvotes}</h3>
      <button onClick={props.onClickingEdit}>Update Post</button>
      <button className="upVote" onClick={() => props.onClickingDelete(post.id)}>Delete</button>

    </React.Fragment>
  )
}

PostDetail.propTypes = {
  post: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func

};

export default PostDetail;