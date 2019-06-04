import {hook} from 'cavy'

import React from 'react';
import {Text, NativeModules} from 'react-native';

const {
    SampleModule
} = NativeModules;

export default class SimpleModuleTestPage extends React.Component<any, any> 
{
  constructor(props){
    super(props)
    this.state = {}
  }

  componentDidMount() {
    SampleModule.method1("call method1");
    SampleModule.method1('call method 2', (msg) => {this.setState({message: msg})});
  }

  render() {
    if (this.state.message)
    {
      return <Text ref={this.props.generateTestHook('SimpleModuleTestPage.Text')}>{this.state.message}</Text>
    } else
    {
      return <Text>Unknown status</Text>
    }

  }
}
