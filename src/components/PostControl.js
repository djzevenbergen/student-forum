import React from 'react';
import NewPostForm from './NewPostForm';
import PostList from './PostList';
import PostDetail from './PostDetail';
import EditPostForm from './EditPostForm';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { findAllByTestId } from '@testing-library/react';
import * as c from './../actions/ActionTypes';

class PostControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedPost: null,
      //editing: false
    };
  }

  handleClick = () => {

    if (this.state.selectedPost != null) {
      this.setState({
        selectedPost: null
      });


      const { dispatch } = this.props;
      const action = {
        type: 'TOGGLE_EDIT_FORM'
      }
      dispatch(action);
      console.log("handle click" + action);

    } else {

      const { dispatch } = this.props;
      const action = {
        type: 'TOGGLE_FORM'
      }
      dispatch(action);
    }
  }

  handleAddingNewPostToList = (newPost) => {
    const { dispatch } = this.props;
    const { id, title, body, time, upvotes } = newPost;
    const action = {
      type: "ADD_POST",
      id: id,
      title: title,
      body: body,
      time: time,
      upvotes: upvotes
    }
    dispatch(action);
    const action2 = {
      type: 'TOGGLE_FORM'
    }
    dispatch(action2);
  }

  handleChangingSelectedPost = (id) => {
    const selectedPost = this.props.masterPostList[id];
    this.setState({ selectedPost: selectedPost });
  }

  handleUpvote = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'UPVOTE_POST',
      id: id
    }
    dispatch(action);
  }

  handleDownVote = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DOWNVOTE_POST',
      id: id
    }
    dispatch(action);
  }

  handleDeletingPost = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_POST',
      id: id
    }
    dispatch(action);
    this.setState({ selectedPost: null });
  }

  handleEditClick = () => {

    const { dispatch } = this.props;
    const action = {
      type: 'TOGGLE_EDIT_FORM'
    }
    console.log(action);
    console.log(this.props.editing);
    dispatch(action);
  }

  handleEditingPostInList = (postToEdit) => {
    const { dispatch } = this.props;
    const { id, title, body, time, upvotes } = postToEdit;
    const action = {
      type: 'ADD_POST',
      id: id,
      title: title,
      body: body,
      time: time,
      upvotes: upvotes
    }
    dispatch(action);

    const action2 = {
      type: 'TOGGLE_EDIT_FORM'
    }
    dispatch(action2);

    this.setState({
      selectedPost: null
    });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.props.editing) {
      console.log(this.state.selectedPost);
      currentlyVisibleState = <EditPostForm post={this.state.selectedPost} onEditPost={this.handleEditingPostInList} />
      buttonText = "Return to Post List";
    } else if (this.state.selectedPost != null) {
      currentlyVisibleState =
        <PostDetail
          post={this.state.selectedPost}
          onClickingDelete={this.handleDeletingPost}
          onClickingEdit={this.handleEditClick} />
      buttonText = "Return to Post List";
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewPostForm onNewPostCreation={this.handleAddingNewPostToList} />
      buttonText = "Return to Post List";
    } else {
      currentlyVisibleState = <PostList postList={this.props.masterPostList} onPostSelection={this.handleChangingSelectedPost} onUpVote={this.handleUpvote} onDownVote={this.handleDownVote} deletePost={this.handleDeletingPost} />
      buttonText = "Add Post";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    )
  }
}

PostControl.propTypes = {
  masterPostList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool,
  editing: PropTypes.bool
};

const mapStateToProps = state => {
  let arrayOfPosts = [];
  let sortedObject = {};

  if (Object.keys(state.masterPostList).length !== 0) {
    arrayOfPosts = Object.values(state.masterPostList);
    arrayOfPosts.sort(function (a, b) { return b.upvotes - a.upvotes });
  }

  arrayOfPosts.forEach(post => {
    sortedObject[post.id] = post;
  });

  return {
    masterPostList: sortedObject,//state.masterPostList,
    formVisibleOnPage: state.formVisibleOnPage,
    editing: state.editing
  }
}

PostControl = connect(mapStateToProps)(PostControl);

export default PostControl;