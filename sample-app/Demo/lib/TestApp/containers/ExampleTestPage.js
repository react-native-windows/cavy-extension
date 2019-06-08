//@ts-ignore
import React, { useState } from 'react';
import { TextInput } from 'react-native';
import { useCavy } from 'cavy';
export const ExampleTestPage1 = () => {
    const generateTestHook = useCavy();
    const [text, setText] = useState('');
    return <TextInput placeholder="ExampleTestpage 1" onChangeText={(text) => setText(text)} value={text} ref={generateTestHook('Example1.TextInput')}/>;
};
export default function ExampleTestPage2() {
    const generateTestHook = useCavy();
    const [text, setText] = useState('');
    return <TextInput placeholder="ExampleTestPage" onChangeText={(text) => setText(text)} value={text} ref={generateTestHook('ExampleTest.TextInput')}/>;
}
//# sourceMappingURL=ExampleTestPage.js.map