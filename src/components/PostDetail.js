import React from "react";
import PropTypes from "prop-types";

function PostDetail(props) {
  const { post, onClickingDelete } = props;
  return (
    <React.Fragment>
      <h1>{post.title}</h1>
      <h3>{post.body}</h3>
      <h3>{post.time}</h3>
      <h3>{post.upvotes}</h3>

    </React.Fragment>
  )
}

PostDetail.propTypes = {
  post: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func

};

export default PostDetail;