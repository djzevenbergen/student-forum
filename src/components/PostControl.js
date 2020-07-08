import React from 'react';
import NewPostForm from './NewPostForm';
import PostList from './PostList';
import PostDetail from './PostDetail';
import EditPostForm from './EditPostForm';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { findAllByTestId } from '@testing-library/react';

class PostControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedPost: null,
      editing: false
    };
  }


  handleClick = () => {
    if (this.state.selectedPost != null) {
      this.setState({
        selectedPost: null,
        editing: false
      });

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
    // const selectedPost = this.props.masterPostList[id];
    const { dispatch } = this.props;
    const action = {
      type: 'UPVOTE_POST',
      id: id
    }
    console.log(id);
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
    const { action } = {
      type: 'DELETE_POST',
      id: id
    }
    dispatch(action);
    this.setState({ selectedPost: null });
  }

  handleEditClick = () => {
    this.setState({ editing: true });
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
    this.setState({
      editing: false,
      selectedPost: null
    });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleState = <EditPostForm post={this.props.selectedPost} onEditPost={this.handleEditingPostInList} />
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
      currentlyVisibleState = <PostList postList={this.props.masterPostList} onPostSelection={this.handleChangingSelectedPost} onUpVote={this.handleUpvote} onDownVote={this.handleDownVote} />
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
  formVisibleOnPage: PropTypes.bool
};

const mapStateToProps = state => {
  //order masterPostList by upvotes
  if (state.masterPostList[0] != null) {
    let arrayOfPosts = Object.values(state.masterPostList[0].upvotes);
    console.log(arrayOfPosts);
    console.log("hi");
  }


  return {
    masterPostList: state.masterPostList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

PostControl = connect(mapStateToProps)(PostControl);

export default PostControl;