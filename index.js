/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './android/app/src/App';
import {name as appName} from './app.json';
import Menu from './android/app/src/Menu'

AppRegistry.registerComponent(appName, () => Menu);
