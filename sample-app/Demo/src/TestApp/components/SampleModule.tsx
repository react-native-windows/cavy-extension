//@ts-ignore
import React, { useEffect, useState } from 'react';
import { Text, NativeModules } from 'react-native';
import { useCavy } from 'cavy'

const SampleModule = NativeModules.SampleModule;

export function SampleModuleTestPage() {
  const [result, setResult] = useState(null)
  const generateTestHook = useCavy();

  useEffect(() => {
    if (!result) {
      SampleModule.method1("call method1");
      SampleModule.method2('call method 2', (result: any) => { setResult(result) });
    }
  })

  if (result) {
    return <Text ref={generateTestHook('SampleModuleTestPage.Text')}>
      {JSON.stringify(result)}
    </Text>
  } else {
    return <Text>Unknown status</Text>
  }
}