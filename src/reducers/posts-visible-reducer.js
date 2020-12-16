import * as c from './../actions/actionTypes';

export default (state = false, action) => {
  switch (action.type) {
    case c.POSTS_VISIBLE:
      return !state;
    default:
      return state;
  }
};