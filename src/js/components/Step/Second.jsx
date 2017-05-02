import React from 'react';
import { Field, reduxForm }   from   'redux-form';
import shortid from "shortid";
// import validate from './validate';
import renderField from './../../Helpers/renderField';

let items = [
    'facebook',
    'upwork',
    'twitter',
    'somithing else'
];

const SecondStep = ( props ) => {
    const { handleSubmit, previousPage } = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <div>
                    <Field type='date' name="date_day" component={renderField} label="DD"/>
                    <Field type='date' name="date_month" component={renderField} label="MM"/>
                    <Field type='date' name="date_year" component={renderField} label="YYYY"/>
                </div>

                <div>
                    <label>Gender</label>
                    <div>
                        <label><Field name="gender" component='input' type="radio" value="male"/> Male</label>
                        <label><Field name="gender" component='input' type="radio" value="female"/>
                            Female</label>
                        <label><Field name="gender" component='input' type="radio" value="unspecified"/>
                            Unspecified
                        </label>
                    </div>
                </div>

                <div>
                    <label>Where did you know hear about us?</label>
                    <Field name="where_did_you_know" component={ variations =>
                        <div>
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
                <div>
                    <button type="button" className="previous" onClick={previousPage}>Back</button>
                    <button type="submit" className="next">Next</button>
                </div>
            </div>
        </form>
    );
};

export default reduxForm( {
    form                    : 'signup',
    destroyOnUnmount        : false,
    forceUnregisterOnUnmount: true,
    // validate
} )( SecondStep );