import { TestScope } from 'cavy'
import { REF_BACK_BUTTON, REF_SEARCH_BUTTON } from './Consts';

export async function navigateToTestPage(testScope: TestScope, testPage: string) {
    await testScope.fillIn(REF_SEARCH_BUTTON, testPage)
    await testScope.exists(testPage);
    await testScope.press(testPage);
    await testScope.exists(REF_BACK_BUTTON);
}

