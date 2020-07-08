export default (state = {}, action) => {

  const { title, body, time, upvotes, id } = action;
  switch (action.type) {
    case 'ADD_POST':
      return Object.assign({}, state, {
        [id]: {
          title: title,
          body: body,
          time: time,
          upvotes: upvotes,
          id: id
        }
      });
    case 'DELETE_POST':
      const newState = { ...state };
      delete newState[id];
      return newState;
    case 'UPVOTE_POST':
      const upvotedState = { ...state };
      upvotedState[id].upvotes = upvotedState[id].upvotes + 1;
      return upvotedState;
    case 'DOWNVOTE_POST':
      const downvotedState = { ...state };
      downvotedState[id].upvotes = downvotedState[id].upvotes - 1;
      return downvotedState;
    default:
      return state;
  }
}