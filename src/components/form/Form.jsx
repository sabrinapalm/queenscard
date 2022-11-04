import React from 'react';
import PropTypes from 'prop-types';
import './Form.css';

const Form = ({ children, isLoading, isSuccess, onSubmit }) => {
  return (
    <form className='form' onSubmit={onSubmit}>
      {children}
      <button
        data-testid='form-submit-button'
        className='form-submit-button'
        type='submit'
      >
        {isLoading ? (
          <div className='loading-spinner' />
        ) : isSuccess ? (
          'Success!'
        ) : (
          'Submit'
        )}
      </button>
    </form>
  );
};

Form.propTypes = {
  children: PropTypes.node,
  isLoading: PropTypes.bool,
  isSuccess: PropTypes.bool,
  onSubmit: PropTypes.func,
};

export default Form;
