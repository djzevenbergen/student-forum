import React from 'react';
import ReusableForm from "./ReusableForm";
import PropTypes from 'prop-types';

function EditPostForm(props) {
  const { post } = props;

  function handleEditPostFormSubmission(event) {
    event.preventDefault();

    console.log(post);

    let passedTitle;
    let passedBody;

    if (event.target.title.value !== "") {
      passedTitle = event.target.title.value;
    } else {
      passedTitle = post.title;
    }

    if (event.target.body.value !== "") {
      passedBody = event.target.body.value;
    } else {
      passedBody = post.body;
    }

    props.onEditPost({ title: passedTitle, body: passedBody, time: post.time, id: post.id, upvotes: post.upvotes });



    // props.onEditPost({
    //   title: event.target.title.value,
    //   id: post.id,
    //   time: Date.now(),
    //   body: event.target.body.value,
    //   upvotes: parseInt(event.target.upvotes.value)
    // })
  }
  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditPostFormSubmission}
        buttonText="Update Post" />
    </React.Fragment>
  );
}

EditPostForm.propTypes = {
  onEditPost: PropTypes.func,
  post: PropTypes.object
};

export default EditPostForm;
