import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {
return (
  <React.Fragment>
    <form onSubmit={props.formSubmissionHandler}>
      <input className="form-control" type='text' name='name' placeholder='Post Title' required/><br/>
      <input className="form-control" type='text' name='location' placeholder='Location' required/><br/>
      <div className="row">
        <div className="col-md-6">
          <input className="form-control" type='text' name='summary' placeholder='Description' required/><br/>
        </div>
        <div className="col-md-6">
        <input className="form-control" type='text' name='image' placeholder='Image' required/><br/>
        </div>
      </div>
      <button className="btn btn-dark btn-sm" type='submit'>{props.buttonText}</button><br/><br/>
    </form>
  </React.Fragment>
);
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;