const validate = values => {
    const errors = {};
    if ( !values.email ) {
        errors.email = 'Required.';
    } else if ( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test( values.email ) ) {
        errors.email = 'Invalid email address.';
    }
    if ( !values.pwd ) {
        errors.pwd = 'Required.';
    }
    else if ( values.pwd.length < 6 ) {
        error.pwd = 'Password should be minimum 6 characters long.';
    }
    if ( values.confirm_pwd !== values.pwd ) {
        errors.confirm_pwd = 'Passwords do not match.';
    }
    if ( !values.date_day ) {
        errors.date_day = 'Required.';
    }
    else if ( !isNaN( values.date_day ) && (31 >= values.date_day) && (values.date_day >= 1) ) {
        errors.date_day = 'Invalid Format';
    }
    if ( !values.date_month ) {
        errors.date_month = 'Required.';
    }
    else if ( !isNaN( values.date_month ) && (12 >= values.date_month) && ( values.date_month >= 1) ) {
        values.date_month = 'Invalid format';
    }
    if ( !values.date_year ) {
        errors.date_year = 'Required.';
    }
    else if ( !isNaN( values.date_year ) ) {
        errors.date_year = 'Must be a number';
    }

    return errors;
}

export default validate;
