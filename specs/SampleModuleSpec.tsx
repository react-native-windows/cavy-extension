import { TestScope } from "cavy";
import TestScope2 from '../TestApp/utils/TestScope2'

export default function(spec: TestScope) {
  let spec2: TestScope2 = new TestScope2(spec);   

      spec.describe('Sample Module', function() {
  
      spec.it('SampleModule', async function() {
        await spec2.gotoTestPage('SampleModule');
        await spec.pause(1000);
        await spec.exists('SampleModuleTestPage.Text');
        await spec.pause(1000);
      });
  
    });

  }