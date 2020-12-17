import * as c from './../actions/actionTypes';

export default (state = null, action) => {
  switch (action.type) {
  case c.SELECT_POST:
    console.log("Select post reducer reached.");
      const tempSelectedPost = action.firestorePost //postList[action.id]
      return tempSelectedPost;

  case 'SET_POST_NULL':    
    state = null;
    return state;
  default:
    return state;
  }
};