import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import meetings, { DUCK_NAME as MEETINGS_DUCK_NAME } from './meetings';
import locations, { DUCK_NAME as LOCATIONS_DUCK_NAME } from './locations';

export const reducers = {
  [MEETINGS_DUCK_NAME]: meetings,
  [LOCATIONS_DUCK_NAME]: locations,
};

const appReducer = combineReducers(reducers);

const rootReducer = (state, action) => {
  const newState = state;
  return appReducer(newState, action);
};

export default rootReducer;
