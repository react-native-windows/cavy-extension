/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

// import {SimpleTestApp} from 'cavy-extension';
// import ExampleSpec from '../specs/ExampleSpec';
// import SampleModuleSpec from '../specs/SampleModuleSpec'
//@ts-ignore Module '"../../../../node_modules/@types/cavy"' has no exported member 'TestHookStore'.ts(2305)
// import { TestHookStore, Tester } from 'cavy'
// import { TestPages } from './TestPages'

import { Component } from 'react';
import { TextInput } from 'react-native';

// const testHookStore = new TestHookStore();

class TestApp extends Component {
  render() {
    return (
      //@ts-ignore Type '{ children: Element; specs: ISpec[]; store: any; }' is not assignable to type
      // <Tester specs={[]} store={}>
        // <SimpleTestApp testPages={[]} />
      // </Tester>
      <TextInput />
    );
  }
};

export default TestApp;