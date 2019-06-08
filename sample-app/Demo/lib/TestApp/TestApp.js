import React from 'react';
import { SimpleTestApp } from 'cavy-extension';
import ExampleSpec from '../specs/ExampleSpec';
// SampleModule only valid for react-native-windows
//import SampleModuleSpec from '../specs/SampleModuleSpec'
//@ts-ignore Module '"../../../../node_modules/@types/cavy"' has no exported member 'TestHookStore'.ts(2305)
import { TestHookStore, Tester } from 'cavy';
import { TestPages } from './TestPages';
const testHookStore = new TestHookStore();
class TestApp extends React.Component {
    render() {
        return (
        //@ts-ignore Type '{ children: Element; specs: ISpec[]; store: any; }' is not assignable to type
        <Tester specs={[ExampleSpec]} store={testHookStore}>
        <SimpleTestApp testPages={TestPages}/>
      </Tester>);
    }
}
;
export default TestApp;
//# sourceMappingURL=TestApp.js.map