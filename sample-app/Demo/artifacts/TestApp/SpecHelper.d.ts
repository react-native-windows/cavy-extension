import { TestScope } from 'cavy';
export declare class SpecHelper {
    testScope: TestScope;
    constructor(testScope: TestScope);
    toTestPage(testPageKey: string): Promise<void>;
    fail: (err: string) => never;
}
export declare function toCavySpec(wrappedFunction: Function): import("cavy-extension/dist/TestSpecExt").ISpec;
