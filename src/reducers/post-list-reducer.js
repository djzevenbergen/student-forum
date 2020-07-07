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
    default:
      return state;
  }
}