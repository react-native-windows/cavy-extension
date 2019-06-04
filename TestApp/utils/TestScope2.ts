import {TestScope} from 'cavy'

export default class TestScope2{
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