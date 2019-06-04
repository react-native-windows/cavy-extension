import { TestScope } from "cavy";
import TestScope2 from '../TestApp/utils/TestScope2'

export default function(spec: TestScope) {
  let spec2: TestScope2 = new TestScope2(spec);   

      spec.describe('Example 3', function() {
  
      spec.it('Test Example 3', async function() {
        await spec2.gotoTestPage('SimpleModule');
        await spec.pause(1000);
        await spec.exists('SimpleModuleTestPage.Text');
        await spec.pause(1000);
      });
  
    });

  }