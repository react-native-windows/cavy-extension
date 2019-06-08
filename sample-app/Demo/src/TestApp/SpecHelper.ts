import {toSpec} from 'cavy-extension'
import {navigateToTestPage} from 'cavy-extension'
import {TestScope} from 'cavy'

export class SpecHelper{
    testScope: TestScope;
    constructor(testScope: TestScope){
        this.testScope = testScope;
    }

    async toTestPage(testPageKey: string) {
        navigateToTestPage(this.testScope, testPageKey)
    }

    fail = (err: string) => {
        throw (err)
    }
} 

export function toCavySpec(wrappedFunction: Function){    
    return toSpec(wrappedFunction, (testScope) => {
         return new SpecHelper(testScope);
     })
}