import React, { Component } from 'react';

export default class MySection extends Component {
    render() {
        return(
            <section>
                <h1>This is subject.</h1>
                {this.props.children}
            </section>
        );
    }
}