import { createAction, createReducer } from 'redux-act';
import MeetingsService from 'services/MeetingsService';

export const DUCK_NAME = 'meetings';

export const INITIAL_STATE = {
  meetings: [],
  loadingMeetings: false,
  errorLoadMeetings: null,
  sucessLoadMeetings: false,
  savingMeeting: false,
  errorSaveMeeting: null,
  successSaveMeeting: false,
  creatingMeeting: false,
  errorCreateMeeting: null,
  successCreateMeeting: false,
  deletingMeetings: false,
  errorDeleteMeetings: null,
  successDeleteMeetings: false,
};

export const actions = [
  `${DUCK_NAME}/LOAD_MEETINGS_STARTED`,
  `${DUCK_NAME}/LOAD_MEETINGS_SUCCEEDED`,
  `${DUCK_NAME}/LOAD_MEETINGS_FAILED`,
  `${DUCK_NAME}/CREATE_MEETING_STARTED`,
  `${DUCK_NAME}/CREATE_MEETING_SUCCEEDED`,
  `${DUCK_NAME}/CREATE_MEETING_FAILED`,
  `${DUCK_NAME}/SAVE_MEETING_STARTED`,
  `${DUCK_NAME}/SAVE_MEETING_SUCCEEDED`,
  `${DUCK_NAME}/SAVE_MEETING_FAILED`,
  `${DUCK_NAME}/DELETE_MEETING_STARTED`,
  `${DUCK_NAME}/DELETE_MEETING_SUCCEEDED`,
  `${DUCK_NAME}/DELETE_MEETING_FAILED`,
];

export const [
  loadMeetingsStarted,
  loadMeetingsSucceeded,
  loadMeetingsFailed,
  saveMeetingStarted,
  saveMeetingSucceeded,
  saveMeetingFailed,
  createMeetingStarted,
  createMeetingSucceeded,
  createMeetingFailed,
  deleteMeetingsStarted,
  deleteMeetingsSucceeded,
  deleteMeetingsFailed,
] = actions.map((action) => createAction(action));

export const loadMeetings = (
  data,
) => async (dispatch) => {
  try {
    const { data } = await MeetingsService.getMeetings(data);
    dispatch(loadMeetingsSucceeded({ data }));
  } catch (error) {
    dispatch(loadMeetingsFailed({ error }));
  }
};

export const createMeeting = (data) => async (dispatch) => {
    dispatch(createMeetingStarted());
    try {
      await MeetingsService.createMeeting(data);
      dispatch(createMeetingSucceeded());
    } catch (error) {
      dispatch(createMeetingFailed({ error }));
    }
  };

export const saveMeeting = (data) => async (dispatch) => {
  dispatch(saveMeetingStarted());
  try {
    await MeetingsService.saveMeeting(data);
    dispatch(saveMeetingSucceeded());
  } catch (error) {
    dispatch(saveMeetingFailed({ error }));
  }
};

export const deleteMeetings = (data) => async (dispatch) => {
    dispatch(deleteMeetingsStarted());
    try {
      await MeetingsService.deleteMeetings(data);
      dispatch(deleteMeetingsSucceeded());
    } catch (error) {
      dispatch(deleteMeetingsFailed({ error }));
    }
  };

const reducer = createReducer({
  [loadMeetingsStarted]: (state) => ({
    ...state,
    loadingMeetings: true,
    error: null,
  }),
  [loadMeetingsSucceeded]: (state, payload) => ({
    ...state,
    loadingMeetings: false,
    successLoadMeetings: true,
    meetings: payload.data,
  }),
  [loadMeetingsFailed]: (state, payload) => ({
    ...state,
    loadingMeetings: false,
    successLoadMeetings: false,
    errorLoadMeetings: payload.error,
  }),
  [saveMeetingStarted]: (state) => ({
    ...state,
    savingMeeting: true,
    errorSaveMeeting: null,
    successSaveMeeting: null,
  }),
  [saveMeetingSucceeded]: (state) => ({
    ...state,
    savingMeeting: false,
    errorSaveMeeting: null,
    successSaveMeeting: true,
  }),
  [saveMeetingFailed]: (state, payload) => ({
    ...state,
    savingMeeting: false,
    successSaveMeeting: false,
    errorSaveMeeting: payload.error,
  }),
  [createMeetingStarted]: (state) => ({
    ...state,
    creatingMeetings: true,
    errorCreateMeeting: null,
    successCreateMeeting: null,
  }),
  [createMeetingSucceeded]: (state) => ({
    ...state,
    creatingMeeting: false,
    errorCreateMeeting: null,
    successCreateMeeting: true,
  }),
  [createMeetingFailed]: (state, payload) => ({
    ...state,
    creatingMeeting: false,
    successCreateMeeting: false,
    errorCreateMeeting: payload.error,
  }),
  [deleteMeetingsStarted]: (state) => ({
    ...state,
    deletingMeetings: true,
    errorDeleteMeeting: null,
    successDeleteMeeting: null,
  }),
  [deleteMeetingsSucceeded]: (state) => ({
    ...state,
    deletingMeeting: false,
    errorDeleteMeeting: null,
    successDeleteMeeting: true,
  }),
  [deleteMeetingsFailed]: (state, payload) => ({
    ...state,
    deletingMeeting: false,
    successDeleteMeeting: false,
    errorDeleteMeeting: payload.error,
  }),
}, INITIAL_STATE);

export default reducer;
