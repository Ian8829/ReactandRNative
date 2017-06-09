import React, { Component } from 'react';

export default class MyButton extends Component {
    static defaultProps = {
        disabled: false,
        text: 'Props Btn'
    };

    render() {
        const { disabled, text} = this.props;

        return(
            <button disabled={disabled}>{text}</button>
        );
    }
}