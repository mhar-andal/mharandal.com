import React, { Component } from 'react';
import { render } from 'react-dom';

class Hello extends Component {
    render() {
        return (
            <div>
                <h1>Hello from react es6</h1>
            </div>
        );
    }
}
render(<Hello />, document.getElementById('root'));