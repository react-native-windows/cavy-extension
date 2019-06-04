import {TextInput} from 'react-native'
import React, { Component } from 'react'
import {useCavy, hook } from 'cavy'

export const ExampleTestPage1 = () => {
    const generateTestHook = useCavy();

    return <TextInput placeholder="ExampleTestpage 1" ref={generateTestHook('Example1.TextInput')}/>;
};

class ExampleTestComponent extends Component<any>{
    render() {
        return <TextInput placeholder="ExampleTestPage 2 or 3" ref={this.props.generateTestHook('ExampleTest.TextInput')}/>
    }
}

const ExampleTestPage2 = hook(ExampleTestComponent);
export default ExampleTestPage2;