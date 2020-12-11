import * as c from './actionTypes';

export const deletePost = id => ({
  type: 'DELETE_POST',
  id
});
export const toggleForm = () => ({
  type: 'TOGGLE_FORM'
});
export const toggleEdit = () => ({
  type: 'TOGGLE_EDIT'
});
// export const addPost = (post) => {
//   const { name, brand, price, alcoholContent, amountLeft, id } = post;
//   return {
//     type: 'ADD_POST',
//     name: name,
//     brand: brand,
//     price: price,
//     alcoholContent: alcoholContent,
//     amountLeft: amountLeft,
//     id: id
//   }
// }
export const addDislike = id => ({
  type: 'ADD_DISLIKE',
  id
});
export const selectPost = (id,postList) => {
  return {
    type: c.SELECT_POST,
    id: id,
    postList: postList
  };
};
export const setPostNull = () => {
  return {
    type: c.SET_POST_NULL    
  };
};