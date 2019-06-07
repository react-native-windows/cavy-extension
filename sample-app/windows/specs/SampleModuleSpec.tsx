import { TestScope } from "cavy";
import {SpecHelper, toCavySpec} from '../TestApp/SpecHelper'

export default function (spec: TestScope) {
  let spec2: SpecHelper = new SpecHelper(spec);

  spec.describe('Sample Module', function () {

    spec.it('SampleModule', async function () {
      await spec2.toTestPage('SampleModule');
      await spec.pause(1000);
      await spec.exists('SampleModuleTestPage.Text');
      await spec.pause(1000);
    });

  });

}