import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './../../Helpers/validateSignUpForm';
import renderField from './../../Helpers/renderField';
import './styles.scss';

const FirstStep = ( props ) => {

    const { handleSubmit } = props;

    return (
        <form className="step-form" onSubmit={handleSubmit}>
            <fieldset>
                <legend>SignUp</legend>
                <Field type='email' name="email" component={renderField} label="Email"/>
                <Field type='password' name="pwd" component={renderField} label="Password"/>
                <Field type='password' name="confirm_pwd" component={renderField} label="Confirm password"/>
                <div className="step-form-footer">
                    <button type="submit" className="btn-next">Next</button>
                </div>
            </fieldset>
        </form>
    );
};

export default reduxForm( {
    form                    : 'signup',
    destroyOnUnmount        : false,
    forceUnregisterOnUnmount: true,
    validate
} )( FirstStep );