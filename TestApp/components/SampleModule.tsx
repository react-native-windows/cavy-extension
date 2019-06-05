import {hook} from 'cavy'

import React from 'react';
import {Text, NativeModules} from 'react-native';

const SampleModule = NativeModules.SampleModule;

class SampleModuleTestPage extends React.Component<any, any> 
{
  constructor(props){
    super(props)
    this.state = {}
  }

  componentDidMount() {
    SampleModule.method1("call method1");
    SampleModule.method2('call method 2', (msg) => {this.setState({message: msg})});
  }

  render() {
    if (this.state.message)
    {
      return <Text ref={this.props.generateTestHook('SampleModuleTestPage.Text')}>{JSON.stringify(this.state.message)}</Text>
    } else
    {
      return <Text>Unknown status</Text>
    }

  }
}
const TestableSampleModuleTestPage = hook(SampleModuleTestPage);
export default TestableSampleModuleTestPage