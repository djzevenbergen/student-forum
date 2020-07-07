import React from 'react';
import ReusableForm from "./ReusableForm";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewPostForm(props) {
  function handleNewPostFormSubmission(event) {
    event.preventDefault();
    props.onNewPostCreation({ title: event.target.title.value, id: v4(), time: Date.now().getTime(), body: event.target.body.value })
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewPostFormSubmission}
        buttonText='Submit'
      />
    </React.Fragment>

  );
};

NewPostForm.prototype = {
  onNewPostCreation: PropTypes.func
}

export default NewPostForm;