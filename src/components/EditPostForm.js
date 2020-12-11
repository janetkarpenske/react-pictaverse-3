import React from 'react';
import ReusableForm from './ReusableForm';
import PropTypes from 'prop-types';

function EditPostForm (props) {
  const { post } = props;

  function handleEditSubmission(event) {
    event.preventDefault();
    props.onEditPost({name: event.target.name.value, brand: event.target.brand.value, price: event.target.price.value, alcoholContent: event.target.alcoholContent.value, amountLeft: post.amountLeft, id: post.id})
  }
  return (
    <React.Fragment>
      <ReusableForm formSubmissionHandler = {handleEditSubmission} buttonText="Update"/>
    </React.Fragment>
  );
}

EditPostForm.propTypes = {
  onEditPost: PropTypes.func
};

export default EditPostForm;