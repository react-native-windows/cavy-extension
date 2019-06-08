var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { toCavySpec } from '../TestApp/SpecHelper';
function ExampleSpec(spec, spec2) {
    spec.describe('Example 1', function () {
        spec.it('Test Example 1', function () {
            return __awaiter(this, void 0, void 0, function* () {
                yield spec2.toTestPage('Example1');
                yield spec.exists('Example1.TextInput');
                yield spec.fillIn('Example1.TextInput', 'This is test example 1');
                yield spec.pause(1000);
            });
        });
    });
    spec.describe('Example 2', function () {
        spec.it('Test Example 2', function () {
            return __awaiter(this, void 0, void 0, function* () {
                yield spec2.toTestPage('Example2');
                yield spec.exists('ExampleTest.TextInput');
                yield spec.fillIn('ExampleTest.TextInput', 'This is test example 2');
                yield spec.pause(1000);
            });
        });
    });
    spec.describe('Example 3', function () {
        spec.it('Test Example 3', function () {
            return __awaiter(this, void 0, void 0, function* () {
                yield spec2.toTestPage('Example2');
                yield spec.exists('ExampleTest.TextInput');
                yield spec.fillIn('ExampleTest.TextInput', 'This is test example 3');
                yield spec.pause(1000);
            });
        });
    });
}
export default toCavySpec(ExampleSpec);
//# sourceMappingURL=ExampleSpec.js.map