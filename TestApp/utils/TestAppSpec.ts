import {TestScope} from 'cavy'
import toSpec, { ISpec } from './toSpec';
import { REF_BACK_BUTTON, REF_SEARCH_BUTTON } from '../Consts';

export class TestAppTestScope{
    testScope: TestScope;

    constructor(spec: TestScope){
        this.testScope = spec;
    }

    async navigateToTetsPage(testPage: string){
        await this.testScope.fillIn(REF_SEARCH_BUTTON, testPage)
        await this.testScope.exists(testPage);
        await this.testScope.press(testPage);
        await this.testScope.exists(REF_BACK_BUTTON);
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