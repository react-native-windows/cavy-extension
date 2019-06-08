/**
 * @format
 */

import {AppRegistry, TextInput} from 'react-native';
import {name as appName} from './app.json';
import App from './lib/TestApp/TestApp'

AppRegistry.registerComponent(appName, () => App);
