// import React from 'react'
// import { Field, reduxForm } from 'redux-form'
// import validate from './validate'
// const { DOM: { input, select, textarea } } = React
// const colors                               = [ 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet' ]

const ThirdStep = ( props ) => {
    const { handleSubmit, pristine, previousPage, submitting } = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Favorite Color</label>
                <Field name="favoriteColor" component={favoriteColor =>
                    <div>
                        <select {...favoriteColor}>
                            <option value="">Select a color...</option>
                            {colors.map( colorOption =>
                                <option value={colorOption} key={colorOption}>{colorOption}</option> )
                            }
                        </select>
                        {favoriteColor.touched && favoriteColor.error && <span>{favoriteColor.error}</span>}
                    </div>
                }/>
            </div>
            <div>
                <label htmlFor="employed">Employed</label>
                <div>
                    <Field name="employed" id="employed" component={input} type="checkbox"/>
                </div>
            </div>
            <div>
                <label>Notes</label>
                <div>
                    <Field name="notes" component={textarea}/>
                </div>
            </div>
        </form>
    );
}
export default reduxForm( {
    form            : 'signup', //Form name is same
    destroyOnUnmount: false,
    // validate
} )( ThirdStep );
