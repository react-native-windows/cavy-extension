 **cavy-extension**

[![npm version](https://badge.fury.io/js/cavy-extension.svg)](https://badge.fury.io/js/cavy-extension)

**[Cavy](https://github.com/pixielabs/cavy)** is a cross-platform integration test framework for React Native.

**Cavy-extension** is a test page focused cavy extension, and it's ideally for component testing. `SimpleTestApp` setups a two page navigation(mainpage and subpage), and helps you maintains the navigation between them. You only need to focus on the test page area. (yellow part below)

![relationship](https://user-images.githubusercontent.com/6290692/59148946-fabf9b80-89c3-11e9-9404-5e8422051891.png)

It's main functionality:
+ It simplied the steps in component testing and enable user only need to be focused only on authoring test spec and test pages.
+ User only need to provides a testpage, a key which associate swith the testpage. And toTestPage would help to navigate directly to the test page.
+ Allow user to extend the functionality of TestScope and provides IntelliSense when authoring spec.



**Usage**
Check out the [sample app](https://github.com/react-native-windows/cavy-extension/tree/master/sample-app) for a full example of how you may want to integrate cavy-extension into your native testing setup.

***Pre steps***
+ Installation
To get started using Cavy with native reporting, install using yarn:
`yarn add cavy cavy-extension --dev`
or npm:
`npm i --save-dev cavy cavy-extension`
+ create [TestPages](https://github.com/react-native-windows/cavy-extension/blob/master/sample-app/Demo/src/TestApp/TestPages.ts) and replace the app with SimpleTestApp, then hook up them together in a [testapp](https://github.com/react-native-windows/cavy-extension/blob/master/sample-app/Demo/src/TestApp/TestApp.tsx) 
```javascript
      <Tester specs={[ExampleSpec]} store={testHookStore}>
        <SimpleTestApp testPages={TestPages} />
      </Tester>
```
+ convert your project to typescript. It's optionally

***Steps to authoring test case***
1. Write a simple UI test page.
```javascript
export const ExampleTestPage1 = () => {
    const generateTestHook = useCavy();
    const [text, setText] = useState('');

    return <TextInput placeholder="ExampleTestpage 1"
        onChangeText={(text) => setText(text)} value={text}
        ref={generateTestHook('Example1.TextInput')} />;
};

```
2. Aggregate the testpages with keys. For example: Example1
```javascript
export const TestPages: Array<ITestPage> = [
    {
        key: 'Example1',
        title: 'TestExample by import {ExampleTestPage1}',
        page: ExampleTestPage1
    },
    {
        key: 'Example2',
        title: 'TestExample by import ExampleTestPage',
        page: ExaExampleTestPage2
    },
```

3. Write the spec. **toTestPage('Example1')** helps to navigate to test page.
```javascript
      await spec2.toTestPage('Example1');
```

***Functionality of this extension***
- Provides a simple testapp, test main page, back button on subpage. and **toTestPage** to help the navigation. 

  1. Test main page
  
  ![testcaselist](https://user-images.githubusercontent.com/6290692/59141800-3af13080-8968-11e9-9b27-dfd7b9e130ea.png)

  2. Test sub page
  
  ![testcase](https://user-images.githubusercontent.com/6290692/59141799-3af13080-8968-11e9-87c8-216e260422f6.png)

- Add your own functionality to spec and inject it to spec. like **Spec2**

```javascript
function ExampleSpec (spec: TestScope, spec2: SpecHelper) {
  spec.describe('Example 1', function () {

    spec.it('Test Example 1', async function () {
      await spec2.toTestPage('Example1');
...
    });

  });
```
Or
```javascript
export default function (spec: TestScope) {
  let spec2: SpecHelper = new SpecHelper(spec);

  spec.describe('Sample Module', function () {

    spec.it('SampleModule', async function () {
      await spec2.toTestPage('SampleModule');
     ...
    });

  });
```

- A typescript project
IntelliSense for spec or spec2 in IDE.



![intell](https://user-images.githubusercontent.com/6290692/59141901-d3d47b80-8969-11e9-9a3c-87e7c9760cfb.png)


***Test Example***

![mYtEST](https://user-images.githubusercontent.com/6290692/59141798-3af13080-8968-11e9-83f0-90a11b8a16da.gif)
