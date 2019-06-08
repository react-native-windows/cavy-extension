var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { SpecHelper } from '../TestApp/SpecHelper';
export default function (spec) {
    let spec2 = new SpecHelper(spec);
    spec.describe('Sample Module', function () {
        spec.it('SampleModule', function () {
            return __awaiter(this, void 0, void 0, function* () {
                yield spec2.toTestPage('SampleModule');
                yield spec.pause(1000);
                yield spec.exists('SampleModuleTestPage.Text');
                yield spec.pause(1000);
            });
        });
    });
}
//# sourceMappingURL=SampleModuleSpec.js.map