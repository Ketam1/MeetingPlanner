import { createAction, createReducer } from 'redux-act';
import LocationsService from 'services/LocationsService';

export const DUCK_NAME = 'meetings';

export const INITIAL_STATE = {
  locations: [],
  loadingLocations: false,
  errorLoadLocations: null,
  successLoadLocations: false,
};

export const actions = [
  `${DUCK_NAME}/LOAD_LOCATIONS_STARTED`,
  `${DUCK_NAME}/LOAD_LOCATIONS_SUCCEEDED`,
  `${DUCK_NAME}/LOAD_LOCATIONS_FAILED`,
];

export const [
  loadLocationsStarted,
  loadLocationsSucceeded,
  loadLocationsFailed,
] = actions.map((action) => createAction(action));

export const loadLocations = () => async (dispatch) => {
  try {
    const { data } = await LocationsService.getLocations();
    dispatch(loadLocationsSucceeded({ data }));
  } catch (error) {
    dispatch(loadLocationsFailed({ error }));
  }
};

const reducer = createReducer({
  [loadLocationsStarted]: (state) => ({
    ...state,
    loadingLocations: true,
    errorLoadLocations: null,
  }),
  [loadLocationsSucceeded]: (state, payload) => ({
    ...state,
    loadingLocations: false,
    successLoadLocations: true,
    locations: payload.data,
  }),
  [loadLocationsFailed]: (state, payload) => ({
    ...state,
    loadingLocations: false,
    successLoadLocations: false,
    errorLoadLocations: payload.error,
  }),
}, INITIAL_STATE);

export default reducer;
