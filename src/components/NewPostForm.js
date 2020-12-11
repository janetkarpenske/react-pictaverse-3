import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';

function NewPostForm (props) {

  function handlePostFormSubmission(event) {
    event.preventDefault();
    props.onNewPostCreation({name: event.target.name.value, brand: event.target.brand.value, price: event.target.price.value, alcoholContent: event.target.alcoholContent.value, amountLeft: 124, id: v4()});
  }

  return (
    <React.Fragment>
      <ReusableForm formSubmissionHandler={handlePostFormSubmission}
      buttonText="Post" />
    </React.Fragment>
  );
}
NewPostForm.propTypes = {
  onNewPostCreation: PropTypes.func,
  buttonText: PropTypes.string
};

export default NewPostForm;