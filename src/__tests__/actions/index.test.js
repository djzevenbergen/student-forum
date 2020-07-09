import * as actions from './../../actions';
import * as c from '../../actions/ActionTypes';

describe('post actions', () => {
  it('deletePost should create DELETE_POST action', () => {
    expect(actions.deletePost(1)).toEqual({
      type: c.DELETE_POST,
      id: 1
    });
  });

  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: c.TOGGLE_FORM
    });
  });

  it('toggleEditForm should create TOGGLE_EDIT_FORM action', () => {
    expect(actions.toggleEditForm()).toEqual({
      type: c.TOGGLE_EDIT_FORM
    });
  });

  it('upvotePost should create UPVOTE_POST action', () => {
    expect(actions.upvotePost()).toEqual({
      type: c.UPVOTE_POST
    });
  });

  it('downvotePost should create DOWNVOTE_POST action', () => {
    expect(actions.downvotePost()).toEqual({
      type: c.DOWNVOTE_POST
    });
  });

  it('addPost should create ADD_POST action', () => {
    expect(actions.addPost({ title: 'Jo and Jasmine', body: '3E', time: '2398235638', upvotes: 0, id: 1 })).toEqual({
      type: c.ADD_POST,
      title: 'Jo and Jasmine',
      body: '3E',
      time: '2398235638',
      upvotes: 0,
      id: 1
    });
  });

});