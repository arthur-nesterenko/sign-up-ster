import React from 'react';

export default class Radio extends React.Component {
    constructor( props ) {
        super( props );
        this.state = { selected: '' };
    }

    toggle() {
        const { onChange } = this.context.radioGroup;
        const selected     = !this.state.selected;
        this.setState( { selected } );
        onChange( selected, this );
    }

    setSelected( selected ) {
        this.setState( { selected } );
    }

    render() {

        let classname   = this.state.selected ? 'active' : '';
        const { label } = this.props;
        return (
            <button type="button" className={classname} onClick={this.toggle.bind( this )}>
                {label}
            </button>
        );
    }
}


Radio.contextTypes = {
    radioGroup: React.PropTypes.object
};