import { TestScope } from "cavy";
import {TestAppTestScope} from '../TestApp/utils/TestAppSpec'

export default function (spec: TestScope) {
  let spec2: TestAppTestScope = new TestAppTestScope(spec);

  spec.describe('Sample Module', function () {

    spec.it('SampleModule', async function () {
      await spec2.navigateToTetsPage('SampleModule');
      await spec.pause(1000);
      await spec.exists('SampleModuleTestPage.Text');
      await spec.pause(1000);
    });

  });

}