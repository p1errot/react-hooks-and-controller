import React, { Component } from 'react';

export default class TextsController extends Component {
    constructor(props) {
        super(props);
        const { text } = this.props;

        this.state = {
            updated: text
        }
    }

    changeText = newText => {
        this.setState({
            updated: newText
        });
    }

    render() {
        const { children } = this.props;

        return children({
            ...this.state,
            changeText: this.changeText
        });
    }
}
