"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ExampleTestPage_1 = __importStar(require("./containers/ExampleTestPage"));
var SampleModule_1 = require("./components/SampleModule");
exports.TestPages = [
    {
        key: 'Example1',
        title: 'TestExample by import {ExampleTestPage1}',
        page: ExampleTestPage_1.ExampleTestPage1
    },
    {
        key: 'Example2',
        title: 'TestExample by import ExampleTestPage1',
        page: ExampleTestPage_1.default
    },
    {
        key: 'Example3',
        title: 'TestExample using require',
        page: require('./containers/ExampleTestPage')
    },
    {
        key: 'SampleModule',
        page: SampleModule_1.SampleModuleTestPage
    },
    {
        key: 'Example4',
        title: 'TestExample using require',
        page: require('./containers/ExampleTestPage')
    },
];
//# sourceMappingURL=TestPages.js.map