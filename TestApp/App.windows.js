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

import TestApp from './TestApp';
import ExampleSpec from '../specs/ExampleSpec';
import {TestHookStore, Tester} from 'cavy' 

const testHookStore = new TestHookStore();

export default class AppWrapper extends React.Component {
    render() {
      return (
        <Tester specs={[ExampleSpec, ExampleSpec]} store={testHookStore}>
          <TestApp />
        </Tester>
      );
    }
};