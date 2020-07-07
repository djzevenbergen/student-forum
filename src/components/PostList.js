import React from 'react';
import Post from './Post';
import PropTypes from "prop-types";

export default function PostList(props) {
  const { postList } = props;
  return (
    // <>
    //   <h1>Here are the posts, click detail for voting </h1>
    //   <div className="post-container">
    //     {console.log(postList)}
    <React.Fragment>
      {Object.values(postList).map((post) => {

        return <Post
          whenPostClicked={props.onPostSelection}
          onUpVote={props.onUpVote}
          upVotes={props.upVotes}
          title={post.title}
          body={post.body}
          id={post.id}
          key={post.id}
          time={post.time} />
      })}
    </React.Fragment>
  );
}


//   ) : <h2>No One has posted Yet</h2>}
// </div >

// </>


PostList.propTypes = {
  postList: PropTypes.object,
  onPostSelection: PropTypes.func,
  onUpVote: PropTypes.func
};


