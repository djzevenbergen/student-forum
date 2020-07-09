import React from 'react';
import PropTypes from 'prop-types';

function Post(props) {
  return (
    <React.Fragment>
      <div className="post">
        <div onClick={() => props.whenPostClicked(props.id)}>
          <h3>{props.title} - {props.upvotes} </h3>
        </div>
        <button className="upVote" onClick={() => props.onUpVote(props.id)}>Upvote</button>
        <button className="upVote" onClick={() => props.onDownVote(props.id)}>DownVote</button>
      </div>
    </React.Fragment>
  );
};

Post.prototype = {
  title: PropTypes.string,
  upvotes: PropTypes.number,
  whenPostClicked: PropTypes.func,
  onUpVote: PropTypes.func,
  onDownVote: PropTypes.func,
  deletePost: PropTypes.func
}
export default Post;