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
const renderRadio = ( { input, label, type, meta: { touched, error } } ) => (

    <label>
        <input {...input} type={type}/>
    </label>

);

export default renderRadio;