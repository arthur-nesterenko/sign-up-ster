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
        <div>
            <input {...input}  type={type}/>
            {touched && error && <span>{error}</span>}
        </div>
    </div>
);

export default renderField;