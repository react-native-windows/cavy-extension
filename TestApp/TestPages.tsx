import React, { Component } from 'react';
import {Text, View,FlatList, TouchableOpacity} from 'react-native'
import { JSXElement } from '@babel/types';
import ExaExampleTestPage2, {ExampleTestPage1} from './containers/ExampleTestPage'
import SimpleModulePage from './components/SampleModule'

export interface ITestPage{
    key: string;
    title?: string;
    page: Function | Component | any;
}

export const TestPages: Array<ITestPage> =  [
    {
        key: 'Example1',
        title: 'TestExample by import {ExampleTestPage1}',
        page: ExampleTestPage1
    },
    {
        key: 'Example2',
        title: 'TestExample by import ExampleTestPage1',
        page: ExaExampleTestPage2
    },
    {
        key: 'Example3',
        title: 'TestExample using require',
        page: require('./containers/ExampleTestPage')
    },
    {
        key: 'SimpleModule',
        page: SimpleModulePage
    }
];

export const TestModules: { [key: string]: ITestPage } = {};

TestPages.forEach((TestPage: ITestPage) => {
    TestModules[TestPage.key] = TestPage;
});