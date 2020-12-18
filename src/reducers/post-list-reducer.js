import * as c from './../actions/actionTypes';

export default (state = {}, action) => {
  const { id } = action;
  let tempState;
  switch (action.type) {

    case c.DELETE_POST:
      tempState = { ...state };
      delete tempState[id];
      return tempState;


    case c.ADD_DISLIKE:
      tempState = {...state};
      let newNumOfDislikesAfterDislike = tempState[id].dislikes + 1;
      tempState[id].dislikes = newNumOfDislikesAfterDislike;
      return tempState;

      case c.ADD_LIKE:
        console.log("Add like reducer reached");
        // tempState = {...state};
        // let newNumberOfLikes = tempState[id].likes + 1;
        // tempState[id].likes = newNumberOfLikes;
        // return tempState;

    default:
      return state;
  }
}