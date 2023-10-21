import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import homeReducer from '../reducers/home';
import AsyncStorage from '@react-native-async-storage/async-storage';

const homeConfig = {
  key: 'home',
  storage: AsyncStorage,
};
const detailsConfig = {
  key: 'home',
  storage: AsyncStorage,
};
export default combineReducers({
  home: persistReducer(homeConfig, homeReducer),
  details: persistReducer(detailsConfig, homeReducer),
});
