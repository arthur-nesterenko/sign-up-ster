import React from 'react';

export default  class RadioGroup extends React.Component {
    constructor( props ) {
        super( props );
        this.options = [];
    }

    getChildContext() {
        const { name } = this.props;
        return {
            radioGroup: {
                name,
                onChange: this.onChange.bind( this )
            }
        };
    }

    onChange( selected, child ) {
        this.options.forEach( option => {
            if ( option !== child ) {
                option.setSelected( !selected );
            }
        } );
    }

    render() {
        let children = React.Children.map( this.props.children, child => {
            return React.cloneElement( child, {
                ref: (component => {this.options.push( component );})
            } );
        } );
        return <div className="radio-group">{children}</div>;
    }
}

RadioGroup.childContextTypes = {
    radioGroup: React.PropTypes.object
};