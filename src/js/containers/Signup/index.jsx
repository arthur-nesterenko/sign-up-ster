import React from 'react';
import { connect } from "react-redux";
import FirstStep from './../../components/Step/First';
import SecondStep from './../../components/Step/Second';
import Progress from  './../../components/Progress';

export  default  class SignUp extends React.PureComponent {

    constructor( props ) {
        super( props );
        this.nextPage     = this.nextPage.bind( this );
        this.previousPage = this.previousPage.bind( this );
        this.state        = {
            page: 1
        };
    }

    nextPage() {
        console.log( 'next' );
        this.setState( { page: this.state.page + 1 } );
    }

    previousPage() {
        console.log( 'prev' );
        this.setState( { page: this.state.page - 1 } );
    }


    render() {
        console.log( this );
        // const { onSubmit } = this.props;
        const { page } = this.state;

        return (
            <div className="form-container">
                <div className="progress-container">
                    <Progress/>
                </div>
                <div>
                    {page === 2 && <FirstStep onSubmit={this.nextPage}/>}
                    {page === 1 && <SecondStep previousPage={this.previousPage}
                                               onSubmit={this.nextPage}/>}
                    {/*{page === 3 && <WizardFormThirdPage previousPage={this.previousPage} onSubmit={onSubmit}/>}*/}
                </div>
            </div>
        );
    }
}

/**
 *
 * @param state
 */
// const mapStateToProps = ( { form } ) => ({
//     form
// });
/**
 *
 * @param dispatch
 * @returns {{mapActions: (A|B|M|N)}}
 */
// /}
/**
 *
 */
// export default connect( mapStateToProps, mapDispatchToProps )( SignUp );
