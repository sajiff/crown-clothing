import React from 'react';

import './form-input.styles.scss';

export const FormInput = ({ handleChange, label, ...otherpProps }) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...otherpProps} />
    {label && (
      <label
        className={`${
          otherpProps.value.length ? 'shrink' : ''
        } form-input-label`}
      >
        {label}
      </label>
    )}
  </div>
);
