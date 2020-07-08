export default (state = false, action) => {
  switch (action.type) {
    case 'ADD_POST':
      return !state;
    default:
      return state;
  }
};