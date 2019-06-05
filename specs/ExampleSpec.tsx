import { TestScope } from "cavy";
import {TestAppTestScope, toCavySpec} from '../TestApp/utils/TestAppSpec'

export default toCavySpec(function (spec: TestScope, spec2: TestAppTestScope) {
  spec.describe('Example 1', function () {

    spec.it('Test Example 1', async function () {
      await spec2.gotoTestPage('Example1');
      await spec.exists('Example1.TextInput');
      await spec.fillIn('Example1.TextInput', 'This is test example 1');
      await spec.pause(1000);
    });

  });

  spec.describe('Example 2', function () {

    spec.it('Test Example 2', async function () {
      await spec2.gotoTestPage('Example2');
      await spec.exists('ExampleTest.TextInput');
      await spec.fillIn('ExampleTest.TextInput', 'This is test example 2');
      await spec.pause(1000);
    });

  });

  spec.describe('Example 3', function () {

    spec.it('Test Example 3', async function () {
      await spec2.gotoTestPage('Example2');
      await spec.exists('ExampleTest.TextInput');
      await spec.fillIn('ExampleTest.TextInput', 'This is test example 3');
      await spec.pause(1000);
    });

  });
})