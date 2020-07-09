export const deletePost = id => ({
  type: 'DELETE_POST',
  id
});

export const toggleForm = () => ({
  type: 'TOGGLE_FORM'
});

export const toggleEditForm = () => ({
  type: 'TOGGLE_EDIT_FORM'
});

export const upvotePost = () => ({
  type: 'UPVOTE_POST'
});

export const downvotePost = () => ({
  type: 'DOWNVOTE_POST'
});

export const addPost = (post) => {
  const { title, body, time, upvotes, id } = post;
  return {
    type: 'ADD_POST',
    title: title,
    body: body,
    time: time,
    upvotes: upvotes,
    id: id
  }
}