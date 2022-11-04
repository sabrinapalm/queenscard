import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

const Input = ({
  errorMessage,
  handleChange,
  id,
  isRequired,
  label,
  maxLength,
  type,
  value,
  ...inputProps
}) => {
  return (
    <div>
      {label ? (
        <label className='input-label' htmlFor={id}>
          {label} {isRequired && '*'}
        </label>
      ) : null}
      <input
        className='input'
        data-testid='form-input'
        id={id}
        maxLength={maxLength}
        name={id}
        onChange={handleChange}
        type={type}
        value={value}
        {...inputProps}
      />
      {errorMessage ? <span className='error'>{errorMessage}</span> : null}
    </div>
  );
};

Input.propTypes = {
  errorMessage: PropTypes.string,
  handleChange: PropTypes.func,
  id: PropTypes.string,
  isRequired: PropTypes.bool,
  label: PropTypes.string,
  maxLength: PropTypes.number,
  value: PropTypes.string,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyPress: PropTypes.func,
  type: PropTypes.string,
};

export default Input;
