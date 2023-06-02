/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './App';
import Welcome from './Components/welcome';
import SignUp from './Components/signUp';
import Scanned from './Components/scanned';
import Contacts from './Components/contacts';
import EditCard from './Components/editCard';

AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent(appName, () => EditCard);
