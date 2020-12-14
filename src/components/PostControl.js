import React from 'react';
import PostList from './PostList';
import NewPostForm from './NewPostForm';
import EditPostForm from './EditPostForm';
import PostDetails from './PostDetails';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import * as a from '../actions';

class PostControl extends React.Component {
  constructor(props) {
    super(props);
}
handleClick = () => {
  const { dispatch } = this.props;
  if (this.props.selectedPost != null) {
    const action1 = a.setPostNull();
    dispatch(action1);
  } else {
  const action = a.toggleForm();
  dispatch(action);
  }
}
handleAddingNewPostToList = (newPost) => {
  const { dispatch } = this.props;
  const action = a.addPost(newPost);
  dispatch(action);
  const action2 = a.toggleForm();
  dispatch(action2);
}
handleSelectingPost = (id) => {
  const { dispatch } = this.props;
  const action = a.selectPost(id, this.props.masterPostList)
  dispatch(action);
}
handleDeletingPost = (id) => {
  console.log("Delete post reached");
  const { dispatch } = this.props;
    const action1 = a.deletePost(id);
    dispatch(action1);
    const action2 = a.setPostNull();
    dispatch(action2);
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

handleEditingPostInList = (postToEdit) => {
  const { dispatch } = this.props;
    const action = a.addPost(postToEdit);
    dispatch(action);
    const action2 = a.toggleEdit();
    dispatch(action2);
    const action3 = a.setPostNull();
    dispatch(action3);
}

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
  else {
    currentlyVisibleState =  <PostList postList={this.props.masterPostList} onPostSelection={this.handleSelectingPost}/>;
    buttonText = "Create New Post";
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
    masterPostList: state.masterPostList,
    formVisibleOnPage: state.formVisibleOnPage,
    editing: state.editing,
    selectedPost: state.selectedPost
  }
}
PostControl = connect(mapStateToProps)(PostControl);

export default PostControl;
