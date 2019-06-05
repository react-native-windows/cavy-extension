import {TestScope} from 'cavy'
import toSpec, { ISpec } from './toSpec';

export class TestAppTestScope{
    testScope: TestScope;

    constructor(spec: TestScope){
        this.testScope = spec;
    }

    async gotoTestPage(testPage: string){
        await this.testScope.exists(testPage);
        await this.testScope.press(testPage);
        await this.testScope.exists('CavyTest.Back');
    }
}

interface ITestAppSpec {
    (testScope: TestScope, testScopeExt: TestAppTestScope): any;
}
export function toCavySpec(wrappedFunction: ITestAppSpec){    
    return toSpec(wrappedFunction, (testScope) => {
        return new TestAppTestScope(testScope);
    })
}