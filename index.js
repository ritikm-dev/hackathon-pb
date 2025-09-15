/**
 * @format
 */
import { AppRegistry } from 'react-native';
import AppNavigator from './AppNavigator'; // ⬅️ Import your navigator
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => AppNavigator); // ⬅️ Use AppNavigator
