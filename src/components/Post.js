import React from 'react';
import PropTypes from 'prop-types';

function Post(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenPostClicked(props.id)}>
        <h1>Post Details</h1>
        <h3>{props.title} - {props.upvotes}</h3>
        <button className="upVote" onClick={() => props.onUpVote(props.id)}>Liked</button>
        <hr />
      </div>
    </React.Fragment>

  );
};

Post.prototype = {
  title: PropTypes.string,
  upvotes: PropTypes.number,
  whenPostClicked: PropTypes.func,
  onUpVote: PropTypes.func
}
export default Post;