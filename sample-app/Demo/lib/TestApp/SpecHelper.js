var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { toSpec } from 'cavy-extension';
import { navigateToTestPage } from 'cavy-extension';
export class SpecHelper {
    constructor(testScope) {
        this.fail = (err) => {
            throw (err);
        };
        this.testScope = testScope;
    }
    toTestPage(testPageKey) {
        return __awaiter(this, void 0, void 0, function* () {
            navigateToTestPage(this.testScope, testPageKey);
        });
    }
}
export function toCavySpec(wrappedFunction) {
    return toSpec(wrappedFunction, (testScope) => {
        return new SpecHelper(testScope);
    });
}
//# sourceMappingURL=SpecHelper.js.map