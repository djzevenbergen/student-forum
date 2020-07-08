import formVisibleReducer from './form-visible-reducer';
import postListReducer from './post-list-reducer';
import editingReducer from './form-visible-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers(
  {
    formVisibleOnPage: formVisibleReducer,
    masterPostList: postListReducer,
    editing: editingReducer
  });

export default rootReducer;