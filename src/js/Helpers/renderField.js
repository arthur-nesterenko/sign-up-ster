import React from 'react';
/**
 * Helper method for redux-form;
 *
 * @param input
 * @param label
 * @param type
 * @param touched
 * @param error
 */
const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
        <label>{label}
              {touched && error && <span className="error"> {error}</span>}
        </label>
        <div className="input-field">
            <input {...input}  type={type}/>

        </div>
    </div>
);

export default renderField;