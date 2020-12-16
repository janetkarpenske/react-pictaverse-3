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
export const addPost = (post) => {
  const { name, location, summary, image, likes, dislikes, id } = post;
  return {
    type: 'ADD_POST',
    name: name,
    location: location,
    summary: summary,
    image: image,
    likes: likes,
    dislikes: dislikes,
    id: id
  }
}
export const dislikePost = id => ({
  type: 'ADD_DISLIKE',
  id
});
export const likePost = id => ({
  type: 'ADD_LIKE',
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


