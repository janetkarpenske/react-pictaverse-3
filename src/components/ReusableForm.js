import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {
return (
  <React.Fragment>
    <form onSubmit={props.formSubmissionHandler}>
      <input className="form-control" type='text' name='name' placeholder='Brew Name' required/><br/>
      <input className="form-control" type='text' name='brand' placeholder='Brand Name' required/><br/>
      <div className="row">
        <div className="col-md-6">
          <input className="form-control" type='number' name='price' placeholder='Price' required/><br/>
        </div>
        <div className="col-md-6">
        <input className="form-control" type='number' name='alcoholContent' placeholder='Alcohol Percentage' required/><br/>
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