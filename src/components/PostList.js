import React from 'react';
import Post from './Post';
import PropTypes from "prop-types";

export default function PostList(props) {
  const { postList } = props;
  return (

    <React.Fragment>
      {Object.values(postList).map((post) => {

        return <Post
          whenPostClicked={props.onPostSelection}
          onUpVote={props.onUpVote}
          upvotes={post.upvotes}
          onDownVote={props.onDownVote}
          title={post.title}
          body={post.body}
          id={post.id}
          key={post.id}
          time={post.time} />
      })}
    </React.Fragment>
  );
}

PostList.propTypes = {
  postList: PropTypes.object,
  onPostSelection: PropTypes.func,
  onUpVote: PropTypes.func,
  onDownVote: PropTypes.func
};


