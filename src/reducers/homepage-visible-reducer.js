import * as c from './../actions/actionTypes';

export default (state = true, action) => {
  switch (action.type) {
    case c.HOMEPAGE_VISIBLE:
      return !state;
    default:
      return state;
  }
};