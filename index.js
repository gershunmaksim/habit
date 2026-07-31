
/**
 * @format
 */
import './global.css';
import 'react-native-gesture-handler';
import 'react-native-reanimated';
import 'locales/i18n';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import App from 'App';

AppRegistry.registerComponent(appName, () => App);
