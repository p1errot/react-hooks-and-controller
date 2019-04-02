import React, { Component } from 'react';

export default class Paragraph extends Component {
    handleClick = event => {
        const { update } = this.props;
        event.preventDefault();

        update('public/index.html');
    }

    render() {
        const { file } = this.props;

        return (
            <p>
                Edit <code>{file}</code> and save to
                <a
                    href="#hash"
                    onClick={this.handleClick}
                    style={{
                        color: '#fff',
                        paddingLeft: '7px',
                        textDecoration: 'none'
                    }}
                >
                    reload
                </a>.
            </p>
        );
    }
}
