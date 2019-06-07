import { TestScope } from 'cavy'

export interface ISpec
{
    (spec: TestScope): void
}

export interface ISpecExtension
{
    (spec: TestScope): any
}

// Cavy Tester only accept specs which matches with ISpec, ITestAppSpec is an example to support extended spec
export function toSpec(wrappedFunction: Function ,...args: ISpecExtension[]): ISpec {
    return function (spec: TestScope) {
        const newArgs = args.map(f => f(spec));
        return wrappedFunction(spec, ...newArgs);
    }
}