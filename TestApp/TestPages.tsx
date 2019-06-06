import ExaExampleTestPage2, { ExampleTestPage1 } from './containers/ExampleTestPage'
import { SampleModuleTestPage } from './components/SampleModule'
import { ITestPage } from './SimpleTestApp'

export const TestPages: Array<ITestPage> = [
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
        key: 'SampleModule',
        page: SampleModuleTestPage
    },
    {
        key: 'Example4',
        title: 'TestExample using require',
        page: require('./containers/ExampleTestPage')
    },
];