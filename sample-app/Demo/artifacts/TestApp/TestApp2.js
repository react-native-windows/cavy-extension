"use strict";
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// import {SimpleTestApp} from 'cavy-extension';
// import ExampleSpec from '../specs/ExampleSpec';
// import SampleModuleSpec from '../specs/SampleModuleSpec'
//@ts-ignore Module '"../../../../node_modules/@types/cavy"' has no exported member 'TestHookStore'.ts(2305)
// import { TestHookStore, Tester } from 'cavy'
// import { TestPages } from './TestPages'
var react_1 = require("react");
var react_native_1 = require("react-native");
// const testHookStore = new TestHookStore();
var TestApp = /** @class */ (function (_super) {
    __extends(TestApp, _super);
    function TestApp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TestApp.prototype.render = function () {
        return (
        //@ts-ignore Type '{ children: Element; specs: ISpec[]; store: any; }' is not assignable to type
        // <Tester specs={[]} store={}>
        // <SimpleTestApp testPages={[]} />
        // </Tester>
        <react_native_1.TextInput />);
    };
    return TestApp;
}(react_1.Component));
;
exports.default = TestApp;
//# sourceMappingURL=TestApp2.js.map