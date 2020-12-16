import formVisibleReducer from './form-visible-reducer';
import postListReducer from './post-list-reducer';
import editingReducer from './editing-reducer';
import postSelectReducer from './post-select-reducer';
import HomepageVisibleReducer from './homepage-visible-reducer';
import PostsVisibleReducer from './posts-visible-reducer';
import { combineReducers } from 'redux';
// import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterPostList: postListReducer,
  editing: editingReducer,
  selectedPost: postSelectReducer,
  homepageVisible: HomepageVisibleReducer,
  postsVisible: PostsVisibleReducer
  // firestore: firestoreReducer
});

export default rootReducer;