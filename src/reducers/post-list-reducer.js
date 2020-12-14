import * as c from './../actions/actionTypes';

export default (state = {}, action) => {
  const { name, brand, price, alcoholContent, amountLeft, id } = action;
  let tempState;
  switch (action.type) {
    case c.ADD_POST:
      return Object.assign({}, state, {
        [id]: {
          name: name,
          brand: brand,
          price: price,
          alcoholContent: alcoholContent,
          amountLeft: amountLeft,
          id: id
        }
      })
    case c.DELETE_POST:
      tempState = { ...state };
      delete tempState[id];
      return tempState;


    case c.ADD_DISLIKE:
      console.log("Add dislike reducer reached");
      tempState = {...state};
      let newNumOfDrinksAfterDislike = tempState[id].amountLeft - 1;
      console.log("New Num of Drinks: " + newNumOfDrinksAfterDislike);
      tempState[id].amountLeft = newNumOfDrinksAfterDislike;
      console.log("Temp State: " + tempState);
      return tempState;

      case c.ADD_LIKE:
        console.log("Add like reducer reached");
        tempState = {...state};
        let newNumberOfLikes = tempState[id].amountLeft + 1;
        tempState[id].amountLeft = newNumberOfLikes;
        return tempState;

    default:
      return state;
  }
}