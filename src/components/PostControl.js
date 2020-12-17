import React from 'react';
import PostList from './PostList';
import NewPostForm from './NewPostForm';
import EditPostForm from './EditPostForm';
import PostDetails from './PostDetails';
import Homepage from "./Homepage";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import * as a from '../actions';
import { withFirestore } from 'react-redux-firebase'

class PostControl extends React.Component {
  constructor(props) {
    super(props);
}
handleClick = () => {
  const { dispatch } = this.props;
  if (this.props.homepageVisible) {
    const action1 = a.toggleHomepageVisible();
    dispatch(action1);
    const action2 = a.togglePostsVisible();
    dispatch(action2);
  }
  else if (this.props.selectedPost != null) {
    const action1 = a.setPostNull();
    dispatch(action1);
  } else {
  const action = a.toggleForm();
  dispatch(action);
  }
}

handleAddingNewPostToList = () => {
  const { dispatch } = this.props;
  const action2 = a.toggleForm();
  dispatch(action2);
}

handleSelectingPost = (id) => {
  this.props.firestore.get({collection: 'posts', doc: id}).then((post) => {
    const firestorePost = {
      name: post.get("name"),
      location: post.get("location"),
      summary: post.get("summary"),
      image: post.get("image"),
      likes: post.get("likes"),
      dislikes: post.get("dislikes"),
      id: post.id
    }
    //this.setState({selectedPost: firestorePost });
    const { dispatch } = this.props;
    const action = a.selectPost(firestorePost);
    dispatch(action);
  });

}
handleDeletingPost = (id) => {
  this.props.firestore.delete({collection: 'tickets', doc: id});
  console.log("Delete post reached");
  const { dispatch } = this.props;
    const action = a.setPostNull();
    dispatch(action);
}




handleDislikingPost = (id) => {
  const { dispatch } = this.props;
  const action = a.dislikePost(id);
  dispatch(action);
}
handleLikingPost = (id) => {
  const { dispatch } = this.props;
  const action = a.likePost(id);
  dispatch(action);
}




handleEditClick = () => {
  const { dispatch } = this.props;
  const action = a.toggleEdit();
  dispatch(action);
}

// handleEditingPostInList = (postToEdit) => {
//   const { dispatch } = this.props;
//     const action = a.addPost(postToEdit);
//     dispatch(action);
//     const action2 = a.toggleEdit();
//     dispatch(action2);
//     const action3 = a.setPostNull();
//     dispatch(action3);
// }

render() {
  let currentlyVisibleState = null;
  let buttonText = null;
  if (this.props.editing) {
    currentlyVisibleState = <EditPostForm post = {this.props.selectedPost} onEditPost = {this.handleEditingPostInList}/>
    buttonText = "Back to List";
  }
  else if (this.props.selectedPost != null) {
    console.log("CORRECT else statement reached");
    currentlyVisibleState = <PostDetails post = {this.props.selectedPost} onClickingDislike= {this.handleDislikingPost} onClickingLike= {this.handleLikingPost} onClickingDelete = {this.handleDeletingPost} onClickingEdit = {this.handleEditClick}/>
    buttonText = "Back to List";
  }
  else if (this.props.formVisibleOnPage) {
    currentlyVisibleState = <NewPostForm onNewPostCreation={this.handleAddingNewPostToList} />
    buttonText = "Back To List"
  }
  else if (this.props.postsVisible) {
    currentlyVisibleState =  <PostList onPostSelection={this.handleSelectingPost}/>;
    buttonText = "Create New Post";
  }
  else {
    // currentlyVisibleState =  <PostList postList={this.props.masterPostList} onPostSelection={this.handleSelectingPost}/>;
    // buttonText = "Create New Post";
    currentlyVisibleState = <Homepage />
    buttonText = "Enter site";
  }
  return (
    <React.Fragment>
      {currentlyVisibleState}
      <button className="btn btn-outline-dark btn-sm" onClick={this.handleClick}>{buttonText}</button>
    </React.Fragment>
    );
  } 
}
PostControl.propTypes = {
  masterPostList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool,
  editing: PropTypes.bool,
  selectedPost: PropTypes.object
};

const mapStateToProps = state => {
  return {
    //masterPostList: state.masterPostList,
    formVisibleOnPage: state.formVisibleOnPage,
    editing: state.editing,
    selectedPost: state.selectedPost,
    homepageVisible: state.homepageVisible,
    postsVisible: state.postsVisible
  }
}
PostControl = connect(mapStateToProps)(PostControl);

export default withFirestore(PostControl);
