import * as c from '../../src/actions/ActionTypes';
//import * as c from '../../actions/ActionTypes';

export default (state = {}, action) => {
  const { title, body, time, upvotes, id } = action;
  switch (action.type) {
    case c.ADD_POST:
      return Object.assign({}, state, {
        [id]: {
          title: title,
          body: body,
          time: time,
          upvotes: upvotes,
          id: id
        }
      });
    case c.DELETE_POST:
      const newState = { ...state };
      console.log(" ------ ");
      console.log(newState);
      console.log(id + "is getting deleted");
      delete newState[id];
      return newState;
    case c.UPVOTE_POST:
      const upvotedState = { ...state };
      upvotedState[id].upvotes = upvotedState[id].upvotes + 1;
      return upvotedState;
    case c.DOWNVOTE_POST:
      const downvotedState = { ...state };
      downvotedState[id].upvotes = downvotedState[id].upvotes - 1;
      return downvotedState;
    default:
      return state;
  }
}