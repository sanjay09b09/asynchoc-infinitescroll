import React, { Component } from 'react';
import Hoc from './hoc';

const AsyncButton = Hoc(() => {
    return import('./asynccomponent');
});
class Question1 extends Component {
    render() {
        return (
            <div>
            <h3>Write a logic to load components asynchronously in React app with an HOC.</h3>
                <AsyncButton></AsyncButton>
            </div>
        )
    }

}
export default Question1;