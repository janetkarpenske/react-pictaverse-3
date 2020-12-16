import * as c from './../actions/actionTypes';

export default (state = {}, action) => {
  const { id } = action;
  let tempState;
  switch (action.type) {
    // case c.ADD_POST:
    //   return Object.assign({}, state, {
    //     [id]: {
    //       name: name,
    //       location: location,
    //       summary: summary,
    //       image: image,
    //       likes: likes,
    //       dislikes: dislikes,
    //       id: id
    //     }
    //   })
    case c.DELETE_POST:
      tempState = { ...state };
      delete tempState[id];
      return tempState;


    case c.ADD_DISLIKE:
      console.log("Add dislike reducer reached");
      tempState = {...state};
      let newNumOfDislikesAfterDislike = tempState[id].dislikes + 1;
      console.log("New Num of Drinks: " + newNumOfDislikesAfterDislike);
      tempState[id].dislikes = newNumOfDislikesAfterDislike;
      console.log("Temp State: " + tempState);
      return tempState;

      case c.ADD_LIKE:
        console.log("Add like reducer reached");
        tempState = {...state};
        let newNumberOfLikes = tempState[id].likes + 1;
        tempState[id].likes = newNumberOfLikes;
        return tempState;

    default:
      return state;
  }
}