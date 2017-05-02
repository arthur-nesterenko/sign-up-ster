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
        <label>{label}</label>
        <div className="input-field">
            <input {...input}  type={type}/>
            {touched && error && <span className="error">{error}</span>}
        </div>
    </div>
);

export default renderField;