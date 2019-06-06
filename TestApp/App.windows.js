/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import TestApp from './SimpleTestApp';
import ExampleSpec from '../specs/ExampleSpec';
import SampleModuleSpec from '../specs/SampleModuleSpec'
import {TestHookStore, Tester} from 'cavy' 
import {TestPages} from './TestPages'

const testHookStore = new TestHookStore();

export default class AppWrapper extends React.Component {
    render() {
      return (
        <Tester specs={[SampleModuleSpec, ExampleSpec]} store={testHookStore}>
          <TestApp  testPages={TestPages}/>
        </Tester>
      );
    }
};