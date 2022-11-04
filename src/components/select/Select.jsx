import React from 'react';
import PropTypes from 'prop-types';
import './Select.css';

const Select = ({
  defaultValue,
  errorMessage,
  handleChange,
  id,
  isRequired,
  label,
  options,
  placeholder,
  value,
}) => {
  return (
    <div>
      {label ? (
        <label className='select-label'>
          {label} {isRequired && '*'}
        </label>
      ) : (
        <div className='select-label-placeholder' />
      )}
      <select
        data-testid='form-select'
        className='select'
        id={id}
        name={id}
        onChange={handleChange}
        value={value || defaultValue}
      >
        <option value={defaultValue} disabled>
          {placeholder}
        </option>
        {options?.map((option) => (
          <option value={option.value} key={option.label}>
            {option.label}
          </option>
        ))}
      </select>
      {errorMessage ? <span className='error'>{errorMessage}</span> : null}
    </div>
  );
};

Select.propTypes = {
  defaultValue: PropTypes.string,
  errorMessage: PropTypes.string,
  handleChange: PropTypes.func,
  id: PropTypes.string,
  isRequired: PropTypes.bool,
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    })
  ),
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

export default Select;
