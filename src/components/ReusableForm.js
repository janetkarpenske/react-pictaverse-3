import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {
return (
  <React.Fragment>
    <h1 className="formHeader center-align">share your tavels</h1>
    <h2 className="center-align"><strong>add new post</strong></h2>
    <div className="container">
    <div className="formBorder">
    <form onSubmit={props.formSubmissionHandler}>
      <input className="form-control" type='text' name='name' placeholder='Post Title' required/><br/>
      <input className="form-control" type='text' name='location' placeholder='Location' required/><br/>
      <div className="row">
        <div className="col-md-6">
          <textarea className="form-control" type='text' name='summary' placeholder='Description' required/><br/>
        </div>
        <div className="col-md-6">
        <input className="form-control" type='text' name='image' placeholder='Image' required/><br/>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <input className="form-control" type='text' name='lat' placeholder='Latitude' required/><br/>
        </div>
        <div className="col-md-6">
        <input className="form-control" type='text' name='lng' placeholder='Longitude' required/><br/>
        </div>
      </div>
      <button className="btn btn-light btn-md" type='submit'>{props.buttonText}</button><br/><br/>
    </form>
    </div>
    </div>
  </React.Fragment>
);
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;