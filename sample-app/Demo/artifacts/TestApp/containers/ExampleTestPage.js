"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var react_1 = require("react");
var cavy_1 = require("cavy");
exports.ExampleTestPage1 = function () {
    var generateTestHook = cavy_1.useCavy();
    var _a = react_1.useState(''), text = _a[0], setText = _a[1];
    return <react_native_1.TextInput placeholder="ExampleTestpage 1" onChangeText={function (text) { return setText(text); }} value={text} ref={generateTestHook('Example1.TextInput')}/>;
};
function ExampleTestPage2() {
    var generateTestHook = cavy_1.useCavy();
    var _a = react_1.useState(''), text = _a[0], setText = _a[1];
    return <react_native_1.TextInput placeholder="ExampleTestPage" onChangeText={function (text) { return setText(text); }} value={text} ref={generateTestHook('ExampleTest.TextInput')}/>;
}
exports.default = ExampleTestPage2;
//# sourceMappingURL=ExampleTestPage.js.map