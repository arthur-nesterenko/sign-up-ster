import React from 'react';
import { Field, reduxForm }   from   'redux-form';
import shortid from "shortid";
import validate from './../../Helpers/validateSignUpForm';
import renderField from './../../Helpers/renderField';
// import renderRadio from './../../Helpers/renderRadio';
import Radio from './../../components/Radio/Radio';
import RadioGroup from './../../components/Radio/RadioGroup';


let items = [
    'facebook',
    'upwork',
    'twitter',
    'somithing else'
];


const SecondStep = ( props ) => {
    const { handleSubmit, previousPage } = props;
    return (
        <form className="step-form" onSubmit={handleSubmit}>
            <fieldset>
                <legend>SignUp</legend>
                <div className="date-group">
                    <Field type='number' min="01" max="31" name="date_day" component={renderField} label="DD"/>
                    <Field type='number' min="01" max="12" name="date_month" component={renderField} label="MM"/>
                    <Field type='number' min="1991" max="2017" name="date_year" component={renderField} label="YYYY"/>
                </div>

                <div>
                    <label>Gender</label>

                    <RadioGroup name="gender">
                        <Field component={Radio} value="male" label="Male"/>
                        <Field component={Radio} value="female" label="Female"/>
                        <Field component={Radio} value="unspecified" label="Unspecified"/>
                        {/*<Field component={Radio} value="male" label="Male"/>*/}
                        {/*<Field component={Radio} value="female" label="Female"/>*/}
                        {/*<Field component={Radio} value="unspecified"*/}
                        {/*label="Unspecified"/>*/}
                    </RadioGroup>
                </div>

                <div>
                    <label>Where did you know hear about us?</label>

                    <Field name="where_did_you_know" component={ variations =>
                        <div className="selectField">
                            <select {...variations}>
                                <option value="">Select...</option>
                                {items.map( item => <option value={item}
                                                            key={shortid.generate()}>{item}
                                </option> )}
                            </select>
                        </div>
                    }>

                        }
                        )}
                    </Field>
                </div>
                <div className="step-form-footer">
                    <button type="button" className="btn-previous" onClick={previousPage}>Back</button>
                    <button type="submit" className="btn-next">Next</button>
                </div>
            </fieldset>
        </form >
    );
};

export default reduxForm( {
    form                    : 'signup',
    destroyOnUnmount        : false,
    forceUnregisterOnUnmount: true,
    validate
} )( SecondStep );