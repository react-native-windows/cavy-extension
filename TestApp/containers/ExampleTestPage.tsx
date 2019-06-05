import {TextInput} from 'react-native'
import React, { Component, useState } from 'react'
import {useCavy, hook } from 'cavy'

export const ExampleTestPage1 = () => {
    const generateTestHook = useCavy();
    const [text, setText] = useState('');
    return <TextInput placeholder="ExampleTestpage 1" onChangeText={(text) => setText(text)} value={text} ref={generateTestHook('Example1.TextInput')}/>;
};

class ExampleTestComponent extends Component<any, any>{
    constructor(props) {
        super(props);
        this.state = {text:''}
    }

    render() {
        return <TextInput placeholder="ExampleTestPage 2 or 3" onChangeText={(text) => this.setState({text})} value={this.state.text} ref={this.props.generateTestHook('ExampleTest.TextInput')}/>
    }
}

const ExampleTestPage2 = hook(ExampleTestComponent);
export default ExampleTestPage2;