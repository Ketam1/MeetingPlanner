import axios from 'axios';
import { API_URL } from 'common/helpers/api';

export default class MeetingsRepository {
  constructor({ routePrefix = API_URL, routeVersion = 'v1', routeContext = 'meetings' } = {}) {
    this.url = `${routePrefix}/api/${routeVersion}/${routeContext}/`;
  }

  getMeetings = async (data) => axios.post(
    `${this.url}query`,
    data
  );

  saveMeeting = async (data) => axios.post(
    `${this.url}edit`,
    data
  );

  createMeeting = async (data) => axios.post(
    `${this.url}add`,
    data
  );

  deleteMeetings = async (data) => axios.post(
    `${this.url}delete`,
    data
  );s
}
