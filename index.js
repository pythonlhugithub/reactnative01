/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Home from './Home';
import App from './Root'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Home);
