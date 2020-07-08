/*
title, body ,timestamp,upVotes 
*/

import React from 'react';

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='title'
          placeholder='Title' /><br />
        <input
          type="hidden"
          name="upvotes"
          value="0" />
        <input
          type="hidden"
          name="downvotes"
          value="0" />
        <textarea
          name='body'
          placeholder='Enter the body of your post here' /><br />

        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

export default ReusableForm;