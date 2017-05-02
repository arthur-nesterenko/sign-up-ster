import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
const { DOM: { input } } = React;


const FirstStep = ( props ) => {

    const { handleSubmit } = props;

    return (
        <form onSubmit={handleSubmit}>

        </form>
    );
}