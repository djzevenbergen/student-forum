import postListReducer from '../../reducers/post-list-reducer';
//import * as c from '../../actions/ActionTypes';
import * as c from '../../actions/ActionTypes';

let action;
const postData = {
  title: "Hiking",
  body: "Enjoy the place",
  upvotes: 1,
  time: '1594154773',
  id: 1

};

const updatePostData = {
  title: "Skiing",
  body: "Enjoy the mountain",
  upvotes: 1,
  time: '1594154773',
  id: 1
};

const currentState = {
  1: {
    title: "Skiing",
    body: "Enjoy the mountain",
    upvotes: 1,
    time: '1594154773',
    id: 1
  },
  2: {
    title: "Hiking",
    body: "Enjoy the place",
    upvotes: 1,
    time: '1594154773',
    id: 2
  }
}


describe('postListReducer', () => {
  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(postListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new post data to masterPosttList', () => {
    const { title, body, time, upvotes, id } = postData;
    action = {
      type: c.ADD_POST,
      title: title,
      body: body,
      time: time,
      upvotes: upvotes,
      id: id
    };
    expect(postListReducer({}, action)).toEqual({
      1: {
        title: title,
        body: body,
        time: time,
        upvotes: upvotes,
        id: id
      }
    });
  });

  test('Should successfully update post data if key already exits using same ADD_POST reducer.', () => {
    const { title, body, time, upvotes, id } = updatePostData;
    action = {
      type: c.ADD_POST,
      title: title,
      body: body,
      time: time,
      upvotes: upvotes,
      id: id
    };
    expect(postListReducer({}, action)).toEqual({
      [id]: {
        title: title,
        body: body,
        time: time,
        upvotes: upvotes,
        id: id
      }
    });
  });

  test('Should successfully delete a post', () => {
    action = {
      type: c.DELETE_POST,
      id: 1
    };

    expect(postListReducer(currentState, action)).toEqual({

      2: {
        title: "Hiking",
        body: "Enjoy the place",
        upvotes: 1,
        time: '1594154773',
        id: 2
      }
    });
  });

});