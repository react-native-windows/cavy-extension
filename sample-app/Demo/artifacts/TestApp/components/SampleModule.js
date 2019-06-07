"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_native_1 = require("react-native");
var cavy_1 = require("cavy");
var SampleModule = react_native_1.NativeModules.SampleModule;
function SampleModuleTestPage() {
    var _a = react_1.useState(null), result = _a[0], setResult = _a[1];
    var generateTestHook = cavy_1.useCavy();
    react_1.useEffect(function () {
        if (!result) {
            SampleModule.method1("call method1");
            SampleModule.method2('call method 2', function (result) { setResult(result); });
        }
    });
    if (result) {
        return <react_native_1.Text ref={generateTestHook('SampleModuleTestPage.Text')}>
      {JSON.stringify(result)}
    </react_native_1.Text>;
    }
    else {
        return <react_native_1.Text>Unknown status</react_native_1.Text>;
    }
}
exports.SampleModuleTestPage = SampleModuleTestPage;
//# sourceMappingURL=SampleModule.js.map