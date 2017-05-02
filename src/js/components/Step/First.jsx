import React from 'react';
import { Field, reduxForm } from 'redux-form';
// import validate from './validate';
const { DOM: { input } } = React;
import renderField from './../../Helpers/renderField';

const FirstStep = ( props ) => {

    const { handleSubmit } = props;

    return (
        <form onSubmit={handleSubmit}>

            <Field type='email' name="email" component={renderField} label="Email"/>
            <Field type='password' name="pwd" component={renderField} label="Password"/>
            <Field type='password' name="confirm_pwd" component={renderField} label="Confirm password"/>

            <div>
                <button type="submit" className="btn btn-next">Next</button>
            </div>
        </form>
    );
};

export default reduxForm( {
    form            : 'signup',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    // validate
} )( FirstStep );